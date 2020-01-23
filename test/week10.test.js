const { sumDigits } = require("../challenges/week10");

describe("sumDigits", () => {
  test("it throws error if not passed number", () => {
    expect(() => {
      sumDigits("");
    }).toThrow("Number is required");
    expect(() => {
      sumDigits([]);
    }).toThrow("Number is required");
  });
  test("it returns sum of numbers", () => {
    expect(sumDigits(123)).toBe(6);
  });
});
