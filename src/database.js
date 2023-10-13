import { error, log } from 'console';
import { MongoClient } from 'mongodb';
import { dbName, mongodbUri } from './config.js';

const client = new MongoClient(mongodbUri);

async function connectDB() {
    try {
        await client.connect();
        await client.db(dbName).command({ ping: 1 });

        log('MongoDB success.');
    } catch (exception) {
        error('MongoDB error:', exception);
    }
}

connectDB();

export default client;
