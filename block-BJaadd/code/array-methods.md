Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
   - Parameter: "seperator" is given as an argument for 
   join().
   it return the joined string with all the elemnts in the array.  
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.join("-"); //"1-2-3"
     let hello =[1,"hello",true] ;
     hello.join("");//"1hellotrue"
     let array =[2,3,4] ;
     hello.join(" ");//"2 3 4"
     ```
   - `join`will convert any array of items(its can be any datatype) and join them with seperator and return a string as final output.
   - No it does not mutate the original array.
3. `flat`
    - Parameter: n (any) can be any number from 0 to infinity(included) to specify the depth up to where the sub array elements will be concatinated recursively 
    return : it returns an array with all the elements in the subarrays up to which depth it is specified by arguments in the flat(args).
   - Example:
     ```js
     let numbers = [1, 2, 3,[2,3]];
     number.flat(1);//[1,2,3,2,3]
     let ages = [1, 2, 3,[2,3]];
     number.flat();//[1,2,3,2,3]
    let group = [1, 2, 3,[2,3,[8,9,0]]];
     number.flat(1);//[1,2,3,2,3,[8,9,0]]
     ```
   - `flat` accepts n number of values from 0 to infinity(included)  and returns one array with all the elemnts in the sub arrays by adding them recursively to each other.
   - No it does not mutate the original array
4. `push`
    - Parameter: n (any) number of values from 0 to infinity(included),and all other datatypes. 
        - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.push(4); 
     console.log(numbers);//[1,2,3,4]
     let colors = ['red', 'green', 'blue'];
     colors.push('black', 'red', 21, true); 
     console.log(colors);
     //['red','green','blue','black', 'red', 21, true]
     let ages =[2];
     ages.push(3,4)
     console.log(ages);//[2,3,4];
     ```
   - `push` accepts n number of values and returns one array with all the values in same order. It changes the original array.
   - Yes,it does mutate the original array
5. `indexOf`
    - Parameter: one argument is for the element to be searched, index argument is for from which index it should start searching the element.
    - Return: it returns the index value  of the searched value or element.
    - Example:
     ```js
     const beasts = ['ant', 'bison', 'camel', 'duck', 'bison','camel', 'duck'];

    console.log(beasts.indexOf('bison'));
    // expected output: 1

    console.log(beasts.indexOf('bison', -3));
    // expected output: 4

    console.log(beasts.indexOf('camels'));
    // expected output: -1
     ```
   - `indexOf` accepts n number of values and index from where it should start looking for , it will gives back the number(index), location of the element.
   - No it does not mutate the original array
6. `lastIndexOf`
     - Parameter: accept an argument where you can input any datatype.
      - Return: an last index of the searched value.
   - Example:
     ```js
    let numbers = [1, 2, 3,4,3];
     numbers.lastIndexOf(4); //3
     let colors = ['red', 'green', 'blue'];
     colors.lastIndexOf('red'); //0
     let colors = ['red', 'green', 'blue'];
     colors.lastIndexOf('white');//-1
     ```
   - `lastIndexOf` accept an argument where you can input any datatype,and it will return back the lastIndex the search value, it always looks from back to front.
   - No it does not mutate the original array
7. `includes`
    - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
    - Return: true or false.
    - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.includes(2); //true
    const pets = ['cat', 'dog', 'bat'];
    console.log(pets.includes('cat',0));
    // expected output: true
     let colors = ['21', 'green', 'blue'];
     colors.includes(21); //false
     ```
   - `includes` accepts an argument , if the value matches with any of the element then it will return true or false.
   - No it does not mutate the original array
8. `reverse`
    - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
          - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.reverse(); //[4,3,2,1]
     let colors = ['red', 'green', 'blue'];
     colors.reverse()// ['red','green','blue']
     let array = ["1", "2", "3"];
     array.reverse(); //["3","2","1"]
     ```
   - `reverse` it will reverse the elements inside the array, and it mutates and returns the array.
   -it does mutate the original array
9. `every`
    - Parameter: call back function will be invoked as an argument.
    - Return: it will return true or false
    - Example:
     ```js
     let numbers = [1, 2, 3];
     const checkEven = (currentValue) => currentValue%2==0;
     numbers.every(checkEven); //false
     let numbers = [1, 2, 3];
     const check = (currentValue) => currentValue%1==0;
     numbers.every(check); //true
     let numbers = [1, 2, 3];
     const checkOdd = (currentValue) => currentValue%2!=0;
     numbers.every(checkOdd);//
     ```
   - `every`  all the elements in the array passes to the invoked function , if all elemets are passed with condition then true will be returned
   - No it does not mutate the original array
10. `shift`
    - Parameter: no parameters for this method, its a generic one
    - Return: a single Array by removing the element from the starting of the current array.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.shift(); //[2,3,4]
     let colors = ['red', 'green', 'blue'];
     colors.shift();//["green","blue"];
     let ages =[2,3,4,5];
     ages.shift();//[3,4,5]
     ```
   - `shift` it is a generic method which removes the first element of the current array and returns the same array. 
   - it does mutate the original array
11. `splice`
    - Parameter: it accepts three parameters at index where we can place the 
          - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
      let numbers = [3, 0, 7];
     numbers.splice(0,0,4);//[4,3,0,7]
     var numbers = [1,123,3,3,3];
     numbers.splice(0,1,"hello");//["hello", 123, 3, 3, 3]
     let colors = ['red', 'green', 'blue'];
     colors.concat(0,1,'black'); // ['black', 'green', 'blue']
     ```
   - `slice` accepts at which index, second arg will know us how many elements need to be removed and we can add the items we intended to add to the array.
   -it does mutate the original array
12. `find`
    - Parameter: callback function with this argument is provided as an input parameter.
    - Return: it returns the first element of the array which satisfies the condition.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.find((element)=>element%2==0); //2
     let colors = ['red', 'green', 'blue'];
     colors.find((element)=>element.length==4); //blue"
     let odd=[2,3,45,6];
     odd.unshift((e)=>e%2!=0);//5
     ```
   - `find` methds returns a value of the first element in the array that satisfies the provided testing function
   - No it does not mutate the original array
13. `unshift`
    - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
      - Return: a single Array consisting of by all the values passed will be added in the starting of the arrays.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.unshift(4); //[4,1,2,3]
     let colors = ['red', 'green', 'blue'];
     colors.unshift('black', 'red', 21, true); // ['black', 'red', 21, true,'red','green','blue']
     let age=[2,3,45,6];
     age.unshift("45");//["45",2,3,45,6]
     ```
   - `unshift` accepts n number of values and returns one array with all the values , it adds in th starting of the arrays
   - it does mutate the original array
14. `findIndex`
    - Parameter: callback function with this argument is provided as an input parameter.
    - Return: it returns the index of first element of the array which satisfies the condition.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.find((element)=>element%2==0); //1
     let colors = ['red', 'green', 'blue'];
     colors.find((element)=>element.length==4); //2
     let odd=[2,3,45,6];
     odd.unshift((e)=>e%2!=0);//2
     ```
   - `findIndex` methds returns a value of the index of first element in the array that satisfies the provided testing function
   - No it does not mutate the original array
15. `filter`
    - Parameter: callback function with this argument is provided as an input parameter.
      - Return: a single Array consisting of by all the values passed as parameters if they satidfy the condition.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.filter((n)=>n%2==0); //2
     let colors = ['red', 'green', 'blue'];
    const result = colors.filter(word => word.length > 6);
     console.log(result)//[]
     const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    const result = words.filter(word => word.length > 6);
    console.log(result);//[ 'exuberant', 'destruction', 'present']
     ```
   - `filter` filter will accepts the each element in an array and test the element with some condition and it will be returned in to a new array if it satisied.
   - No it does not mutate the original array
