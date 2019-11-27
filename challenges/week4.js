function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const smallNums = nums.filter(function (num) {
  return num < 1;
  });
  return smallNums;
}


function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const namesWithChar = names.filter(function (name) {
  if (name[0].toLowerCase() === char.toLowerCase()) {
  return name;
  }
  })
  return namesWithChar;
}



function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const findVerb=words.filter(function(word) {
    if (word.includes("to ")) {
      return word;
    }
  });
  return findVerb;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const integers = nums.filter(function (num) {
    if ((num * 10) % 10 === 0) {
      return num;
    }
  });
  return integers;
}


function getCities(users) {
  if (!users) throw new Error("users is required");
  const userCity = users.map(function (user) {
    var userData = user.data;
    var usersCityInfo = userData.city;
    var usersCity = usersCityInfo.displayName;
    return usersCity;
  });
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


function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const sentencesContaining = sentences.filter(function (sentence) {
    if (sentence.toLowerCase().includes(str.toLowerCase())) {
      return sentence;
    }
  });
  return sentencesContaining;
}


function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const longestSides = triangles.map(function (num) {
    const maxNums = Math.max.apply(null, num);
    return maxNums;
  });
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
