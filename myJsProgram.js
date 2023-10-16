
// const myList = [
//     {id:1, name:"Vinay", age:30, job:"Data Analyst", Job_type:"remote"},
//     {id:2, name:"Vijay", age:25, job:"Web Dev", Job_type:"Office"},
//     {id:1, name:"Vikarm", age:27, job:"system Admin", Job_type:"remote"}
// ]

// console.log(myList)

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];


// Working on array

// const myList = ["vinay", "vijay", "vikash", "Lalit", "Sanjeev", "Chavvi", "Kavita", "Vinita", "Ravindra", "Mahendra"]

// console.log(myList.length)

// it come with 10 - length of array is 10 

////// ************************* //

//  for in loop 


// for(let element in myList){
//     console.log(element)
// }
//it show index of every element in array


// ****** for of loop

// for(let element of myList){
//     console.log(element)
// }

// out put 

// vinay
// vijay
// vikash
// Lalit
// Sanjeev
// Chavvi
// Kavita
// Vinita
// Ravindra
// Mahendra


// forEach loop

// myList.forEach( function(element, index, array){
//     console.log(element)
// }
// )

//show the all element in myList array

// vinay
// vijay
// vikash
// Lalit
// Sanjeev
// Chavvi
// Kavita
// Vinita
// Ravindra
// Mahendra


// myList.forEach( function(element, index, array){
//     console.log(element, index)
// }
// )

//it show element with index number of every element in Array myList

// vinay 0
// vijay 1
// vikash 2
// Lalit 3
// Sanjeev 4
// Chavvi 5
// Kavita 6
// Vinita 7
// Ravindra 8
// Mahendra 9

// myList.forEach( function(element, index, array){
//     console.log(element, index, array)
// }
// )

// listing all element of array with element name, index, and which array 

//// this is out put of above program

// vinay 0
// vijay 1
// vikash 2
// Lalit 3
// Sanjeev 4
// Chavvi 5
// Kavita 6
// Vinita 7
// Ravindra 8
// Mahendra 9
// vinay 0 [
//   'vinay',    'vijay',
//   'vikash',   'Lalit',
//   'Sanjeev',  'Chavvi',
//   'Kavita',   'Vinita',
//   'Ravindra', 'Mahendra'
// ]
// vijay 1 [
//   'vinay',    'vijay',
//   'vikash',   'Lalit',
//   'Sanjeev',  'Chavvi',
//   'Kavita',   'Vinita',
//   'Ravindra', 'Mahendra'
// ]
// vikash 2 [
//   'vinay',    'vijay',
//   'vikash',   'Lalit',
//   'Sanjeev',  'Chavvi',
//   'Kavita',   'Vinita',
//   'Ravindra', 'Mahendra'
// ]
// Lalit 3 [
//   'vinay',    'vijay',
//   'vikash',   'Lalit',
//   'Sanjeev',  'Chavvi',
//   'Kavita',   'Vinita',
//   'Ravindra', 'Mahendra'
// ]
// Sanjeev 4 [
//   'vinay',    'vijay',
//   'vikash',   'Lalit',
//   'Sanjeev',  'Chavvi',
//   'Kavita',   'Vinita',
//   'Ravindra', 'Mahendra'
// ]
// Chavvi 5 [
//   'vinay',    'vijay',
//   'vikash',   'Lalit',
//   'Sanjeev',  'Chavvi',
//   'Kavita',   'Vinita',
//   'Ravindra', 'Mahendra'
// ]
// Kavita 6 [
//   'vinay',    'vijay',
//   'vikash',   'Lalit',
//   'Sanjeev',  'Chavvi',
//   'Kavita',   'Vinita',
//   'Ravindra', 'Mahendra'
// ]
// Vinita 7 [
//   'vinay',    'vijay',
//   'vikash',   'Lalit',
//   'Sanjeev',  'Chavvi',
//   'Kavita',   'Vinita',
//   'Ravindra', 'Mahendra'
// ]
// Ravindra 8 [
//   'vinay',    'vijay',
//   'vikash',   'Lalit',
//   'Sanjeev',  'Chavvi',
//   'Kavita',   'Vinita',
//   'Ravindra', 'Mahendra'
// ]
// Mahendra 9 [
//   'vinay',    'vijay',
//   'vikash',   'Lalit',
//   'Sanjeev',  'Chavvi',
//   'Kavita',   'Vinita',
//   'Ravindra', 'Mahendra'
// ]




