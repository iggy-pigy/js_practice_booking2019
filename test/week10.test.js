const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} = require("../challenges/week10");

describe("sumDigits", () => {
  test("it throws error if not passed number", () => {
    expect(() => {
      sumDigits("");
    }).toThrow("Number is required");
    expect(() => {
      sumDigits([]);
    }).toThrow("Number is required");
  });
});
