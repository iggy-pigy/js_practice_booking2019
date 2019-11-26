function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const smallNums = nums.filter(function (num) {
    return num<1;
  });
  return smallNums;
}
findSmallNums([8, 1, 1.3, 0.9, 0.4, -1]);

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const namesWithChar=[];
  for (let name of names) {
    if (name[0].toLowerCase()=== char.toLowerCase()) {
      namesWithChar.push(name);
    }
  }
  return namesWithChar;
}
findNamesBeginningWith(["Sally", "Dave", "Susan", "Geoff", "Riley", "Sam"], "g");


function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
