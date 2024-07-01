# Brief

design a fullstack app
    - Events API
    - UI frontend that will list events fetched from the API endpoint
            - display the event details with tickets info
- one repo
    - /api
    - /events
    - db
    - docker-compose.yml
    - README.md
- the /api and /events directories should have their own simple Dockerfile
    - build individually
    - run individually
- docker-compose.yml
    - define both api and events as services
    - which will be automatically built and started upon calling the docker-compose.yml
    - a container for the DB
- SKIP
    - CI config / deployment
    - Secret Management
- When complete share the repo

## Entities

Event:
- name
- date
- description

Ticket
- name
- type (adult, family, child)
- price
- booking fee
- availability (available or sold out)

## Backend

- TS + Node + any framework
- simple REST API to CRUD the Events data
- database of choice || or read/write from/to JSON file
- EXTRA
        - use of cloud-based services

## Frontend

- TS + React + any framework
- 3 pages
        - 1. form that allow the user to submit the event data
        - 2. DataGrid: display the list of events reading the data from Events API
        - 3. Display the selected event details
                - Show list of tickets on sale
- Styling should be simple
- DONT:
        - need to be responsive
- DO:
        - use UI frameworks
- EXTRA:
        - Add filtering
        - Add sorting
        - Add paging
        - Other useful enhancements
