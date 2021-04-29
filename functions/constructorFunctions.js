let person1 = {
    name: 'macy',
    age: 24, 
    canVote: true
}

let person2 = {
    name: 'Jeremy',
    age: 15,
    canVote: false
}

let person3 = {
    name: 'Tyler',
    age: 38,
    canVote: true
}

//  FUNCTION NAME IS CAPITOLIZED
// the "this" keyword gives us the ability to refer back to whateer called or activates it. 

function Person(name, age, canVote) {
    this.name= name;
    this.age= age;
    this.canVote= canVote;
}

console.log(typeof Person);

let person4 = new Person('jason', 80, true);

// the 'new' word is saying that there is a new 

console.log(Person);