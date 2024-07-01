import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { KEvent, KTicket } from '../../../types';

async function getEvent(id: string): Promise<KEvent> {
  const url = process.env.API_DOMAIN + '/event/' + id
  const res = await fetch(url)

  if (!res.ok) {
    console.error(JSON.stringify(res))
    throw new Error('Failed to fetch Post data')
  }

  return res.json()
}

async function getTickets(id: string): Promise<Array<KTicket>> {
  const url = process.env.API_DOMAIN + '/ticket/list?prefix=' + id
  const res = await fetch(url)

  if (!res.ok) {
    console.error(JSON.stringify(res))
    throw new Error('Failed to fetch Post data')
  }

  return res.json()
}

export default async function Event({ params }: { params: { id: string } }) {
  const event: KEvent = await getEvent(params.id);
  const tickets: Array<KTicket> = await getTickets(event.eventId)
  return (
    <main className={styles.main}>
      <Link href={'/'}>Back to home</Link>
      <p>ID: {event.id}</p>
      <p>Name: {event.name}</p>
      <p>Date: {event.date}</p>
      <p>Description: {event.description}</p>
      <p>Venue: {event.venue}</p>
      <p>City: {event.city}</p>
      <a href={event.url}>URL: to event</a>
      <a href={event.kUrl}>URL: to CLIENT</a>
      <Image src={event.imgUrl} alt={'generic alt'} width={200} height={200} />
      <section>
        {tickets && tickets.map((ticket: KTicket) => <article key={ticket.id}>
          <h3>{ticket.name}</h3>
          <p>{ticket.price}</p>
          <p>{ticket.fee}</p>
          <p>{ticket.type}</p>
          <p>{ticket.availability}</p>
        </article>)}
        {tickets && tickets.length < 1 && <h3>No tickets found!</h3>}
      </section>
    </main>
  );
}
