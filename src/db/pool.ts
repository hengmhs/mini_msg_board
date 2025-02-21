import pg from "pg";
import dotenv from "dotenv";
const { Pool } = pg;

dotenv.config();

const pool = new Pool({
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  ssl: true,
});

export default pool;
