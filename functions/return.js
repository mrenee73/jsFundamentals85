
let hi = () => {
    
    //  1
    return 'hi';

    //   2        3
let newName = hi();

console.log(newName);

}


// 1: The keyword that brings our data out of our function
// 2: We need a new variable to hold the value of the return.
// 3: When called, the function becomes the value of the return. 

let math = (numOne, numtwo) => {
    let total = numOne + numtwo;

    return total;
}

let sum = math(1,2);
let sum1 = math(5293, 12394);
// let sum3 = math(z, a);

console.log(sum);
console.log(sum1);
// console.log(sum3);

let calculator = (bill, tip) => {
    let total= bill + tip;
    let tip= bill*= .20;

    return total;
}
/*
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/


let check = (bill, tip) => {
    let tipAmt = bill * tip;
    let final = bill + tipAmt;


    return final;
}

let payment = check(250, .2);
console.log(payment)