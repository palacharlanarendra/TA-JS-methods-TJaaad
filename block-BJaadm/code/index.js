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

// Create an array peopleName and store value of sex key from persons array
let personsName = [];
persons.forEach((elem)=>personsName.push(elem.name));
//["John", "Sarah", "Bob", "Johnny", "Ethan", "Paula", "Donald", "Jennifer", "Courtney", "Jane", "John", "Arya"]
// Create an array peopleGrade and store the value of grade key from persons array
let personsGrade = [];
persons.forEach((elem)=>personsGrade.push(elem.grade));
// Create an array peopleSex and store the value of sex key from persons array
let personsSex = [];
persons.forEach((elem)=>personsSex.push(elem.sex));
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
personsName.filter((elem)=>elem[0]=="J"||elem[0]=="P");
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
personsName.filter((elem)=>elem[0]=="A"||elem[0]=="C");
// Log all the filtered male ('M') in persons array

persons.filter(function filter(elem){
  if(elem.sex=="M"){
    console.log(elem.name);
  }
});


// Log all the filtered female ('F') in persons array

persons.filter(function filter(elem){
  if(elem.sex=="F"){
    console.log(elem.name);
  }
});

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
persons.filter(function filtering(elem){
  if(elem.sex=="F"&&elem.name.startsWith("C")){
    console.log(elem.name);
  }
});

// Log all the even numbers from peopleGrade array
filterEven=(num)=> num%2==0;
personsGrade.filter(function filtering(elem){
  if(elem%2==0){
    console.log(elem);
  }
});
// Find the first name that starts with 'J' in persons array and log the object
persons.filter(function filter(elem){
  if(elem.name.startsWith("J")){
    console.log(elem);
  }
});

// Find the first name that starts with 'P' in persons array and log the object
persons.filter(function filter(elem){
  if(elem.name.startsWith("P")){
    console.log(elem);
  }
});
// Find the first name that starts with 'J', grade is greater than 10 and is a female
persons.filter(function filter(elem){
  if(elem.name.startsWith("J") && elem.grade>10 && elem.sex=="F"){
    console.log(elem.name);
  }
});//Jennifer
// Filter all the female from persons array and store in femalePersons array
let femalePerson=[];
persons.filter(function filter(elem){
  if(elem.sex=="F"){
    femalePerson.push(elem.name);
  }
});//["Sarah", "Paula", "Jennifer", "Courtney", "Jane", "Arya"]
// Filter all the male from persons array and store in malePersons array
let malePerson=[];
persons.filter(function filter(elem){
  if(elem.sex=="M"){
    malePerson.push(elem.name);
  }
});
// Find the sum of all grades and store in gradeTotal
let total = personsGrade.reduce((acc,element)=>acc+element);//133
// Find the average grade
console.log(total/personsGrade.length);
// Find the average grade of male
let malePersonsGrade=[];
persons.filter(function filtered(elem){
  if(elem.sex=="M"){
    malePersonsGrade.push(elem.grade)
  }
});
malePersonsGrade.reduce((acc,elem)=>acc+elem);//52

// Find the average grade of female
let femalePersonsGrade=[];
persons.filter(function filtered(elem){
  if(elem.sex=="F"){
    femalePersonsGrade.push(elem.grade)
  }
});
femalePersonsGrade.reduce((acc,elem)=>acc+elem);//81
// Find the highest grade
let overallArray = malePersonsGrade.concat(femalePersonsGrade);
let highest = overallArray[0];
for(let element of overallArray){
  if(highest<element){
    highest=element;
  }
}
console.log(highest);//18

// Find the highest grade in male
let highest = malePersonsGrade[0];
for(let element of malePersonsGrade){
  if(highest<element){
    highest=element;
  }
}
console.log(highest);//17

// Find the highest grade in female
let highest = femalePersonsGrade[0];
for(let element of femalePersonsGrade){
  if(highest<element){
    highest=element;
  }
}
console.log(highest);//18
// Find the highest grade for people whose name starts with 'J' or 'P'
let specificLettters=persons.filter(function filter(elem){
  if(elem.name.startsWith("P")||elem.name.startsWith("J")){
    return elem;
  }
});
let highest = specificLettters[0].grade;
for(let element of specificLettters){
  if(highest<element.grade){
    highest=element;
  }
}
console.log(highest);//18
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
function compare(a,b){
  return a-b;
}
personsGrade.sort(compare);
// Sort the peopleGrade in descending order
function compare(a,b){
  return b-a;
}
personsGrade.sort(compare);
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
function compare(a,b){
  return b-a;
}
[...personsGrade].sort(compare);
// Sort the array peopelName in ascending `ABCD..Za....z`
personsName.sort();
//["Arya", "Bob", "Courtney", "Donald", "Ethan", "Jane", "Jennifer", "John", "John", "Johnny", "Paula", "Sarah"]
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...personsName].sort();
//["Arya", "Bob", "Courtney", "Donald", "Ethan", "Jane", "Jennifer", "John", "John", "Johnny", "Paula", "Sarah"]