const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} = require("../challenges/week9");

describe("sumMultiples", () => {
  test("it returns the sum of any numbers that are a multiple of 3 or 5 ", () => {
    const result = sumMultiples([1, 3, 5]);
    const expected = 8;
    expect(result).toBe(expected);
  });
  test("it works with decimal numbers", () => {
    const result = sumMultiples([1, 3.0, 5, 12, 25]);
    const expected = 45;
    expect(result).toBe(expected);
  });
  test("it returns 0 if there are no multiples of 3 or 5", () => {
    expect(sumMultiples([1, 4.5, 22])).toBe(0);
  });
});
