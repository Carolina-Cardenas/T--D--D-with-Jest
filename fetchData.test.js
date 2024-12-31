import fetchData from "./fetchdata";

test("Fue resuelto con excelencia", () => {
  return fetchData().then((data) => {
    expect(data).toBe("resolved succefully!");
  });
});
