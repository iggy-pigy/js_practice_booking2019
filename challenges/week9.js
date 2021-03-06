/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("an Array is required");
  const filteredArr = arr.filter(n => n % 3 === 0 || n % 5 === 0);
  const result = filteredArr.reduce((total, num) => total + num, 0);
  return result;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof str != "string") throw new Error("String is required");
  if (str.length === 0) {
    return false;
  }
  const dna = "ACTG";
  const string = str.toLowerCase();
  const stringToArray = Array.from(string);
  const result = stringToArray.filter(n => dna.toLowerCase().includes(n));
  if (str.length === result.length) {
    return true;
  }
  return false;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof str != "string") throw new Error("String is required");
  if (str.length === 0) throw new Error("Valid DNA string is required");
  const stringToArray = Array.from(str.toUpperCase());
  const result = [];
  for (let n of stringToArray) {
    if (n === "T") {
      result.push("A");
    } else if (n === "A") {
      result.push("T");
    } else if (n === "C") {
      result.push("G");
    } else if (n === "G") {
      result.push("G");
    } else {
      throw new Error("Valid DNA string is required");
    }
  }
  return result.join("").toString();
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (!Number.isInteger(n)) throw new Error("Number is required");
  if (n < 1) {
    return false;
  }
  const result = false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return result;
    }
  }
  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  if (!Number.isInteger(n)) throw new Error("Number is required");
  const array = [];
  const result = [];
  for (let i = 0; i < n; i++) {
    array.push(fill);
  }
  for (let i = 0; i < n; i++) {
    result.push(array);
  }
  return result;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  if (staff.length === 0) {
    return false;
  }
  let positiveResult = 0;
  for (let person in staff) {
    const workingDay = staff[person].rota;
    if (workingDay.includes(day)) {
      positiveResult += 1;
    }
  }
  if (positiveResult >= 3) {
    return true;
  }
  return false;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
