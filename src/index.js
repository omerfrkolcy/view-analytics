import pkg from 'body-parser';
import { log } from 'console';
import cors from 'cors';
import express from 'express';
import { port } from './config.js';
import routes from './routes.js';

const { json, urlencoded } = pkg;
const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use('/api', routes);

app.listen(port, async () => {
    log(`Listening to Port ${port}`);
});
