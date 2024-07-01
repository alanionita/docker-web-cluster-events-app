# Step 1 /api

- write `docker-compose`
- make api/ folder and write `Dockerfile` for api
- init npm
- install `express`
- write `index.js` hello-world file
- Start with `docker-compose up` and check via postman

# Step 2 /ui

- update `docker-compose`
- install nextjs started `npx create-next-app@latest`
    - test the app
- update the ports and rebuild
    - test the app
- Add Docker file
    - test docker compose
    - adds Makefile to make it easier to script
    + build is ~50s - should fix

# Step 3 /db

- initialise a MongoDB `db` service
x create a `k_events` db 
    - turns out that there's a longstanding open issue (2019) with the mongo image whereas `INITDB_*` env variables are not correctly used
        - after a bunch of frutiless debugging it seems to be required that a seed script is present in the image
        - link to Github issue https://github.com/docker-library/mongo/issues/329
            - suggestion there to use the Bitnami images - https://hub.docker.com/r/bitnami/mongodb
- fixed the db user creation by replacing the images with bitnami

# Step 4 /db-seed

- authenticates another service
- imports seed data
- used example from `https://valenciandigital.com/insights/seeding-data-into-mongodb-using-docker` 
    - liked the use of the db-seed as another service
    - also liked the use of bash scripting with `mongoimport` and sample json 
    - the sample json files I can reuse later for API tests and schema definitions
    - I will have to update a few services if the schema is changing
- also decided here to add `venue, city, url, kUrl, imgUrl` to each event
    - this increases the Event entity, but I needed this in the UI and didn't want to add another `bff` service that enriches the data with these attributes
    - `kUrl` is a link to CLIENT because I wanted to make it easier to get to that page without saving things elsewhere

# Step 5 /api

x Refactor to use TS 
    - installed TS
x Implement ORM  using Prisma
    - was considering TypeORM because I'm used to mongoose and the api was familiar, plus the syntax felt familiar to some of the aws-sdk APIs for DynamoDB and the newer version of those which use transactions
    - in the end picked Prisma because it's TS native
    - use the quickstart guide https://www.prisma.io/docs/getting-started/quickstart
    - also using the mongodb docs https://www.prisma.io/docs/orm/overview/databases/mongodb 
    - also using this repo example here of TS+Prisma+Mongo - https://github.com/vaguue/express-typescript
    - some issues with the connection when running locally, finally fixed by simplifying the connection str vs the docs
        - NB. will need to remember this for service to service comms
x Test the environment via the docker stack
    x Resolve binary issue for `prisma generate` 
        - using Ubuntu for local dev and Alpine for the container
        - eventually found the resolution of setting the PRISMA env vars before `npm i` withing the container
    x Resolve prisma paths
        - since we're running the TS build inside the container the prisma schema location changed
        - pass `--schema=NEW_LOC` to `prisma generate`
        - Actually I hadn't copied the `prisma/*` to the container
        - Had to fix the Dockerfile to properly serve files from dist/ 
    - set the DB_URL to the service host not localhost as in the ENV     
- Essentially just wanted to make sure the api connects to the db for 1 path
    - This gives me a nice infrastructure PASS 

# Step 6 /ui - read event

x Make the UI read data from the api
- Goal: to have a fully connected stack with visual rendering of data in the UI
x Add dynamic route for Event
    x fetch data from the api
x Configure the docker stack to do the same

# Step 7 /api + /ui - read events 

x Make home render many Events
    x Fullstack feature
x Fix seed from not populating db multiple times

# Step 8 /api + /ui - read tickets

x Render tickets on Event page
x Add /api method for ticket/list?prefix=EVENT_ID
    - fetches all Tickets where prefix matches event id
    - this allows us to get all tickets per event
        - eg. Drumshed 1x ticket or Exhale 9x tickets
    - docs: https://www.prisma.io/docs/orm/prisma-client/queries/filtering-and-sorting
x Add the call to the frontend for /event/[id]
    - Adds fallback to 'No tickets found' when no tickets are retrieved
- adds one more ticket to the seed 
    - ticket for Drumshed - which is the all access ticket
- updates schema for Ticket
- changed the use of Prima client in order to stop weird caching issues

# Step 9 /api + /ui - create event

x Add form to UI
    x add `react-form` on a new /event/add route
    - should also add a modal to intercept this route but later
        - https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes
        - and https://dev.to/noel_ethan/how-to-create-modals-with-unique-routes-in-nextjs-a-guide-to-intercepting-routes-k40
    - using docs - https://react-hook-form.com/advanced-usage?
    + Suggestion:
        - use Shadcn for the component styling
            - https://ui.shadcn.com/docs/components/accordion
            - accessible component library
        - Drawer might be cool for add events 
            - https://ui.shadcn.com/docs/components/drawer
. Add api/event POST that creates the events 
    x Update the Event schema to extend the optional items
    x Validate the incoming data
        - simple remove of bad characters - super naive
    . Test in insomnia
        . Fix Prisma create with mongo transactions
            . Needs to setup the mongodb with replication
            - [STOP] will end the challenge here, because I've already spent too much time
            - Prisma docs https://github.com/prisma/prisma/blob/main/docker/docker-compose.yml
            - interesting guide on it https://blog.devgenius.io/how-to-deploy-a-mongodb-replicaset-using-docker-compose-a538100db471
. [future] Fix the backend Event to include tickets
    - save network calls on FE, see docs https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb/querying-the-database-typescript-mongodb#write-data-into-the-database
. Call the new BE path from the UI
. Redirect to / after a successful create
