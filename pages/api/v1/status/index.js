import database from "infra/database.js";

export default async function (request, response) {
  const result = await database.query("SELECT 1 + 1 as result;");
  console.log(result.rows);
  response.status(200).json({ status: "running" });
}
