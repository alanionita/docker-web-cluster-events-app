#!/bin/sh

FLAG_FILE="/flags/on.txt"

seed() {
    mongoimport -u $MONGODB_USERNAME -p $MONGODB_PASSWORD --db $MONGODB_DATABASE --collection $1 --file $2 --jsonArray --uri "mongodb://db:27017"
}

# Check if the .env file exists
if [ -f "$FLAG_FILE" ]; then
    # Make and seed Events 
    seed "Event" "eventSeed.json"

    # Make and seed Tickets 
    seed "Ticket" ticketSeed.json
    rm "$FLAG_FILE"
else    
    echo "Flag not found"
fi

