// * first pass: Stores our variales declarations (essentially says, "hey, I know a variable of x is defined, so let me store that in my memory so I know tis there")) but does nto asign them their values.

// anything that needs to be hoisted, is hoisted
// second pass: assigns the values to our variables and executes any hoisted source code 


console.log(myName);
let myName = 'Eric';


b() 


function b()  (

    console.log("I have been hoisted");
)