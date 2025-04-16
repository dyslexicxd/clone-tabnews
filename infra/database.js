import { Pool } from "pg";

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
});

async function query(queryObject) {
  const result = await pool.query(queryObject);
  return result;
}

export default {
  query: query,
};
