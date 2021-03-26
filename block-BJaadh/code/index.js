// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101);
// - Find the last index of `9` in numbers
numbers.lastIndexOf(9);
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.reduce((acc,elem)=> acc+" "+elem);
// - Add two new words in the strings array "called" and "sentance"

strings.push("called");
strings.push("sentence");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.reduce((acc,elem)=> acc+" "+elem);
// - Remove the first word in the array (strings)
strings.shift();
// - Find all the words that contain 'is' use string method 'includes'
function includeIs(elem){
  return elem.includes("is");
}
strings.filter(includeIs);
// - Find all the words that contain 'is' use string method 'indexOf'

// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every((num)=> num%3==0);//false;
// -  Sort Array from smallest to largest

// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers

// - Find longest string in strings

// - Find all the even numbers
numbers.filter((num)=> num%2==0);
// - Find all the odd numbers
numbers.filter((num)=> num%2!=0);
// - Place a new word at the start of the array use (unshift)
strings.unshift("Hey")
// - Make a subset of numbers array [18,9,7,11]
numbers.concat([18,9,7,11]);
// - Make a subset of strings array ['a','collection']
strings.concat(['a','collection']);
// - Replace 12 & 18 with 1221 and 1881



// - Replace words in strings array with the length of the word
let strLen = strings.map((string)=> string.length);
// - Find the sum of the length of words using above question
strLen.reduce((acc,elem)=> acc+elem);
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
customers.filter((elem)=> elem.firstname[0]=="J");
// - Create new array with only first name
let newArray = customers.map((elem)=> elem.firstname);
// - Create new array with all the full names (ex: "Joe Blogs")

let fullNameArray = customers.map((elem)=> elem.firstname+" "+elem.lastname);
// - Sort the array created above alphabetically
function compareFunction(a,b){
  return a-b;
}
let sorted =  [...numbers].sort(compareFunction);
// - Create a new array that contains only user who has at least one vowel in the firstname.
function includeIs(elem){
  return elem.includes(/[aeiou]/g);
}
strings.filter(includeIs);