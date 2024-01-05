//closure function 




// const outerfun = (a) => {
//     let b = 10;
//     const innerfun = () => {
//         sum = a + b;
//         console.log(`The sum of two umber is ${sum}`)
//     }
//     innerfun() // call inner function 
// }

//call outer function
// outerfun(10)


const outerfun = (a) => {
    let b = 10;
    const innerfun = () => {
        sum = a + b;
        console.log(`The sum of two umber is ${sum}`)
    }
    return innerfun // return inner function 
}

//now save oterfun as in variable 

const inner = outerfun(10);
console.dir(inner)

inner()