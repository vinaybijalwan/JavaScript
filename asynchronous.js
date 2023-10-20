


// Functions running in parallel with other functions are called asynchronous

// A good example is JavaScript setTimeout()

//Callback function 

// function myfunction() {
//     console.log("Learn React Js")
// }

// setTimeout(myfunction, 1000)

// In the example above, myFunction is used as a callback.

// myFunction is passed to setTimeout() as an argument.

// 1000 is the number of milliseconds before time-out, so myFunction() will be called after 1 seconds.

// Note : When you pass a function as an argument, remember not to use parenthesis.



// Waiting for Intervals:  using the JavaScript function setInterval()



const myTime = () => {
    let d = new Date();
    console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds())
}

setInterval(myTime, 1000);