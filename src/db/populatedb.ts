import pg from "pg";
const { Client } = pg;
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from a .env file

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT NOT NULL,
  username TEXT NOT NULL,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, username) 
VALUES
  ('Hello, world!', 'Alfred'),
  ('This is a message', 'Bianca'),
  ('Another message here.', 'Chelsea');
`;

async function main() {
  console.log("seeding...");
  // Reads from the default values in the .env file
  /*
PGUSER=process.env.USER
PGPASSWORD=null
PGHOST=localhost
PGPORT=5432
PGDATABASE=process.env.USER
*/
  const client = new Client({ ssl: true });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
