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

const menu = [
  {
    name: "tofu fritters",
    ingredients: ["tofu", "egg yolk", "breadbrumbs", "paprika"]
  },
  {
    name: "black bean curry",
    ingredients: ["black beans", "garam masala", "rice"]
  },
  {
    name: "chocolate tiffin",
    ingredients: [
      "dark chocolate",
      "egg",
      "flour",
      "brown sugar",
      "vanilla essence"
    ]
  },
  {
    name: "hummus",
    ingredients: ["chickpeas", "tahini", "lemon", "garlic", "salt"]
  }
];
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
var result=checkIngredients(menu, "lemon");
console.log(result);

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
