import { Client } from 'pg';
export const client = new Client(process.env.PGURL);
client.connect();