// myList.forEach( function(element, index, array){
//     console.log(element, index, array)
// }
// )

//convert above code to fat arrow function

// myList.forEach( (element, index, array) => {
//     console.log(element)
// }
// )

//out put 

// vinay
// vijay
// vikash
// Lalit
// Sanjeev
// Chavvi
// Kavita
// Vinita
// Ravindra
// Mahendra



// ********************************  //
// Date: 14-10-2023
//Array Methods 

// concat()	joins two or more arrays and returns a result

// const myList = ["vinay", "vijay", "vikash", "Lalit", "Sanjeev", "Chavvi", "Kavita", "Vinita", "Ravindra", "Mahendra"]

// const myList2 = ["Raj", "Sachin", "Vinod"]

// const myList1 = myList.concat(myList2)

// console.log(myList1)

// [
//     'vinay',    'vijay',
//     'vikash',   'Lalit',
//     'Sanjeev',  'Chavvi',
//     'Kavita',   'Vinita',
//     'Ravindra', 'Mahendra',
//     'Raj',      'Sachin',
//     'Vinod'
//   ]



//How to create an array from a string using the split() method

// const str = 'I love My Country';

// console.log(str.split());

// If I wanted to change it so the string is split up into individual characters,

// console.log(str.split(""));

//  [
//   'I', ' ', 'l', 'o', 'v',
//   'e', ' ', 'M', 'y', ' ',
//   'C', 'o', 'u', 'n', 't',
//   'r', 'y'
// ]

//how the spaces are considered characters in the return value

//change it so the string is split up into individual words

// console.log(str.split(" "));

//output
// [ 'I', 'love', 'My', 'Country' ]





// indexOf()	searches an element of an array and returns its position
//method returns the first index of occurance of an array element, or -1 if it is not found

// const myList = ["vinay", "vijay", "vikash", "Lalit", "Sanjeev", "Chavvi", "Kavita", "Vinita", "Ravindra", "Mahendra"]

// const newList = myList.indexOf(1)
// console.log(newList)


// JavaScript Array reverse()
// The reverse() method returns the array in reverse order.
// const myList = ["vinay", "vijay", "vikash", "Lalit", "Sanjeev", "Chavvi", "Kavita", "Vinita", "Ravindra", "Mahendra"];
// const reverseArray = myList.reverse();
// console.log(reverseArray)

// [
//     'Mahendra', 'Ravindra',
//     'Vinita',   'Kavita',
//     'Chavvi',   'Sanjeev',
//     'Lalit',    'vikash',
//     'vijay',    'vinay'
//   ]

// using spread operator to reverse the array
// const myList = ["vinay", "vijay", "vikash", "Lalit", "Sanjeev", "Chavvi", "Kavita", "Vinita", "Ravindra", "Mahendra"];
// const newArray = [...myList].reverse()
// console.log(newArray)

//we use the spread operator(...) in the array along with the reverse() method, it does not modify the original array


//JavaScript Array sort()

//The sort() method sorts the items of an array in a specific order (ascending or descending).

// const myList = ["vinay", "vijay", "vikash", "Lalit", "Sanjeev", "Chavvi", "Kavita", "Vinita", "Ravindra", "Mahendra"];

// const newSort = myList.sort()
// console.log(newSort)

//output

// [
//     'Chavvi',   'Kavita',
//     'Lalit',    'Mahendra',
//     'Ravindra', 'Sanjeev',
//     'Vinita',   'vijay',
//     'vikash',   'vinay'
//   ]

//JavaScript Array fill()
//The fill() method returns an array by filling all elements with a specified value.
//fill() Syntax 
//arr.fill(value, start, end)


// const myList = ["vinay", "vijay", "vikash", "Lalit", "Sanjeev", "Chavvi", "Kavita", "Vinita", "Ravindra", "Mahendra"];

