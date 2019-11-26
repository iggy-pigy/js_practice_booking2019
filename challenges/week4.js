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
  const userCity=[];
  for (let user of users) {
    var userData=user.data;
      var usersCityInfo=userData.city;
      var usersCity=usersCityInfo.displayName;
      userCity.push(usersCity);
  }
  return userCity;
}


function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const roots = nums.map(function (num) {
    const root = Math.sqrt(num);
    return Number(root.toFixed(2));
  });
  return roots;
}
  getSquareRoots([36, 77, 12, 355, 92, 5]);

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const sentencesContaining=[];
  for (let sentence of sentences) {
    if (sentence.toLowerCase().includes(str.toLowerCase())) {
    sentencesContaining.push(sentence);
    }
  }
  return sentencesContaining;
}
findSentencesContaining([ "You should specify a license for your package so that people know how they are permitted to use it",
    "The main field is a module ID that is the primary entry point to your program"], "main");

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const longestSides=[];
  for (let num of triangles) {
    const maxNums=Math.max.apply(null, num);
    longestSides.push(maxNums);
  }
  return longestSides;
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
