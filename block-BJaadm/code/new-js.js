Write a function to check whether input value is a string or not.
/* Requirements
  @name isString
  @parameter (any value) val
  @return Boolean
*/
function isString(val){
    if(typeof(val)=="string"){
        return true;
    }
    return false;
}

// Test
console.log(isString('tony stark')); // true;
console.log(isString([1, 2, 4, 0])); // false;
Write a function to check whether a string is blank or not.
/* Requirements
  @name isBlank
  @parameter (any value) val
  @return Boolean
*/

function isString(val){
    if((val)==""||val==" "){
        return true;
    }
    return false;
}

// Test
console.log(isBlank('')); // true;
console.log(isBlank('abc')); // false;
Write a function to split a string and convert it into an array of words.
/* Requirements
  @name stringToArray
  @parameter (string) text
  @return Array
*/

function stringToArray(val){
    return val.split(" ");
}
// Test
console.log(stringToArray('Hello World')); // ["Hello", "World"];
console.log(stringToArray('Lady Bird')); // ["Lady", "Bird"];
Write a function to return specified number of characters from a string.
/* Requirements
  @name truncate
  @parameter (string, number) text, len
  @return String
*/
function truncate(str, num){
    return str.slice(0,num);
}

// Test
console.log(truncate('John Snow', 4)); // "John";
Write a function to convert a string name in abbreviated form
/* Requirements
  @name abbrevName
  @parameter (string) fullName
  @return String
*/

function abbrevName(str){
    let splittedArray=str.split(" ");
    return splittedArray[0].concat(" "+splittedArray[1][0]+".")
}

// Test
console.log(abbrevName('Robin Singh')); //"Robin S."
console.log(abbrevName('John Snow')); //"John S."
Write a function to hide email addresses to protect from unauthorized user.
/* Requirements
  @name protect
  @parameter (string) email
  @return String
*/

// your code goes here

// Test
console.log(protect('johnS@example.com')); // "john...@example.com"
console.log(protect('arya_stark@example.com')); // "arya...@example.com"
Write a function to hide email addresses to protect from unauthorized user. The number of dots should be same as length of left characters.
/* Requirements
  @name protectAgain
  @parameter (string) email
  @return String
*/

function protect(str){
    let slicedString=str.slice(0,4);
    return slicedString.concat("..."+str.slice(str.indexOf("@"),Infinity));
}

// Test
console.log(protect('johnS@example.com')); // "john.@example.com"
console.log(protect('arya_stark@example.com')); // "arya......@example.com"
Write a function to parameterize a string.
/* Requirements
  @name parameterize
  @parameter (string) str
  @return String
*/

function parameterize(str){
    var strArrays=str.split(" ");
    for(let i=1;i<strArrays.length;i++){
        strArrays[0]+=(`-${strArrays[i]}`);
    }
    return strArrays[0];
}

// Test
console.log(parameterize('John Snow from Winterfell')); // "john-snow-from-winterfell"
console.log(parameterize('Arya Stark from Winterfell')); // "arya-stark-from-winterfell"
Write a function to capitalize the first letter of a string.
/* Requirements
@name capitalizeFirst
@parameter (string, number) text, len
@return String
*/

function capitalizeFirst(str){
    return str[0].toUpperCase()+str.slice(1,Infinity);
}

// Test
console.log(capitalizeFirst('we are learning')); // "We are learning"
console.log(capitalizeFirst('learning Javascript')); // "Learning Javascript"
Write a function to capitalize the first letter of each word in a string.
/* Requirements
  @name capitalizeWords
  @parameter (string) text
  @return String
*/

function capitalizeWords(str){
    let totalStr="";
    let array = str.split(" ");
    for(let i=0;i<array.length;i++){
        totalStr+=` ${array[i][0].toUpperCase()+array[i].slice(1,Infinity)}`;
    }
    console.log(totalStr)
}


// Test
console.log(capitalizeWords('we are learning')); // "We Are Learning"
console.log(capitalizeWords('learning javascript')); // "Learnign Javascript"
Write a function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
/* Requirements
  @name swapcase
  @parameter (string) text
  @return String
*/

function swapcase(str){
    var total="";
    for(let i=0;i<str.length;i++){
        if(str[i]==str[i].toUpperCase()){
            total+=str[i].toLowerCase();
        }else{
            total+=str[i].toUpperCase();
        }
    }
    return total;
}

