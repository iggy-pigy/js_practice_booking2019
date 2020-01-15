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

describe("isValidDNA", () => {
  /*test("it throws an error if not passes a string", () => {
    expect(() => {
      isValidDNA();
    }).toThrow("str is required");

    expect(() => {
      isValidDNA([]);
    }).toThrow("String is required");

    expect(() => {
      isValidDNA(3);
    }).toThrow("String is required");
  });*/
  test("it returns false if string is empty", () => {
    const result = isValidDNA("");
    const expected = false;
    expect(result).toBe(expected);
  });
  test("it returns true if string contains characters C, G, T or A only", () => {
    const result = isValidDNA("GTCAAT");
    const expected = true;
    expect(result).toBe(expected);
  });
  test("it returns false if string contains other characters than - C, G, T, A", () => {
    const result = isValidDNA("GTZAWEC6*");
    const expected = false;
    expect(result).toBe(expected);
  });
  test("it returns true if string contains characters c, g, t or a (lowercase) only", () => {
    const result = isValidDNA("ctgg");
    const expected = true;
    expect(result).toBe(expected);
  });
  test("it returns true if string contains characters c, g, t or a (both, lowercase and upercase) only", () => {
    const result = isValidDNA("cTGg");
    const expected = true;
    expect(result).toBe(expected);
  });
});

describe("getComplementaryDNA", () => {
  //can output be boolean?
  test("it returns false if a string is empty", () => {
    const result = getComplementaryDNA("");
    const expected = false;
    expect(result).toBe(expected);
  });

  //can output be boolean?
  test("it returns false if string received is not a valid DNA string", () => {
    const result = getComplementaryDNA("AZTCG");
    const expected = false;
    expect(result).toBe(expected);
  });

  test("it returns complementary string if string received is a valid DNA string", () => {
    const result = getComplementaryDNA("TGCAAG");
    const expected = "AGGTTG";
    expect(result).toBe(expected);
  });

  test("it returns complementary string if string received is a valid DNA string but lowerCase", () => {
    const result = getComplementaryDNA("tgcaag");
    const expected = "AGGTTG";
    expect(result).toBe(expected);
  });
});

describe("createMatrix", () => {
  test("it throws an error if not passes a number", () => {
    expect(() => {
      createMatrix([], 2);
    }).toThrow("Number is required");

    expect(() => {
      createMatrix("error", 3);
    }).toThrow("Number is required");
  });

  test("it returns a matrix 1*1 when passed 1", () => {
    const result = createMatrix(1, "foo");
    const expected = [["foo"]];
    expect(result).toEqual(expected);
  });
  test("it returns a matrix 3*3 when passed 3", () => {
    const result = createMatrix(3, "foo");
    const expected = [
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"]
    ];
    expect(result).toEqual(expected);
  });
  test("it returns a matrix 3*3 when passed 3 and fill is number 3", () => {
    const result = createMatrix(3, 3);
    const expected = [
      [3, 3, 3],
      [3, 3, 3],
      [3, 3, 3]
    ];
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
      { name: "Tom", rota: ["Thursday", "Friday"] },
      { name: "Frida", rota: ["Monday", "Wednesday"] }
    ];
    expect(areWeCovered(staff, "Friday")).toBe(false);
    expect(areWeCovered(staff, "Saturday")).toBe(false);
    expect(areWeCovered(staff, "Sunday")).toBe(false);
    expect(areWeCovered(staff, "Monday")).toBe(false);
    expect(areWeCovered(staff, "Tuesday")).toBe(false);
    expect(areWeCovered(staff, "Wednesday")).toBe(false);
    expect(areWeCovered(staff, "Thursday")).toBe(false);
  });
  test("it returns true if there are 3 people who are scheduled to work", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Tom", rota: ["Monday", "Thursday", "Friday"] },
      { name: "Frida", rota: ["Monday", "Wednesday"] }
    ];
    expect(areWeCovered(staff, "Monday")).toBe(true);
  });
  test("it returns true if there are more than 3 people who are scheduled to work", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Wednesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Tom", rota: ["Monday", "Wednesday", "Thursday", "Friday"] },
      { name: "Frida", rota: ["Monday", "Wednesday"] }
    ];
    expect(areWeCovered(staff, "Wednesday")).toBe(true);
  });
});
