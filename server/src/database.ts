const mysql2 = require('mysql2/promise');
import dotven from "dotenv";
dotven.config();

export async function connect() {
    const connection = await mysql2.createPool({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password:process.env.DATABASE_PASS,
        database: process.env.DATABASE_NAME,
        connectionLimit: 10
    });
    return connection;
}