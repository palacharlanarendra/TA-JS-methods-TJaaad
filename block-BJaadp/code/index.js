let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade
let newArray=[];
for(let i=0;i<persons.length;i++){
  newArray.push(persons[i].grade);
}
let sum= newArray.reduce((acc,element)=>acc+element);
console.log(sum/persons.length);
//11.083333333333334

// Find the average grade of male
let newMaleArray=[];
for(let elements of persons){
  if(elements.sex=="M"){
    newMaleArray.push(elements.grade);
  }
}
let sumMale= newMaleArray.reduce((acc,element)=>acc+element);
console.log(sumMale/newMaleArray.length);//8.66
// Find the average grade of female
let newFemaleArray=[];
for(let elements of persons){
  if(elements.sex=="F"){
    newFemaleArray.push(elements.grade);
  }
}
let sumMale= newFemaleArray.reduce((acc,element)=>acc+element);
console.log(sumMale/newFemaleArray.length);//13.5
// Find the highest grade
let grades=[];
for(let elements of persons){
  grades.push(elements.grade); 
}
let highest =grades[0];
for(let elem of grades){
  if(highest<elem){
    highest=elem;
  }
}
console.log(highest);
// Find the highest grade in male
let grades=[];
for(let elements of persons){
  if(elements.sex=="M"){
    grades.push(elements.grade);
  }
   
}
let highest =grades[0];
for(let elem of grades){
  if(highest<elem){
    highest=elem;
  }
}
console.log(highest);
// Find the highest grade in female
let grades=[];
for(let elements of persons){
  if(elements.sex=="F"){
    grades.push(elements.grade);
  }
   
}
let highest =grades[0];
for(let elem of grades){
  if(highest<elem){
    highest=elem;
  }
}
console.log(highest);
// Find the highest grade for people whose name starts with 'J' or 'P'
let grades=[];
for(let elements of persons){
  if(elements.name.startsWith("J")||elements.name.startsWith("P")){
    grades.push(elements.grade);
  }
   
}
let highest =grades[0];
for(let elem of grades){
  if(highest<elem){
    highest=elem;
  }
}
console.log(highest);
const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/
let fruitsObj = {
};
for(let i=0;i<fruitBasket.length;i++){
  var element = fruitBasket[i];
  var prev = fruitsObj[element];
  if(prev==undefined){
    fruitsObj[element]=1;
  }else{
    fruitsObj[element]=prev+1;
  }
}

//{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/
let fruitsArray=[];
for(key in fruitsObj){
  fruitsArray.push([key,fruitsObj[key]]);
}
console.log(fruitsArray);

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
data.reduce((acc,element)=>acc.concat(element));
// Using reduce flat data array

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];
var hello=dataTwo.reduce((acc,element)=>acc.concat(element),[]);
hello.reduce((accum,elements)=>
 accum.concat(elements)
 ,[]);

// Using reduce , flat dataTwo array

/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/


}
let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/
let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];
increment=(num)=>num+1;
half=(num)=>num/2;
double=(num)=>num*2;
decrement=(num)=>num-1;
triple=(num)=>num*3;
increment=(num)=>num+1;
let initialValue =3;
for(let element of pipeline){

  initialValue=element(initialValue);
  console.log(initialValue);
}




let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];


// Find the output using pipeline2 the initial value if 8
let initialValue =8;
for(let element of pipeline){

  initialValue=element(initialValue);
  console.log(initialValue);
}