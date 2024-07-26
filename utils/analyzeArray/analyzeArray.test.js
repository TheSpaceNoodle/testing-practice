import analyzeArray from "./index.js";

test(`analyzeArray([1,8,3,4,2,6]) should return {
   average: 4,
   min: 1,
   max: 8,
   length: 6
}`, () => {
  expect(JSON.stringify(analyzeArray([1, 8, 3, 4, 2, 6]))).toBe(
    '{"average":4,"min":1,"max":8,"length":6}'
  );
});
