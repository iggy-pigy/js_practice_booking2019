function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  const firstChar = word[0].toUpperCase();
  const remaining = word.slice(1, word.length);
  return firstChar + remaining;
}


function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  const firstCharName = firstName[0].toUpperCase();
  const firstCharLastName = lastName[0].toUpperCase();
  return firstCharName +"."+ firstCharLastName;
}
  

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  var grossPrice = originalPrice + (originalPrice * (vatRate/100));
  return Number (grossPrice.toFixed(2));
}
     

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  var salesPrice= originalPrice - (originalPrice * (reduction/100));
  return Number(salesPrice.toFixed(2));
}
       

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  var splitWord = str.split("");
  var countIndex = splitWord.length;
  var halfWord = countIndex / 2;
  if (halfWord === Math.floor(halfWord)) {
  var firstMiddleChar = str[halfWord - 1];
  var secondMiddleChar = str[halfWord];
  return firstMiddleChar + secondMiddleChar;
  } else {
  var roundResult = Math.floor(halfWord);
  var middleCharacter = str[roundResult];
  return middleCharacter;}
}
  


function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}
 

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  var newWordArray = [];
  for (let w of words) {
    let newWord = w.split("").reverse().join("");
    newWordArray.push(newWord);
  }
  return newWordArray;
}
 


function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  var countUsers = 0;
  for (let user of users) {
    if (user.type === "Linux") {
    countUsers+=1;
    }
  }
  return countUsers;
}
 
 
function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  var sum = 0;
  for (let s of scores) {
  sum+=s;}
  let avaragescore =(sum/scores.length);
  return Number(avaragescore.toFixed(2));
}
   

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 === 0 && n % 5 !== 0) {
    return "fizz";
    } else if (n % 5 === 0 && n % 3 !== 0) {
    return "buzz";
    } else if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz";
    } else {
    return n;
    }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
