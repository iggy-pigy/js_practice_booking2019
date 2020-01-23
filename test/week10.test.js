const { sumDigits, getScreentimeAlertList } = require("../challenges/week10");

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

describe("getScreenTimeAlertList", () => {
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
});
