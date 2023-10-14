
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