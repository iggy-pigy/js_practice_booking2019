function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  var countSubjects=[];
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

arr1 = [1, 5, 88, 6, 7, 3, 2];
arr2 = [4, 1, 7, 3, 2];
function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  var newArray=[];
  for (let a of arr1) {
    for (let r of arr2) {
    if (a===r) {
      newArray.push(a);
    }
  }
  }
  return newArray.sort();
}
var result=duplicateNumbers(arr1, arr2);
console.log(result);

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
