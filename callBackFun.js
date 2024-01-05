//this Script to iderstand call back function

// const interViewquestion = (name) => {
//     if(name === "vinay"){
//         return function (topic) {
//             console.log(`hi, ${name}, What is ${topic}, explain it`)
//         }
//     }
// }


// interViewquestion("vinay")("Linux")



const interViewquestion = (name) => {
    if(name === "vinay"){
        return function (topic) {
            console.log(`hi, ${name}, What is ${topic}, explain it`)
        }
    }if(name=== "Durgesh"){
        return function (topic) {
            console.log(`hi, ${name}, What is ${topic}, explain it`)
        }

    }if (name === "Nehal"){
        return function (topic) {
            console.log(`hi, ${name}, What is ${topic}, explain it`)
        }
    }
}

interViewquestion("Nehal")("Pico Lisp")
interViewquestion("vinay")("R data.table")