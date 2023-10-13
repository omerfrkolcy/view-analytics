import { dbName } from './config.js';
import client from './database.js';

const collectionName = 'view_logs';

async function getLogs(_, res) {
    const db = client.db(dbName);
    const logs = await db.collection(collectionName).find().toArray();

    res.json(logs);
}

async function createLog(req, res) {
    const {
        body: { url, referer },
    } = req;
    const logEntry = {
        timestamp: new Date(),
        ipAddress: req.ip,
        url,
        userAgent: req.headers['user-agent'],
        referer,
    };

    const db = client.db(dbName);

    await db.collection(collectionName).insertOne(logEntry);

    res.json({ success: true });
}

export { getLogs, createLog };
