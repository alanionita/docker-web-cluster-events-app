import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.css";
import { KEvent, IGetEventsOutput } from '../types';

async function getEvents(): Promise<IGetEventsOutput> {
  try {
    const url = process.env.API_DOMAIN + '/event/list'
    const res: Array<KEvent> = await fetch(url, { cache: 'no-store' }).then((res) => res.json());
    return res
  } catch (err: any) {
    console.error('Error [getEvents] ::', err.message)
    return err;
  }
}

export default async function Home() {
  const posts = await getEvents();

  return (
    <main className={styles.main}>
      <p>Events</p>
      <Link href={'/event/add'}>
        <button>
          Add event
        </button>
      </Link>
      <ul>
        {posts.map(({ id, name }) => <li key={id}><Link href={`/event/${id}`}>{name}</Link></li>)}
      </ul>
    </main>
  );
}