// const myFriend = myList.fill("Soaumya")
// console.log(myFriend)


//out put
// [
//     'Soaumya', 'Soaumya',
//     'Soaumya', 'Soaumya',
//     'Soaumya', 'Soaumya',
//     'Soaumya', 'Soaumya',
//     'Soaumya', 'Soaumya'
//   ]


// const newArray1 = myList.fill("vinay", 1, 6)
// console.log(newArray1)

// [
//     'vinay',    'vinay',
//     'vinay',    'vinay',
//     'vinay',    'vinay',
//     'Kavita',   'Vinita',
//     'Ravindra', 'Mahendra'
//   ]


//Javascript Array join()

//The join() method returns a new string by concatenating all of the elements in an array, 
//separated by a specified separator.
//join() Syntax 
//arr.join(separator)

// const myList = ["vinay", "vijay", "vikash", "Lalit", "Sanjeev", "Chavvi", "Kavita", "Vinita", "Ravindra", "Mahendra"];
// const newJoin = myList.join("")
// const newJoin = myList.join("|")
// const newJoin = myList.join(",")
// console.log(newJoin)
//out put
//vinayvijayvikashLalitSanjeevChavviKavitaVinitaRavindraMahendra

//vinay|vijay|vikash|Lalit|Sanjeev|Chavvi|Kavita|Vinita|Ravindra|Mahendra
//vinay,vijay,vikash,Lalit,Sanjeev,Chavvi,Kavita,Vinita,Ravindra,Mahendra


//Javascript Array toString()
//The toString() method returns a string formed by the elements of the given array.


// defining an array
// const myList = ["vinay", "vijay", "vikash", "Lalit", "Sanjeev", "Chavvi", "Kavita", "Vinita", "Ravindra", "Mahendra"];

// returns a string with elements of the array separated by commas
// let newArray3 = myList.toString()
// console.log(newArray3)

//outPut
//vinay,vijay,vikash,Lalit,Sanjeev,Chavvi,Kavita,Vinita,Ravindra,Mahendra



//JavaScript Array pop()

//The pop() method removes the last element from an array and returns that element.

// const myList = ["vinay", "vijay", "vikash", "Lalit", "Sanjeev", "Chavvi", "Kavita", "Vinita", "Ravindra", "Mahendra"];
// const removeItem = myList.pop()
// console.log(removeItem)
//Mahendra

//*************** JavaScript Array shift() 
//The shift() method removes the first element from an array and returns that element.
// const myList = ["vinay", "vijay", "vikash", "Lalit", "Sanjeev", "Chavvi", "Kavita", "Vinita", "Ravindra", "Mahendra"];
// const removeFirstItem = myList.shift()
// console.log(removeFirstItem)

//output of above code is 

// vinay - it remove First item of an array


// ******** JavaScript Array push() 
//The push() method adds zero or more elements to the end of the array.

// const myList = ["vinay", "vijay", "vikash", "Lalit", "Sanjeev", "Chavvi", "Kavita", "Vinita", "Ravindra", "Mahendra"];

// const myList2 = myList.push("Divya")
// console.log(myList2)
// // outPut - 11
// console.log(myList)

// [
//     'vinay',    'vijay',
//     'vikash',   'Lalit',
//     'Sanjeev',  'Chavvi',
//     'Kavita',   'Vinita',
//     'Ravindra', 'Mahendra',
//     'Divya'
//   ]


//add in new item in my original list


//***** ******  JavaScript Array unshift()

// const myList = ["vinay", "vijay", "vikash", "Lalit", "Sanjeev", "Chavvi", "Kavita", "Vinita", "Ravindra", "Mahendra"];

//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

// console.log(myList.unshift("Alabhya"))
// console.log(myList)

//here add one element starting of an array 

// [
//     'Alabhya',  'vinay',
//     'vijay',    'vikash',
//     'Lalit',    'Sanjeev',
//     'Chavvi',   'Kavita',
//     'Vinita',   'Ravindra',
//     'Mahendra'
//   ]

// *********** JavaScript Array splice()
//The splice() method modifies an array (adds, removes or replaces elements).

