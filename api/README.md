# API

Main api layer

## Stack

- Typescript
- Prisma (ORM)
- Express

## Missing

- Lots....
- Request error handling
- Auth
- Proper validation
- Caching
- E2E tests
    - Why not unit tests? 
        - Those are missing too, but I've done a small amount of tranforms

## Paths

GET /event/[id]

GET /event/list

GET /ticket/[id]

GET /ticket/list?prefix=[eventId]

- added `eventId` to Ticket and Event
- wanted to show composite key design for data fetching (something I've done a lot with DynamoDB)
- was planning to fetch the Tickets with Event using Prisma model linking, but ran out of time

POST /event/

- doesn't work because Prisma uses transactions for create, which requires MongoDB replication
- db service isn't configured for replication
    - all this work was WIP, but decided to stop because of time


NB: see the `Insomnia_2024-03-25.json` file to quickly load up all the routes in Insomnia (like Postman) and start querying the API

Rest of routes:
- Actually wasn't going to bother in spite of the brief
- The ORM make light work of these
- Also the UI doesn't feature them and I normally prefer to build what I need when I need it vs building more

## Future 

- Work on the above missing
- Why not use Deno here? Typescript native, relatively stable and nice to use.
- AWS Lambdas can handle HTTP events so this whole api could've been a Lambda
    - Didn't go down this way because I thought it would disqualify me
    - My gosh did I jump through some hoops to get the same stack running
    - The AWS CDK (like Terraform) project is in `WIP_serverless_api` and honestly was done in 1h vs about 15h+ for what you see here (the whole stack) :shrug: