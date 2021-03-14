Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

   - Parameter: no
   - Return: string will be converted to uppercase.
   - Exceptions:When we call the string with undefined and null, then this will give us an Type erro
     String.prototype.toUpperCase.call(undefined)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.toUpperCase(); //"ARYA STARK"
    String.prototype.toUpperCase.call("babu")
     let houseName = 'Starks';
     houseName.toUpperCase();
     ```
   - `toUpperCase` when we apply this method on any string it will convert lower to upper case letters.

3. `toLowerCase`
   - Parameter: no
   - Return: string will be converted to lowercase.
   - Exceptions:When we call the string with undefined and null, then this will give us an Type erro
     String.prototype.toLowerCase.call(undefined)
   - Example:
     ```js
     let name = 'ARYA STARK';
     name.toLowerCase(); //"Arya Stark"
    String.prototype.toLowerCase.call("BABU"); //babu
     let houseName = 'STarks';
     houseName.toLowerCase(); //Starks
     ```
   - `toLowerCase` when we apply this method on any string it will convert upper to lower case letters.

4. `trim`
    - Parameter: no
   - Return: string will be trimmed from start and end.
   - Exceptions:When we call the string with undefined and null, then this will give us an Type erro
     String.prototype.trim.call(undefined)
   - Example:
     ```js
          let name = '  Arya Stark   ';
     name.trim(); //"Arya Stark"
    String.prototype.trim.call("   babu     "); //babu
     let houseName = '   Starks   ';
     houseName.trim(); //Starks
     ```
   - `trim` when we apply this method, it will remove the white space in start and ending of the string.

5. `trimEnd`
  - Parameter: no
   - Return: string will be trimmed in the end.
   - Exceptions:When we call the string with undefined and null, then this will give us an Type erro
     String.prototype.trimEnd.call(undefined)
   - Example:
     ```js
          let name = 'Arya Stark   ';
     name.trimEnd(); //"Arya Stark"
    String.prototype.trimEnd.call("babu     "); //babu
     let houseName = 'Starks   ';
     houseName.trimEnd(); //Starks
     ```
   - `trim` when we apply this method, it will remove the white space in end of the string.

6. `trimStart`
    - Parameter: no
   - Return: string will be trimmed from start.
   - Exceptions:When we call the string with undefined and null, then this will give us an Type erro
     String.prototype.trimStart.call(undefined)
   - Example:
     ```js
          let name = '    Arya Stark';
     name.trimStart(); //"Arya Stark"
    String.prototype.trimStart.call("   babu"); //babu
     let houseName = '   Starks';
     houseName.trimStart(); //Starks
     ```
 
   - `trim` when we apply this method, it will remove the white space in start of the string.

7. `concat`
     - str.concat(str1[, ...strN]);
    - Parameter: str1,..strN
    - Return: it returns the concatinanted string as a new string.
   - Example:
     ```js
    let name = 'Arya Stark';
    let str2 = "wow!"
     name.concat(" ",str2); //"Arya Stark wow!"
     let houseName = 'Starks';
     let str1 = "belongs to GOT"
     houseName.concat(" ",str1); //"Starks belongs to GOT"
     let str3 = "belongs to GOT"
     let str4 = "Aired in sony TV"
     name.concat(", ",str3,", ",str4); //"Starks belongs to GOT"
     ```
      - `concat` when we apply this method, it will concatinate the str and the arguments.
8. `endsWith`
    - Parameter: str1,..strN
    - Return: it returns the concatinanted string as a new string.
   - Example:
     ```js
    const str1 = 'Girls are the best!';
    console.log(str1.endsWith('best',18));
    // expected output: true

    const str2 = 'Is this a question';
    console.log(str2.endsWith(''));
    // expected output: true

     let str4 = "Aired in sony TV"
     console.log(str4.endsWith('V',16)); //true
     ```
      - `concat` when we apply this method, it will checks wheather argument is present at the end of string or not.
9. `includes`

      - Parameter: parameter specifies searchstring
    - Return: it returns the boolean , if the string exist or not in the current string
    - Example:
     ```js
    const str = 'Mozilla';

      console.log(str.includes("lla"));
      // expected output: true

      console.log(str.includes("a"));
      // expected output: true
      console.log(str.includes("")); 
      // expected output: true
    
     ```
      - `includes` when we apply this method, it will check wheather the string exist in the main string or not.
10. `indexOf`
      - Parameter: parameter specifies searchstring
    - Return: it returns the index of the search string or character.
    - Example:
     ```js
    const str = 'Mozilla Developers network is the official documentation';

      console.log(str.indexOf("lla"));
      // expected output: true

      console.log(str.indexOf("a"));
      // expected output: true
      console.log(str.indexOf("")); 
      // expected output: true
    
     ```
      - `indexOf` when we apply this method, it will give us at what index the particular character or word exist in the main string.
11. `lastIndexOf`
        - Parameter: parameter specifies searchstring
    - Return: it returns the last index of the search string or character.
    - Example:
     ```js
    const str = 'Mozilla Developers network is the official documentation';

      const str="mozilla nnab"
      console.log(str.lastIndexOf("n"));
      // expected output: 9
      console.log(str.lastIndexOf("a"));
      // expected output: 10
      console.log(str.lastIndexOf("")); 
      // expected output: 12
    
     ```
      - `lastIndexOf` when we apply this method, it will give us at what last index the particular character or word exist in the main string.

12. `padEnd`
  - Parameter: first parameter1 is targetlength , parameter2 paddString.
    - Return: it returns the the current string,by adding paddedString with targetlength. 
    - Example:
     ```js
     const str1 = '5';
      console.log(str1.padEnd("4",'0'));
    // expected output: "5000"
    const str1 = 'a';
      console.log(str1.padEnd("4",'W'));
    // expected output: "aWWW"
    const str1 = 'b';
      console.log(str1.padEnd("5",'e'));
    // expected output: "beeee"
     ```
      - `padEnd` when we apply this method, it will pad the paddString with target length at the End of the ecurrent string. 
13. `padStart`
    - Parameter: first parameter1 is targetlength , parameter2 padString.
    - Return: it returns the the current string,by adding paddedString with targetlength. 
    - Example:
     ```js
     const str1 = '5';
      console.log(str1.padStart("4",'0'));
    // expected output: "0005"
    const str1 = 'a';
      console.log(str1.padStart("4",'W'));
    // expected output: "WWWa"
    const str1 = 'b';
      console.log(str1.padStart("5",'e'));
    // expected output: "eeeeb"
     ```
      - `padStart` when we apply this method, it will pad the paddString with target length at the start of th ecurrent string. 
14. `repeat`
    - Parameter: count, how many times the string need to be repeated.
    - Return: it returns the the current string,by repeating the specified number of times. 
    - Example:
     ```js
     const str1 = '5';
      console.log(str1.repeat(2));
    // expected output: "0005"
    const str1 = 'a';
      console.log(str1.repeat(4));
    // expected output: "WWWa"
    const str1 = 'b';
      console.log(str1.repeat(5));
    // expected output: "eeeeb"
     ```
      - `repeat` when we apply this method, it will repeat the number of times the current string is specified .
15. `replace`
       - Parameter: regex,nesubstring, substring,function
    - Return: it returns the the current string,by replacing the specified str with new strings.
    - Example:
     ```js
     const p = 'dogs are always loyal towards human, who behave like dogs';
     console.log(p.replace('dogs', 'monkey'));
    console.log(p.replace('loyal', 'funny'));
    console.log(p.replace('dogs', 'gods'));
     ```
      - `replace` when we apply this method, it will replace any targeted argument with another one.

16. `slice`
    - Parameter: parameter1 specifies start, parameter2 specifies stop.
    - Return: it returns the the current string,by removing the other parts of strings which is not mentioned. 
    - Example:
     ```js
     const str1 = 'The quick brown fox jumps over the lazy dog.';
      console.log(str1.slice(2,Infinity));
      // expected output: e quick brown fox jumps over the lazy dog.

      console.log(str1.slice(4));
    // expected output:"quick brown fox jumps over the lazy dog."

      console.log(str1.slice(5,0));
    // expected output: "uick brown fox jumps over the lazy dog."
    console.log(str.slice(-4));
    // expected output: "dog."
     ```
      - `slice` when we apply this method, it will slice the string and display the string within those index values only.
17. `split`
- Parameter: parameter1 specifies seperator , parameter2 limiter.
    - Return: it returns the the current string,by seperating it at the specified seperator in argument. 
    - Example:
     ```js
    const str = 'The old man crossing the road';
    const words = str.split(' ',4);
    console.log(words);
    // expected output: Array ["The", "old", "man", "crossing"]

    const chars = str.split('');
    console.log(chars);
    // expected output: Array ["T", "h", "e", " ", "o", "l", "d", " ", "m", "a", "n", " ", "c", "r", "o", "s", "s", "i", "n", "g", " ", "t", "h", "e", " ", "r", "o", "a", "d"]
    const strCopy = str.split();
    console.log(strCopy);
    //expected output:  Array ["The old man crossing the road"]
     ```
    - `split` when we apply this method, it will split the string and return the array of strings.
18. `substring`
    - Parameter: parameter1 specifies indexstart , parameter2 indexend.
    - Return: it returns the string ,by displaying only the letters between the indices only.
    - Example:
     ```js
    const str = 'Mozilla';

      console.log(str.substring(1, 3));
      // expected output: "oz"

      console.log(str.substring(2));
      // expected output: "zilla"
      console.log(str.substring()); or console.log(str.substring(null));
      // expected output: "Mozilla"
    
     ```
      - `substring` when we apply this method, it will display the characters with in the indexes (indexes are excluded).