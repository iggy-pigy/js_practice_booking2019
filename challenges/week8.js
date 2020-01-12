const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === n) {
      return nums[nums.indexOf(n) + 1];
    }
  }
  return null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  //Where to put Number() function?
  return str.split("").reduce((total, number) => {
    total[number] ? total[number]++ : (total[number] = 1);
    return total;
  }, {});
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  n = n.toString();
  return Number(
    n
      .split("")
      .reverse()
      .join("")
  );
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

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  const valueFound = false;
  for (let key in haystack) {
    if (haystack[key] === searchTerm) {
      return true;
    } else if (haystack[key].includes(searchTerm)) {
      return true;
    } else {
      return valueFound;
    }
  }
  return valueFound;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  const newString = str.toLowerCase();
  const words = newString.replace(/[^\w\s]/g, "").split(/\s/);
  const frequencieMap = {};
  words.forEach(function(w) {
    if (!frequencieMap[w]) {
      frequencieMap[w] = 0;
    }
    frequencieMap[w] += 1;
  });

  return frequencieMap;
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