16. `flat`
    - Parameter: n (any) can be any number from 0 to infinity(included) to specify the depth up to where the sub array elements will be concatinated recursively 
    return : it returns an array with all the elements in the subarrays up to which depth it is specified by arguments in the flat(args).
   - Example:
     ```js
     let numbers = [1, 2, 3,[2,3]];
     number.flat(1);//[1,2,3,2,3]
     let ages = [1, 2, 3,[2,3]];
     number.flat();//[1,2,3,2,3]
    let group = [1, 2, 3,[2,3,[8,9,0]]];
     number.flat(1);//[1,2,3,2,3,[8,9,0]]
     ```
   - `flat` accepts n number of values from 0 to infinity(included)  and returns one array with all the elemnts in the sub arrays by adding them recursively to each other.
   - No it does not mutate the original array
17. `forEach`
    - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
    - Return: single values in arrays are consoled one after the other.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.forEach(); //1
     //2
     //3
     //4
     
     let colors = ['red', 'green', 'blue'];
    // 'red'
    //'green'
    //4bl5e'
    let ages = [4, 5, undefined];
     ages.forEach();
     //undefined is not a function 
     ```
   - `forEach` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array
18. `map`
    - Parameter: current value,index,calling an array, thisArg is given as parameters 
    - Return: a single Array populating the results of calling a provided function on every element calling an array 
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.map((elem)=>elem/2); //[0.5, 1, 1.5]
     let colors = ['red', 'green', 'blue'];
     colors.map((elem)=>elem+2); //["red2", "green2", "blue2"]
     ```
   - `map` it will be passing all the elements and populate the result in number or bolleans or undefined.
   - No it does not mutate the original array
19. `pop`
    - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
    - Return:  a single Array consisting of elements,the last element will be removed and the array will be returned.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.pop(); //[1,2]
     
     let colors = ['red', 'green', 'blue'];
     colors.pop(); // ['red','green']
     let colors = [undefined,null, NaN];
     colors.pop(); //[undefined,null]
     ```
   - `pop` it is a generic which removes the last element of the any array. and returns the remaining elemnts in the array, it mutates the input array.
   - it does mutate the original array
20. `reduce`
    - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
          - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
    const numbers = [5, 10, 15];
    const reducer = (accumulator, item) => {
      return accumulator + item;
    };
    const total = numbers.reduce(reducer, 0)
    //30
    const words = ["hello", "hey", "15"];
    const reducer = (accumulator, item) => {
      return accumulator + item;
    };
    const total = numbers.reduce(reducer)
    //"hellohey15"

      - `reduce` accepts all the element in the array and returns a single value after the required ioperations are done.
      - No it does not mutate the original array
21. `slice`
    - Parameter:start index and end index are given as args
    - Return: an array sliced from the specified indexes will be stored inside the new array. 
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.slice(1); //[2,3] from index 1 to end
     let colors = ['red', 'green', 'blue'];
     colors.slice(0,1); // ['red']from index 0 to 1(excluded)

     ```
   - `slice` accepts start and end indecies as an inputs, it will returns a shallow array from the specified indieces excluding the end index.
   - No it does not mutate the original array
22. `some`
    - Parameter: call back function will be invoked as an argument.
    - Return: it will return true or false
    - Example:
     ```js
     let numbers = [1, 2, 3];
     const checkEven = (currentValue) => currentValue%2==0;
     numbers.every(checkEven); //false
     let numbers = [1, 2, 3];
     const check = (currentValue) => currentValue%1==0;
     numbers.every(check); //true
     let numbers = [1, 2, 3];
     const checkOdd = (currentValue) => currentValue%2!=0;
     numbers.every(checkOdd);//
     ```
   - `some`  atleast on of the elements in the array passes to the invoked function , if all elements are passed with condition then true will be returned
   - No it does not mutate the original array
