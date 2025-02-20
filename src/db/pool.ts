import pg from "pg";
import dotenv from "dotenv";
const { Pool } = pg;

dotenv.config();

const pool = new Pool({
  connectionString: `postgresql://${process.env.ROLE_USERNAME}:${process.env.ROLE_PASSWORD}@localhost:5432/messages`,
});

export default pool;
