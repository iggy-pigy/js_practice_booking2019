const sandwich = {
  bread: "Sourdough",
  fillings: ["brie", "relish", "lettuce"],
  accompaniment: "crisps"
};
function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}
var result = getFillings(sandwich);
console.log(result);



const person = {
  name: "Mohammed",
  city: "Manchester",
  age: 23
};
function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city.toLowerCase() ==="Manchester".toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
  var result = isFromManchester(person);
  console.log(result);

const people = 45;
function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  if (people <=40 ) {
    return 1;
  } else if 
  (people >40 && people<=80) {
    return 2;
  } else if
  (people >80 && people <=120) {
    return 3;
  } else {
    return Math.ceil(people/40);
  }
}
  var result = getBusNumbers(people);
  console.log(result);

const arr = ["dog", "sheep", "sheep", "chicken"];
function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let sum = 0;
  for (let a of arr) {
    if (a.toLowerCase() === "sheep") {
      sum +=1;
    }
  }
    return sum;
}
  var result = countSheep(arr);
  console.log(result);


 const person = {
      name: "Mohammed",
      age: 23,
      address: {
        line1: "1a Pool Road",
        city: "Manchester",
        postCode: "M16 8DR"
      }};
function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if (person. address.postCode[0].toLowerCase()==="M".toLowerCase()) {
    return true;
  }
return false;
}
var result = hasMPostCode(person);
console.log(result);

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
