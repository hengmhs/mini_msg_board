import pg from "pg";
import dotenv from "dotenv";
const { Pool } = pg;

dotenv.config();

// Reads from the default values in the .env file
/*
PGUSER=process.env.USER
PGPASSWORD=null
PGHOST=localhost
PGPORT=5432
PGDATABASE=process.env.USER
*/

const pool = new Pool({
  ssl: true,
});

export default pool;
