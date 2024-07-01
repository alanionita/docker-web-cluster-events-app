export type KEvent = {
    id: string
    name: string
    date: string
    description: string
    venue: string
    city: string
    url: string
    kUrl: string
    imgUrl: string
    eventId: string
}

export type EventAdd = {
    name: string
    date: string
    description: string
}

export type KTicket = {
    id: string
    name: string
    type: string
    price: string
    fee: string
    availability: boolean
    amount: number
    eventId: string
}

export type IGetEventsOutput = Array<KEvent>;