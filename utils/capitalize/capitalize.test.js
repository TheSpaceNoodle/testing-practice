import capitalize from "./index.js";

test("testingFn should become TestingFn", () => {
  expect(capitalize("testingFn")).toBe("TestingFn");
});
