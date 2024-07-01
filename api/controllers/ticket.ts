import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function readOne(id: string) {
    try {
        const ticket = await prisma.ticket.findUniqueOrThrow({
            where: {
                id
            },
        });

        return ticket;

    } catch (err) {
        console.error('Error [Ticket.readOne] ::', err.message)
    }
}

async function readMany(prefix: string) {
    try {
        const ticket = await prisma.ticket.findMany({
            where: {
                eventId: {
                    startsWith: prefix,
                }
            }
        });

        return ticket;

    } catch (err) {
        console.error('Error [Ticket.readMany] ::', err.message)
    }
}

export default {
    readMany,
    readOne
}