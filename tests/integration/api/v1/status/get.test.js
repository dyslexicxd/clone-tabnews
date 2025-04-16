test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  console.log(responseBody);

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
  expect(responseBody.dependencies.database.version).toBe("16.8");
  expect(responseBody.dependencies.database.max_connections).not.toBeNaN();
  expect(
    responseBody.dependencies.database.max_connections,
  ).toBeGreaterThanOrEqual(0);
  expect(responseBody.dependencies.database.opened_connections).not.toBeNaN();
  expect(
    responseBody.dependencies.database.opened_connections,
  ).toBeGreaterThanOrEqual(0);
});
