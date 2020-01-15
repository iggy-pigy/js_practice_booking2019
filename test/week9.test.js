const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} = require("../challenges/week9");

describe("sumMultiples", () => {
  test("it throws an error if not passes an array", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");

    expect(() => {
      sumMultiples("error");
    }).toThrow("an Array is required");

    expect(() => {
      sumMultiples(7);
    }).toThrow("an Array is required");
  });
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

describe("createMatrix", () => {
  it("returns a matrix 1*1 when passed 1", () => {
    const result = createMatrix(1, "foo");
    const expected = [["foo"]];
    expect(result).toEqual(expected);
  });
});

describe("areWeCovered", () => {
  test("it returns false if there are no staff at all", () => {
    expect(areWeCovered([], "Friday")).toBe(false);
    expect(areWeCovered([], "Saturnday")).toBe(false);
    expect(areWeCovered([], "Sunday")).toBe(false);
    expect(areWeCovered([], "Monday")).toBe(false);
    expect(areWeCovered([], "Tuesday")).toBe(false);
    expect(areWeCovered([], "Wednesday")).toBe(false);
    expect(areWeCovered([], "Thursday")).toBe(false);
  });

  test("it returns false if there are staff but less than three are not scheduled to work", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Tom", rota: ["Monday", "Thursday", "Friday"] },
      { name: "Frida", rota: ["Monday", "Wednesday"] }
    ];
    expect(areWeCovered(staff, "Friday")).toBe(false);
  });
});
