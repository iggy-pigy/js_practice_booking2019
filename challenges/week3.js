function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  const squares = nums.map(function (num) {
    return num * num;
  });
  return squares;
}



function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  const firstWord = words[0];
  const remWords = words.slice(1, words.length);
  const firstLetters = remWords.map(function (n) {
    const firstChar = n[0].toUpperCase();
    const remaining = n.slice(1, n.length);
    return firstChar + remaining;
  })
  const joinLetters = firstLetters.join("");
  return firstWord + joinLetters;
}


function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  var countSubjects = [];
  for (let p of people) {
    for (let s of p.subjects) {
      countSubjects.push(s);
    }
  }
  return countSubjects.length;
}


function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (let m of menu) {
    for (let i of m.ingredients) {
      if (i === ingredient) {
        return true;
      }
    }
  }
  return false;
}


function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  var newArray = [];
  for (let a of arr1) {
    for (let r of arr2) {
      if (a === r) {
        newArray.push(a);
      }
    }
  }
  let x = (newArray) => newArray.filter((v, i) => newArray.indexOf(v) === i)
  return x(newArray).sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
