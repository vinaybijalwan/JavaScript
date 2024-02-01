// Concept of reduce 
//Date 01-02-2024


//an array of numbers and you want to get the sum, you can write a
//reducer function and pass it to reduce

let numbers = [1, 2, 3]

let sum = numbers.reduce((total, number) => {
    return total + number
}, 0)

console.log(`the sum of numbers ${sum}`)



//useReducer

// useReducer((state, action) => {
//     return state + action;
//   }, 0);


