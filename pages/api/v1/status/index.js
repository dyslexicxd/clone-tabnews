export default async function (request, response) {
  response.status(200).json({ status: "running" });
}
