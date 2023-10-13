import { config } from 'dotenv';

config();

export const port = process.env.PORT || 3000;
export const mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost/mydb';
export const dbName = process.env.DATABASE_NAME || 'local';
