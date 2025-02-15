import dotenv from 'dotenv';

import { Client } from 'pg';

dotenv.config({
    path: "./.env"
});

let client;

const connectDB = async () => {
    try {
        client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false // this is required for Neon DB database
            }
        });
        client.connect();

        console.log("✅ Connected to PostgreSQL on Neon DB");
        
    } catch (error) {
        console.error(`❌ Unable to connect to PostgreSQL on Neon DB, ${error}`);
        throw new Error(error);
    }
}

export { connectDB, client };