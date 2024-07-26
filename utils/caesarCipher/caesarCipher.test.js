import caesarCipher from "./index.js";

test("HeLLo should be KhOOr", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("xyz should be abc", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
