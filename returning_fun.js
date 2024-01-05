
// this script is returnig Function


function myFun(){
    return function (){
        console.log("this is Returning Function")
    }
}


//call function
//there is two way to call this function

// 1.
myFun()();

//Second way to save function as variable

// 2.
const myFunction = myFun();
//now call myfun1
