/*

   1         2
let hi = () => {
    console.log('hi');
}

1: We need to set the fat arrow function to a variable. 
2: We use the 'fat arrow' to signify its a function. 

-arrow funtions (fat arrow functions) introduced in ES6
    a more concise way to write a function expressions *not declarations
    -arrow functions do not get hoisted. 

2 types of arrow funtions
    -concise body
    -block body
*/

// concise body


// let hi =() => console.log('hi');

// hi();


// // block body

// let hi =() => {
//     console.log('hi');
// }

let apples = x => console.log(`there are ${x} apples.`);
apples(10);