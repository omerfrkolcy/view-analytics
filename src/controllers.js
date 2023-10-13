import { getLogs, createLog } from './services.js';

async function getAllLogs(req, res) {
    try {
        res.json(await getLogs(req, res));
    } catch (error) {
        res.status(500).json({ error: error.body });
    }
}

async function createNewLog(req, res) {
    try {
        res.json(await createLog(req, res));
    } catch (error) {
        res.status(500).json({ error: error.body });
    }
}

export { getAllLogs, createNewLog };
