

let people = [
    {name: "aaron",age: 65},
    {name: "beth",age: 2},
    {name: "cara",age: 13},
    {name: "daniel",age: 3},
    {name: "ella",age: 25},
    {name: "fin",age: 1},
    {name: "george",age: 43},
]






//using normal function 
let toperson = people.filter(function(list)  {
   return list.age <= 3
})

//using fat arrow function

let toperson1 = people.filter((item) => {
    return item.age <= 3
})

//now more shortcut
let toddlers = people.filter(person => person.age <= 3)

//console.log(toddlers)
// console.log(toperson)
console.log(toperson1)