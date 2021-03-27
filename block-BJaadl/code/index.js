let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(arr){
  var longest = arr[0].length;
  for(let element of arr){
    if(longest<element.length){
      longest=element;
    }
  }
  console.log(longest);
}
findLongestWord(words);//crocodile
// - Convert the above array "words" into an array of length of word instead of word.
let newWords = [...words];
newWords.map((elem)=>elem.length);//[7, 7, 7, 9, 5, 7, 8, 6]

// - Create a new array that only contains word with atleast one vowel.
let vowelsArray=[];
for(let element of words){
  
  if(element.toLowerCase().includes("a")||
  element.toLowerCase().includes("e")||
  element.toLowerCase().includes("i")||
  element.toLowerCase().includes("o")||
  element.toLowerCase().includes("u")){
    vowelsArray.push(element);
  }
}//["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"]
// - Find the index of the word "rhythm"
words.indexOf("rhythm");//7
// - Create a new array that contains words not starting with vowel.

let noVowelsAtStart=[];
let vowels = "aeiouAEIOU";
for(let element of words){
  if(!vowels.startsWith(element[0])){
    noVowelsAtStart.push(element);
  }
}
//["mystery", "brother", "crocodile", "pearl", "orchard", "crackpot", "rhythm"]
// - Create a new array that contianse words not ending with vowel
let noVowelsAtEnd=[];
let vowels = "aeiouAEIOU";
for(let element of words){
  if(!vowels.includes(element[element.length-1])){
    noVowelsAtEnd.push(element);
  }
}//["mystery", "brother", "aviator", "pearl", "orchard", "crackpot", "rhythm"]
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(array){
  return array.reduce((acc,element)=>acc+element);
}
sumArray(numbers);//87
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
function multByThree(array){
  return array.filter((element)=>element%3==0);
}
let newNumByThree=multByThree(numbers);//[6, 12, 18]
// - Create a new array that contains only even numbers
function even(array){
  return array.filter((element)=>element%2==0);
}
let evenArray = even(numbers);//[6, 12, 18, 16, 2, 8, 10]
// - Create  a new array that contains only odd numbers.
function odd(array){
  return array.filter((element)=>element%2!=0);
}
let oddArray = odd(numbers);//[1, 13, 1]
// - Create a new array that should have true for even number and false for odd numbers.
function TrueOrFalse(array){
  return array.map((element)=>element%2!=0?"false":"true");
}
let trueOrFalseArray = TrueOrFalse(numbers);
//["true", "true", "false", "true", "false", "true", "true", "false", "true", "true"]
// - Sort the above number in ascending order.
compareValues = (a,b)=> a-b;
[...numbers].sort(compareValues);
//[1, 1, 2, 6, 8, 10, 12, 13, 16, 18]
// - Does sort mutate the original array?
console.log(`Yes it does mutate the array, thats why we clone it first`);
// - Find the sum of the numbers in the array.
function sumArray(array){
  return array.reduce((acc,element)=>acc+element);
}
sumArray(numbers);//87
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function avgArray(array){
  let total = array.reduce((acc,element)=>acc+element);
  return total/array.length;
}
avgArray(numbers);//8.7
let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(array){
  let newWords = [...array];
  let newNumbers = newWords.map((elem)=>elem.length);
  let total = newNumbers.reduce((acc,currentValue)=>acc+currentValue);
  return total/newNumbers.length;
}
averageWordLength(strings);//5.3
