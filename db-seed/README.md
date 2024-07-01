# MongoDB Seed

Seeding service to populate the db with some data

Used the mongo official image

Depends on `flags/on.txt` to seed the db and removes that once it has executed the seed

Uses a bit of bash scripting

## Data

Drumsheds has 1x ticket

EXHALE has 9x tickets

Copied from the CLIENT site

Made sure to have 4x tickets since the design I intended to build was a big bold horiz scroller so I didn't need a huge deal of items. 

Considered a DataGrid at first, but thought it was too boring for the product.

## Problems

bash reading a the `flags/on.txt` kept returning truethy for an empty string :shrug:. Gained a few gray hairs on this...