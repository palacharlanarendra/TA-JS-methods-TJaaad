// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

// - Find the index of `101` in numbers
numbers.indexOf(101);
// - Find the last index of `9` in numbers
numbers.lastIndexOf(9);
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(" ");
// - Add two new words in the strings array "called" and "sentance"
let addNewWords = [...strings];
addNewWords.push("called");
addNewWords.push("sentence");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
addNewWords.join(" ");
// - Remove the first word in the array (strings)
let removeFirstElement = [...addNewWords].shift();
// - Find all the words that contain 'is' use string method 'includes'
for(let elements of strings){
  if(elements.includes("is")){
    console.log(elements);
  }
}
// - Find all the words that contain 'is' use string method 'indexOf'
for(let elements of strings){
  if(elements.indexOf("is")!=-1){
    console.log(elements);
  }
}
// - Check if all the numbers in numbers array are divisible by three use array method (every)
function checkDivBy3(num){
    return num%3==0;
}
numbers.every(checkDivBy3);
// -  Sort Array from smallest to largest
compareFunction=(a,b)=>a-b;
let sortedNumbers = [...numbers].sort(compareFunction);
console.log(sortedNumbers);
// - Remove the last word in strings
[...strings].pop();
// - Find largest number in numbers
getLarge=(a,b)=>b-a;
let sortNum = [...numbers].sort(getLarge);
console.log(sortNum[0]);
// - Find longest string in strings
var largest=strings[0].length;
for(let i=0;i<strings.length;i++){
  if(largest<strings[i].length){
      largest=strings[i]
  }
}
console.log(largest);
// - Find all the even numbers
findEven = (num) => num%2==0;
numbers.filter(findEven);
// - Find all the odd numbers
findOdd = (num) => num%2!=0;
numbers.filter(findOdd);
// - Place a new word at the start of the array use (upshift)
[...strings].unshift("Hello");
// - Make a subset of numbers array [18,9,7,11]

let modifiedArrays = [...numbers];
let start = modifiedArrays.indexOf(18);
let removed=modifiedArrays.splice(start,4);
modifiedArrays.splice(start,0,removed);

// - Make a subset of strings array ['a','collection']
let modifiedArrays = [...strings];
let start = modifiedArrays.indexOf("a");
let removed=modifiedArrays.splice(start,2);
modifiedArrays.splice(start,0,removed);

// - Replace 12 & 18 with 1221 and 1881
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
let modifiedArrays = [...numbers];
let start = modifiedArrays.indexOf(12);
modifiedArrays.splice(start,1,1221);
let anotherStart = modifiedArrays.indexOf(18);
modifiedArrays.splice(anotherStart,1,1881);
// - Replace words in strings array with the length of the word
var newStrings = [...strings];
newStrings.map(elem=>elem.length);
// - Find the sum of the length of words using above question
newStrings.reduce((acc,elem) => acc+elem);
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
for(let element of customers){
  if(element.firstname.startsWith("J")){
    console.log(element.firstname);
  }
}
// - Create new array with only first name
let array=[];
for(let element of customers){
  array.push(element.firstname);
}

// - Create new array with all the full names (ex: "Joe Blogs")
let array2=[];
for(let element of customers){
  
  array2.push(element.firstname.concat(" ",element.lastname));
}
// - Sort the array created above alphabetically
array2.sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.
let arrayVowels=[];
customers.filter((elem)=>{
  if(elem.firstname.toLowerCase().includes("a")||
  elem.firstname.toLowerCase().includes("e")||
  elem.firstname.toLowerCase().includes("i")||
  elem.firstname.toLowerCase().includes("o")||
  elem.firstname.toLowerCase().includes("u")){
    arrayVowels.push(elem.firstname);

  }
});