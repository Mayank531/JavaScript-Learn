const myObj = {
    name : "Suraj",
    age : 13,
    message : function hello(){
        console.log(`Hello ${this.name}`);
    },
    isLogged : true
}
// myObj.message()
// console.log(this);


function hello(){
    fname = "Tanmay";
    console.log(this.fname);    //=>   If we declare the fname with let, then this.fname doesn't work. Else only if 
    console.log(this);          //     only declared like fname="Tanmay" works with this.fname
}
// hello()
// console.log(this);


// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(5,2));

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(5,5));
