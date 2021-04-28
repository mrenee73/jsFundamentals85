/* 
Switch Statements execute a block of code depending on different cases.
Often used with a break or a default keyword (both Optional) 
-break: breaks out of the swtich block.
-default: specifies some code to run if there is no case match. */


let officeCharacter = "Jim";

switch(officeCharacter) {
    case 'Michael':
        console.log("My mind is gong a mile an hour");
        break;

    case 'Dwight':
        console.log("Perfectenschlag!");
        break;

    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica");
        break;

    default: 
    console.log(officeCharacter);

}
let dessertMenu = 'tarte';

switch (dessertMenu) {
    case "pie":
        console.log('Pie, pie, me oh my!');
        break;

    case "cake":
        console.log("cake is great");
break;

    case "ice cream":
        console.log("i scream for ice cream");
break;
    default:
    console.log("not on the menu");
}