// const myList = ["vinay", "vijay", "vikash", "Lalit", "Sanjeev", "Chavvi", "Kavita", "Vinita", "Ravindra", "Mahendra"];

//The syntax of the splice() method is:
//arr.splice(start, deleteCount, item1, ..., itemN)

//splice() Parameters
// 1. start - The index from where the array is changed.
// 2. deleteCount (optional) - The number of items to remove from start.
// 3. item1, ..., itemN (optional) - The elements to add to the start index. If not specified,

// * splice() will only remove elements from the array.

// replace 1 element from index 4 by 13

// let removeElem = myList.splice(4, 1, "Viaan")
// console.log(removeElem)
//Returns an array containing the deleted elements.
//[ 'Sanjeev' ]
// console.log(myList)
//Note: The splice() method changes the original array.
//here replace sanjeev to viaan i my original list 

// [
//     'vinay',    'vijay',
//     'vikash',   'Lalit',
//     'Viaan',    'Chavvi',
//     'Kavita',   'Vinita',
//     'Ravindra', 'Mahendra'
//   ]

//********** JavaScript Array lastIndexOf()
//The lastIndexOf() method returns the index of the last occurrence of a specified element in the array.
//The syntax of the lastIndexOf() method is: arr.lastIndexOf(searchElement, fromIndex)

// const myList = ["vinay", "vijay", "vikash", "Lalit", "Sanjeev", "Chavvi", "Kavita", "Vinita", "Ravindra", "Mahendra"];

// let my = myList.indexOf("Vinita")
// console.log(my)
//it give out put - 7 which is index of "vinita" element  search index number of specific element


/// ******** JavaScript Array of() Method

// let alphabets = Array.of("A", "B", "C");
// console.log(alphabets)  // [ 'A', 'B', 'C' ]



/// ******** JavaScript Array slice()
// The slice() method returns a shallow copy of a portion of an array into a new array object.

// const myList = ["vinay", "vijay", "vikash", "Lalit", "Sanjeev", "Chavvi", "Kavita", "Vinita", "Ravindra", "Mahendra"];

//// create another array by slicing numbers from index 3 to 5

// let newArray = myList.slice(3, 6)
// console.log(newArray)

// new array come with - [ 'Lalit', 'Sanjeev', 'Chavvi' ]



/// ***************** JavaScript Array findIndex()

//The findIndex() method returns the index of the first array element that satisfies the provided test function or else returns -1.

// const myList = ["vinay", "vijay", "vikash", "Lalit", "Sanjeev", "Chavvi", "Kavita", "Vinita", "Ravindra", "Mahendra"];

// function that returns startWith V
// function Vstart(element){
//     return element.startsWith("v")
// }

// let myAnotherList = myList.findIndex(Vstart)
// console.log(myAnotherList)
// 0 it come 



/// ***************** JavaScript Array find()

//The find() method returns the value of the first array element that satisfies the provided test function.

// const myList = ["vinay", "vijay", "vikash", "Lalit", "Sanjeev", "Chavvi", "Kavita", "Vinita", "Ravindra", "Mahendra"];

// function that returns startWith V
// function Vstart(element){
//     return element.startsWith("v")
// }

//find() Syntax
//arr.find(callback(element, index, arr),thisArg)

// let myAnotherList = myList.find(Vstart)

// console.log(myAnotherList)
// give out put with value - vinay

//Example 2: find() with Object elements

// const team = [
//     { name: "Bill", age: 10 },
//     { name: "Linus", age: 15 },
//     { name: "Alan", age: 20 },
//     { name: "Steve", age: 34 },
//   ];

//   function isAdult(member) {
//     return member.age >= 18;
//   }

//   console.log(team.find(isAdult)); // { name: 'Alan', age: 20 }


/// ************* JavaScript Array includes()

//The includes() method checks if an array contains a specified element or not.

// const myList = ["vinay", "vijay", "vikash", "Lalit", "Sanjeev", "Chavvi", "Kavita", "Vinita", "Ravindra", "Mahendra"];

//includes() Syntax
//arr.includes(valueToFind, fromIndex)
//The includes() method is case sensitive
// let check = myList.includes("vinay")
// console.log(check) 

