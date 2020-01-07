const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  const newArray = arrs.reduce((acc, val) => acc.concat(val), []);
  const sumArrays = newArray.reduce((a, b) => a + b, 0);
  return sumArrays;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length > 1) {
    var firstElemt = arr.shift();
    var lastElement = arr.pop();
    arr.push(firstElemt);
    arr.splice(0, 0, lastElement);
    return arr;
  } else {
    return arr;
  }
};
arrShift([1, 2, 3]);

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
