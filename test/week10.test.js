const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB
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
  test("it returns sum of numbers", () => {
    expect(sumDigits(123)).toBe(6);
  });
});

describe("createRange", () => {
  test("it returns a range of numbers as an array", () => {
    expect(createRange(2, 15, 3)).toEqual([2, 5, 8, 11, 14, 17]);
  });
  test("it returns a range of numbers as an array, if step is not provided it is 1 by default", () => {
    expect(createRange(2, 7)).toEqual([2, 3, 4, 5, 6, 7]);
  });
});

describe("getScreenTimeAlertList", () => {
  /*test("it throws error if date is not provided in the format YYYY-MM-DD", () => {
    expect(
      getScreentimeAlertList(
        [
          {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
              {
                date: "2019-05-01",
                usage: { twitter: 34, instagram: 22, facebook: 100 }
              },
              {
                date: "2019-05-02",
                usage: { twitter: 56, instagram: 40, facebook: 31 }
              },
              {
                date: "2019-05-03",
                usage: { twitter: 12, instagram: 15, facebook: 19 }
              },
              {
                date: "2019-05-04",
                usage: { twitter: 10, instagram: 0, facebook: 0 }
              }
            ]
          }
        ],
        "12-05-2018"
      )
    ).toThrow("date must be provided in the format 2019-05-04 (YYYY-MM-DD)");
  });*/

  test("it returns an array with username of user who used over 100 minutes of screentime on that date", () => {
    expect(
      getScreentimeAlertList(
        [
          {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
              {
                date: "2019-05-01",
                usage: { twitter: 34, instagram: 22, facebook: 100 }
              },
              {
                date: "2019-05-02",
                usage: { twitter: 56, instagram: 40, facebook: 31 }
              },
              {
                date: "2019-05-03",
                usage: { twitter: 12, instagram: 15, facebook: 19 }
              },
              {
                date: "2019-05-04",
                usage: { twitter: 10, instagram: 0, facebook: 0 }
              }
            ]
          },
          {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
              {
                date: "2019-06-11",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 100, safari: 10 }
              },
              {
                date: "2019-06-13",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 }
              },
              {
                date: "2019-06-14",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 }
              }
            ]
          },
          {
            username: "iggy_11",
            name: "Iggy Jones",
            screenTime: [
              {
                date: "2019-06-11",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 100, safari: 20 }
              },
              {
                date: "2019-06-13",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 }
              },
              {
                date: "2019-06-14",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 }
              }
            ]
          }
        ],
        "2019-06-11"
      )
    ).toEqual(["sam_j_1989", "iggy_11"]);
  });
  test("it returns an empty array if non of users used over 100 minutes of screentime on that date", () => {
    expect(
      getScreentimeAlertList(
        [
          {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
              {
                date: "2019-05-01",
                usage: { twitter: 34, instagram: 22, facebook: 100 }
              },
              {
                date: "2019-05-02",
                usage: { twitter: 56, instagram: 40, facebook: 31 }
              },
              {
                date: "2019-05-03",
                usage: { twitter: 12, instagram: 15, facebook: 19 }
              },
              {
                date: "2019-05-04",
                usage: { twitter: 10, instagram: 0, facebook: 0 }
              }
            ]
          },
          {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
              {
                date: "2019-06-11",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 80, safari: 10 }
              },
              {
                date: "2019-06-13",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 }
              },
              {
                date: "2019-06-14",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 }
              }
            ]
          },
          {
            username: "iggy_11",
            name: "Iggy Jones",
            screenTime: [
              {
                date: "2019-06-11",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 30, safari: 20 }
              },
              {
                date: "2019-06-13",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 }
              },
              {
                date: "2019-06-14",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 }
              }
            ]
          }
        ],
        "2019-06-11"
      )
    ).toEqual([]);
  });
  test("it returns an empty array if date doesn't appears in users object", () => {
    expect(
      getScreentimeAlertList(
        [
          {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
              {
                date: "2019-05-01",
                usage: { twitter: 34, instagram: 22, facebook: 100 }
              },
              {
                date: "2019-05-02",
                usage: { twitter: 56, instagram: 40, facebook: 31 }
              },
              {
                date: "2019-05-03",
                usage: { twitter: 12, instagram: 15, facebook: 19 }
              },
              {
                date: "2019-05-04",
                usage: { twitter: 10, instagram: 0, facebook: 0 }
              }
            ]
          },
          {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
              {
                date: "2019-06-11",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 100, safari: 10 }
              },
              {
                date: "2019-06-13",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 }
              },
              {
                date: "2019-06-14",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 }
              }
            ]
          },
          {
            username: "iggy_11",
            name: "Iggy Jones",
            screenTime: [
              {
                date: "2019-06-11",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 100, safari: 20 }
              },
              {
                date: "2019-06-13",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 }
              },
              {
                date: "2019-06-14",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 }
              }
            ]
          }
        ],
        "2019-11-11"
      )
    ).toEqual([]);
  });
});

describe("hexToRGB", () => {
  test("it throws error if not passed string", () => {
    expect(() => {
      hexToRGB([]);
    }).toThrow("String is required");
    expect(() => {
      hexToRGB(66679);
    }).toThrow("String is required");
  });
  test("it throws error if string is too short or too long", () => {
    expect(() => {
      hexToRGB("#12");
    }).toThrow("string.length ===7");
  });
  /*test("it throws error if string doesn't start with character #", () => {
    expect(hexToRGB("FFA11BC")).toThrow("string should start with character #");
  });*/
  test("it returns hex code transformed into an RGB code", () => {
    expect(hexToRGB("#FA11BC")).toBe("rgb(250,17,188)");
  });
});
