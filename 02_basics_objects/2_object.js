const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {7:"c",9:"d"}

// let obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4===obj1)  // =>  True if Object.assign(obj1,obj2,obj3)
//console.log(obj4);

obj4 = {...obj1,...obj2,...obj3}            //=> Spreading
// console.log(obj4);

console.log(Object.keys(obj4))    //=> Gives the all keys as an array
console.log(Object.values(obj4))

console.log(obj4.hasOwnProperty("10"))