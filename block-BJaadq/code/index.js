// NOTE: You can not use reduce methods to solve this exercise

function countAllPeople() {
  var sum=0;
  for(let i=0;i<got.houses.length;i++){
    sum+=got.houses[i].people.length;
  }
  console.log(sum);
}
countAllPeople();
function peopleByHouses(){
  var obj={}
  for(let i=0;i<got.houses.length;i++){
    obj[got.houses[i].name]=got.houses[i].people.length;
  }
  return obj;
}
peopleByHouses()//{Starks: 8, Lannisters: 4, Baratheons: 6, Targaryens: 2, Greyjoys: 3, …}
function everyone(){
  var names=[];
  for(let i=0;i<got.houses.length;i++){
    for(let j=0;j<got.houses[i].people.length;j++){
      names.push(got.houses[i].people[j].name);
    }  
  }
  return names;
}
everyone();
function nameWithS() {
  var namesWithS=[];
  for(let i=0;i<got.houses.length;i++){
    for(let j=0;j<got.houses[i].people.length;j++){
      if(got.houses[i].people[j].name.startsWith("S")){
        namesWithS.push(got.houses[i].people[j].name);
      }
    }  
  }
  return namesWithS;
}
//["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark Upper", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]
nameWithS();
function nameWithA() {
  var namesWithA=[];
  for(let i=0;i<got.houses.length;i++){
    for(let j=0;j<got.houses[i].people.length;j++){
      if(got.houses[i].people[j].name.startsWith("A")){
        namesWithA.push(got.houses[i].people[j].name);
      }
    }  
  }
  return namesWithA;
}
nameWithA();//["Arya Stark"]
function surnameWithS() {
  var surNamesWithS=[];
  for(let i=0;i<got.houses.length;i++){
    for(let j=0;j<got.houses[i].people.length;j++){
      if(got.houses[i].people[j].name.includes(" S")){
        surNamesWithS.push(got.houses[i].people[j].name);
      }
    }  
  }
  return surNamesWithS;
}
surnameWithS()
//["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark Upper", "Jon Snow", "Catelyn Stark"]
function surnameWithA() {
  var surNamesWithA=[];
  for(let i=0;i<got.houses.length;i++){
    for(let j=0;j<got.houses[i].people.length;j++){
      if(got.houses[i].people[j].name.includes(" A")){
        surNamesWithA.push(got.houses[i].people[j].name);
      }
    }  
  }
  return surNamesWithA;
}



function peopleNameOfAllHouses() {
  var obj={}
  
  for(let i=0;i<got.houses.length;i++){
    var names=[]
    for(let j=0;j<got.houses[i].people.length;j++){
     
      names.push(got.houses[i].people[j].name);
      obj[got.houses[i].name]=names;
      
    }
    
  }
  return obj;
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
