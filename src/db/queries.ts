import pool from "./pool";

export const getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  console.log("getAllMessages: ", rows);
  return rows;
};

export const getSpecificMessage = async (id: number) => {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id=$1", [id]);
  return rows;
};

export const insertMessage = async (username: string, text: string) => {
  await pool.query("INSERT INTO messages (username, text) VALUES ($1, $2)", [
    username,
    text,
  ]);
};
