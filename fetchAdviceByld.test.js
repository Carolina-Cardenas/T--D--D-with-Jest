import fecthAdviceById from "./fetchAdviceById";

test("Remember that spider are more afraid of you than you are of them", async () => {
  await expect(fecthAdviceById(1)).resolves.toBe(
    "Remember that spider are more afraid of you than you are of them"
  );
});
