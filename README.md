# Docker web cluster

## Description

Stack to match [brief](./BRIEF.md)

## Project status

Stopped at CREATE Event because the MongoDB replication service config is not working as expected and thats a requirement for Prisma on the api service.

Includes an handmade design made by me (read more below). 

Styling is sparse. 

Stack requirement is here and I also left a WIP of a cloud-based option. 

The cloud option using CDK was so much easier to build vs the docker stack. 

## Getting started

### Pre-requisites

- Docker
- Make

### Commands

Uses make to script the stack

Building: 

`make build` 

Start the stack:

`make up` 

Clean up the stack:

`make down` 

NB: 

db-seed will delete `db-seed/flags/on.txt` after it runs 1x so if you've cleaned the db recreate the file `touch /db-seed/flags/on.txt`


## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals

- Made theses designs here: https://www.figma.com/design/viT63nxzS1fa6WkQGlbdWN/events-designs-alan-ionita?node-id=0-1&t=MBrvTvJn5mMDuc9z-1mKK-1
- Rationale:
    - the images are quite powerful from existing events
    - The intention was to propagate shock value and intrigue using these images
            - With the a lot opportunities for scrollable carousels on mobile
            - Equally really nice visual elements for both images and portrait video allowing the event organisers to reuse some of that content or in a way nudging them towards that type of content creation
    - I also wanted the user to browse the events like wall posters because I felt the nostalgia associated to a wall of event posters
    - Originally decide on a more clinical and utilitarian DataGrid (like "What's on"), but realistically I wanted something more bold
    - Also wanted to introduce horizontal scrolling to add a bit of fun
    - The offset boxes are both a design element and an inside hint to my previous work building bruntwood.co.uk
    - Huge future opportunities for motion: subtle depth changes, movement based parallax, easing etc.
- Downsides:
    - Tricky to manage all of these colour combinations. I'd probably reach for a computable solution, but will just set colours in the backend
    - Hard to narrow down by date, location etc. Planning to introduce search next to '+ add event" but don't think I need to showcase that. I have another project I can share that features search
    - Tickets UI needs some love
    - Add event UI needs to include 'Add tickets' which depending on time I'll attempt a code solution

## Installation

Each service has their own README.md with installation descriptions

## Usage

- Read for Event
- Read for Ticket
- Create for Event (not working - because MongoDB replication config didn't work)

## Roadmap

Each service has within their README.md a `#FUTURE` section where I outline what I'd do if time was Infinity. 

## Acknowledgment

Will need to populate this properly, but I have a lot of references in the [log](./LOG.md)

## Authors

Alan Ionita

## License
Alan Ionita, sole use by owner, not for commercial use