// value found so give - true

/// *************** Javascript Array reduceRight()



// const myList = ["vinay", "vijay", "vikash", "Lalit", "Sanjeev", "Chavvi", "Kavita", "Vinita", "Ravindra", "Mahendra"];

// not understand 

/// **** Javascript Array reduce()
// The reduce() method executes a reducer function on each element of the array and returns a single output value.

// const myNumber = [3, 5, 7, 5, 8, 9]
// console.log(myNumber)

// function sumAll(a, b){
//     return a +b;
// }

// let total = myNumber.reduce(sumAll)
// console.log(total)

// 37  it is sum of all element in muNumber Array



/// ******* Javascript Array filter()

//The filter() method returns a new array with all elements that pass the test defined by the given function.


// const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // function to check even numbers

// function evenCheck(number){
//     if(number % 2 == 0)
//         return true;
//     else
//         return false
// }


/// *************** Javascript Array filter()

//The filter() method returns a new array with all elements that pass the test defined by the given function.


const myList = ["vinay", "vijay", "vikash", "Lalit", "Sanjeev", "Chavvi", "Kavita", "Vinita", "Ravindra", "Mahendra"];

//function 
// function Vstart(element){
//         return element.startsWith("v")
//     }

//     //create new array with element start with "v " letter

//     let StartV = myList.filter(Vstart)
//     console.log(StartV)

//     // return - [ 'vinay', 'vijay', 'vikash' ]


///********  JavaScript Array map()

//The map() method creates a new array with the results of calling a function for every array element.


// const newNumber = [2, 4, 6, 8, 10]

// function square(number){
//     return number * number
// }

// let sqaureNumber = newNumber.map(square)
// console.log(sqaureNumber)


//[ 4, 16, 36, 64, 100 ]



/// ******* JavaScript String Methods

// Extracting String Parts

// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)




//JavaScript String slice()

// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: start position, and end position (end not included).

// let text = "Apple, Banana, Kiwi";

// let part = text.slice(0, 5)
// console.log(part) // Apple  - index from 0 to 4, (0, 5)end position (end not included)

//If we omit the second parameter, the method will slice out the rest of the string:

// let part = text.slice(7);
//console.log(part) //Banana, Kiwi  , include 7 index position and rest of text given

//If a parameter is negative, the position is counted from the end of the string:
// let part = text.slice(-5); // Kiwi
// let part = text.slice(-12); //Banana, Kiwi
// console.log(part) 

//This example slices out a portion of a string from position -12 to position -6:

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12, -6); //Banana
// console.log(part)


/// ****** JavaScript String substring()
//substring() is similar to slice().

//The difference is that start and end values less than 0 are treated as 0 in substring().

// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7, 13);
// console.log(part)

/// *************** JavaScript String substr()
// The difference is that the second parameter specifies the length of the extracted part.The difference is that the second parameter specifies the length of the extracted part.
// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7, 6); //Banana
// let part = str.substr(2, 5); //ple  - it start with index number 2 and take length 5
// console.log(part) 

/// ******** Replacing String Content

//The replace() method replaces a specified value with another value in a string:


// let text = "I am Learn JavaScript";
// let newText = text.replace("JavaScript", "React");
// console.log(newText)  // I am Learn React

//Note
// The replace() method does not change the string it is called on.

// The replace() method returns a new string.

// The replace() method replaces only the first match

// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

//Regular expressions are written without quotes.


//JavaScript String ReplaceAll()




/// ******* JavaScript String concat()

//concat() joins two or more strings:

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2); //Hello World

// console.log(text3)


//Note

// All string methods return a new string. They don't modify the original string.

// Formally said:

// Strings are immutable: Strings cannot be changed, only replaced.


//JavaScript String trim()


//The trim() method removes whitespace from both sides of a string:


// let text1 = "      Hello World!      ";
// let text2 = text1.trim(); //Hello World!

// console.log(text2)


//JavaScript String trimStart()

//ECMAScript 2019 added the String method trimStart() to JavaScript.

//The trimStart() method works like trim(), but removes whitespace only from the start of a string.

