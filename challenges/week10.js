/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  if (!Number.isInteger(n)) throw new Error("Number is required");
  return n
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (step === undefined) {
    return Array.from({ length: end - 1 }, (_, i) => start + i * 1);
  } else {
    return Array.from({ length: end / step + 1 }, (_, i) => start + i * step);
  }
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  /*if (Date(date) !== Date("2015-03-25"))
    throw new Error(
      "date must be provided in the format 2019-05-04 (YYYY-MM-DD)"
    );*/
  const userFound = [];
  for (let i in users) {
    let userScreenTime = users[i].screenTime;
    for (let t in userScreenTime) {
      if (userScreenTime[t].date === date) {
        let userUsage = userScreenTime[t].usage;
        let time = Object.values(userUsage).reduce((a, b) => a + b);
        if (time > 100) {
          userFound.push(users[i].username);
        }
      }
    }
  }
  return userFound;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (typeof hexStr !== "string") throw new Error("String is required");
  if (hexStr.length !== 7) throw new Error("string.length ===7");
  if (hexStr[0] !== "#")
    throw new Error("string should start with character #");

  let r = 0;
  let g = 0;
  let b = 0;
  if (hexStr.length == 7) {
    r = "0x" + hexStr[1] + hexStr[2];
    g = "0x" + hexStr[3] + hexStr[4];
    b = "0x" + hexStr[5] + hexStr[6];
  } else {
    return false;
  }

  return "rgb(" + +r + "," + +g + "," + +b + ")";
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  if (!Array.isArray(board)) throw new Error("board is required");

  let newArray = board.reduce((acc, val) => acc.concat(val), []);
  let xValues = [];
  let zerroValues = [];
  let nullValues = [];
  const winValues = [
    [0, 1, 2],
    [2, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  let result = "";

  for (var i = 0; i < newArray.length; i++) {
    if (newArray[i] === "X") {
      xValues.push(i);
    } else if (newArray[i] === "0") {
      zerroValues.push(i);
    } else {
      nullValues.push(i);
    }
  }
  if (winValues.length >= 3) {
    for (let f of winValues) {
      if (f.every(n => xValues.includes(n))) {
        return (result = "X");
      }
    }
  }
  if (zerroValues.length >= 3) {
    for (let f of winValues) {
      if (f.every(n => zerroValues.includes(n))) {
        return (result = "0");
      }
    }
  }
  if (result.length < 1) {
    return null;
  }
  return result;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