// Tets
console.log(swapcase('AaBbc')); // "aAbBC"
console.log(swapcase('abcDef')); // "ABCdEF"
Write a function to convert a string into camel case.
Example:

/* Requirements
  @name camelize
  @parameter (string) text
  @return String
*/
function camelize(str){
    let totalStr="";
    let splitArray=str.split(" ");
    for(let i=1;i<splitArray.length;i++){
        totalStr+=`${splitArray[i][0].toUpperCase()+splitArray[i].slice(1,Infinity)}`;
    }
    return splitArray[0]+totalStr;
}

// Test
console.log(camelize('hello world')); // "helloWorld"
console.log(camelize('main exercise')); // "mainExercise"
Write a function to uncamelize a string (output should be all in lowercase)
/* Requirements
  @name uncamelize
  @parameter (string, string) text, joinStr
  @return String
*/
function uncamelize(str){
    let totalStr="";
    let splitArray=str.split(" ");
    for(let i=1;i<splitArray.length;i++){
        totalStr+=`${splitArray[i][0].toUpperCase()+splitArray[i].slice(1,Infinity)}`;
    }
    return splitArray[0]+totalStr;
}

// Tets
console.log(uncamelize('helloWorld', '_')); // "hello_world"
console.log(uncamelize('learningJavascript', '_')); // "learning_javascript"
console.log(uncamelize('learningJavaScriptAgain', '_')); // "learning_java_script_again"
Write a function to concatenates a given string n times (default is 1).
/* Requirements
  @name repeat
  @parameter (string, number) text, times
  @return String
*/
function repeat(string,number=1){
    return string.repeat(number)
}
// your code goes here

// Test
console.log(repeat('Ha!', 3)); // "Ha!Ha!Ha!"
console.log(repeat('Ha!')); // "Ha"
Write a function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with ("…") (by default) or specified characters.

/* Requirements
  @name testTruncate
  @parameter (string, number, string) text, len, postfix
  @return String
*/
function textTruncate(str,num,str2="..."){
    if(str.length>num){
        let sliceString = str.slice(0,num)
        return sliceString.concat(str2)
    }
}

// Test
console.log(textTruncate('We are doing JS string exercises.', 15, '!!')); //"We are doing !!"
console.log(textTruncate('We are doing JS string exercises.', 15)); //"We are doing ..."
Write a function to chop a string into chunks of a given length.
/* Requirements
  @name stringChop
  @parameter (string, number) text, size (default to 1)
  @return String
*/
function stringChop(str,num){
    for(let element of str){

    }
}

// Test
console.log(stringChop('hello world', 2)); // ["he", "ll", "o ", "wo", "rl", "d"]
console.log(stringChop('hello')); // ["h", "e", "l", "l", "o"]
Write a function to count the occurrence of a substring (case doesn't matter) in a string.
/* Requirements
  @name count
  @parameter (string, string) text, char
  @return Number
*/
function count(string,small){
    let count =0;
    let array=string.split(" ");
    for(let element of array){
        var lower = element.toLowerCase();
        if(lower.incudes(small)){
            count++;
        }
    }
    return count;
}

// your code goes here

// Test
console.log(count('The quick brown fox jumps over the lazy dog', 'the')); // 2
console.log(count('hello again hello', 'hello')); // 2
console.log(count('hello', 'one')); // 0
Write a function to strip leading and trailing spaces from a string.
/* Requirements
  @name strip
  @parameter (string) text
  @return String
*/

// your code goes here
function strip(string){
    return string.trim();
}
// Test
console.log(strip('   Hello World ')); // "Hello World"
console.log(strip('Hello World      ')); // "Hello World"
Write a function to truncate a string to a certain number of words.
/* Requirements
  @name chopWords
  @parameter (string, number) text, words (default to 1)
  @return String
*/

function chopWords(string, number=1){
    let array = string.split(" ");
    let refined = [];
    for(let i=0;i<number;i++){
        refined.push(array[i]);
    }
    return refined.join(" ");
}

// Test
console.log(chopWords('The quick brown fox jumps over the lazy dog', 4)); // "The quick brown fox"
console.log(chopWords('I am learning JavaScript', 4)); // "I am learning JavaScript"
Write a function to reverse an string
/* Requirements
  @name reverseString
  @parameter (string) text
  @return String
*/
function alphabetize(str){
    let array=str.split("");
    array.reverse();
    return finalString = array.join("");
}

// Test
console.log(alphabetize('United States')); // 'setatS detinU'
console.log(alphabetize('Hello World')); // 'dlroW olleH'