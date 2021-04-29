/* let vs Let


let and let: operate the same but behave differently 
const: stays the same and doesn't change. cannot be re-expressed

-let is always scoped to the nearest function block;
let is scoped to the nearest enclosing block

*/

var x= 12;

function varTest() {
    var x = 33;
    if (1==1) {
        var x =45; 
        console.log(x);     
    }

    console.log(x);
}

varTest();
console.log(x);