// let text1 = "     Hello World!     ";
// let text2 = text1.trimStart();
// console.log(text2)   // Hello World!   

// JavaScript String trimEnd()

// ECMAScript 2019 added the string method trimEnd() to JavaScript.

// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

// let text1 = "     Hello World!     ";
// let text2 = text1.trimEnd();
// console.log(text2) 

// JavaScript String Padding
// ECMAScript 2017 added two new string methods to JavaScript: padStart() and
// padEnd() to support padding at the beginning and at the end of a string.

/// ******* JavaScript String padStart()

// The padStart() method pads a string from the start.

// It pads a string with another string (multiple times) until it reaches a given length.


//Example 
//Pad a string with "0" until it reaches the length 4:

// let text = "5";
// let padded = text.padStart(4,"0");
// console.log(padded)   // 0005


// JavaScript String padEnd()


// The padEnd() method pads a string from the end.

// It pads a string with another string (multiple times) until it reaches a given length.

// let text = "5";
// let padded = text.padEnd(4,"0");  
// console.log(padded)  //5000


// Extracting String Characters

// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]

//JavaScript String charAt()

// The charAt() method returns the character at a specified index (position) in a string:


// let text = "HELLO WORLD";
// let char = text.charAt(0);
// console.log(char)

// JavaScript String charCodeAt()

// The charCodeAt() method returns the unicode of the character at a specified index in a string:

// The method returns a UTF-16 code (an integer between 0 and 65535).

// let text = "HELLO WORLD";
// let char = text.charCodeAt(0);    //72
// console.log(char)


// Converting a String to an Array

//JavaScript String split() 

// A string can be converted to an array with the split() method:

// let text = "my name vinay and learn JavaScript"

// let text1 = text.split(",")    // Split on commas
// let text2 = text.split(" ")    // Split on spaces
// let text3 =text.split("|")    // Split on pipe
// console.log(text1)
// console.log(text2)
// console.log(text3)

// [ 'my name vinay and learn JavaScript' ]
// [ 'my', 'name', 'vinay', 'and', 'learn', 'JavaScript' ]
// [ 'my name vinay and learn JavaScript' ]

/// Date 16-10-2023

//// ************  String Search Methods *********** /////
// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()



//// ******  JavaScript String indexOf()

// The indexOf() method returns the index (position) the first occurrence of a string in a string:

// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");   // it on 7th position index
// console.log(index)  // 7


// JavaScript String lastIndexOf()
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

// let text = "Please locate where 'locate' occurs!";
// let index = text.lastIndexOf("locate");   // 21 last occarnce of "locate"
// console.log(index)  

//Both indexOf(), and lastIndexOf() return -1 if the text is not found:


// Both methods accept a second parameter as the starting position for the search:

// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate", 15);
// console.log(index)

// The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, 
// the search starts at position 15, and searches to the beginning of the string.


/// *******  JavaScript String search() ******** ///

// The search() method searches a string for a string (or a regular expression) and returns the position of the match:

// let text = "Please locate where 'locate' occurs!";

// console.log(text.search("locate"))    // 7


// The two methods are NOT equal. These are the differences:

// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).



///// *************** JavaScript String match() ************///

// The match() method returns an array containing the results of matching a string against a string (or a regular expression).

// let text = "The rain in SPAIN stays mainly in the plain";
// let myMatch =text.match("ain");

// console.log(myMatch)

// [
//     'ain',
//     index: 5,
//     input: 'The rain in SPAIN stays mainly in the plain',
//     groups: undefined
//   ]


///  ****************  JavaScript String matchAll() *************** // 

// The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).



/// **********  JavaScript String includes() ********** ///

// The includes() method returns true if a string contains a specified value.

// Otherwise it returns false.

//Check if a string includes "world":

// let text = "Hello world, welcome to the universe.";
// text.includes("world");
// console.log(text.includes("world"))   //true


/// ************* JavaScript String startsWith() *********** ///

// The startsWith() method returns true if a string begins with a specified value.

// Otherwise it returns false:


// let text = "Hello world, welcome to the universe.";
// text.startsWith("Hello");
// console.log(text.startsWith("Hello")) // true


//A start position for the search can be specified: 

