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
  const findVerb=[];
  for (let word of words) {
    if (word.substring(0, 3)==="to ") {
      findVerb.push(word);
    }
  }
  return findVerb;
}
findVerbs([
      "to eat",
      "tower",
      "monitor",
      "to sneak",
      "to squeak",
      "cheesemonger"
    ]);

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const integers=[];
  for (let num of nums) {
    if ((num*10)%10 ===0) {
      integers.push(num);
    }
  }
  return integers;
}
getIntegers([3.5, 2.1]);

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
