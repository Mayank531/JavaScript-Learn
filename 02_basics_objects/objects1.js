const symb = Symbol("key1")

let myObj = {
    name : "Omkar",
    age : 25,
    mail : "om@gmail.com",
    greet : function dynamic1(){
    console.log(`Hello user, ${this.name}`);
    
    },
    [symb] : "key1"
};

// console.log(typeof myObj);
// console.log(myObj);

// console.log(myObj.name);
// console.log(myObj["name"]);

// This is used to freeze the object so that we cant add or update the object
//Object.freeze(myObj)

// myObj.greetings = function static1(){
//     console.log("Hello user, user1 ")
// }

// myObj.greet = function dynamic1(){
//     console.log(`Hello user, ${this.name}`);
    
// }


myObj.greet()

console.log(myObj)