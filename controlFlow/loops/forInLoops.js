/* For In Loops

-great for interating over values in an object
-Properties in objects are whats called enumerable 
-enumerable just means 'countable';

*/

let student = {
    name: 'jake from state farm',
    awesome: true,
    degree: "insurance sales",
    age: 98
};

for(item in student) {
    console.log(item);
    console.log(student[item]);
};