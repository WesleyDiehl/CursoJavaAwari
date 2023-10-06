import { MongoClient } from 'mongodb';

export default async function connect() {
    const client = new MongoClient('mongodb+srv://renandiehl:440W0jS1tF3ZDfJH@aulasawari.zdzso6w.mongodb.net/');
    await client.connect();
    return client.db('Aula14');
}