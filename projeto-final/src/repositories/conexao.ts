import "dotenv/config";
import { ConnectionOptions, createConnection } from "mysql2/promise";

const config: ConnectionOptions = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT ?? 3306),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
};

async function getConexao() {
    return await createConnection(config);
}

export { getConexao };