import { ObjectId } from 'bson'
import { PrismaClient, Prisma } from '@prisma/client';
import { EventAdd } from '../types'
import { buildEventID, validateEventCreateInputs } from './utils';

const prisma = new PrismaClient();

async function readOne(id: string) {
    try {
        const event = await prisma.event.findUniqueOrThrow({
            where: {
                id
            },
        });

        return event;

    } catch (err) {
        console.error('Error [Event.read] ::', err.message)
    }
}

async function readMany() {
    try {
        const event = await prisma.event.findMany();

        return event;

    } catch (err) {
        console.error('Error [Event.all] ::', err.message)
    }
}

async function create(inputData: EventAdd) {
    try {
        const id = new ObjectId().toString()
        const { name, date, description, city, venue } = inputData;
        validateEventCreateInputs(name, 'Name');
        validateEventCreateInputs(date, 'Date');
        validateEventCreateInputs(description, 'Description');
        validateEventCreateInputs(city, 'City');
        validateEventCreateInputs(venue, 'Venue')
        const eventId = buildEventID({ name, date, city })
        const rec = await prisma.event.create({ data: { ...inputData, eventId, id } });
        return rec

    } catch (err) {
        console.error('Error [Event.create] :', err.message);
        return err
    }
}

export default {
    readOne,
    readMany,
    create
}