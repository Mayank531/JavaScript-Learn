// myArr = [13,5,64,24,55,100]

// for (const element of myArr) {
//     console.log(element);
    
// }

// strName = "Khalnayak"
// for (const element of strName) {
//     console.log(element);
// }


myObj = {  
    firstName : "Vinod",
    lastName : "Chopra",
    age : 72,
    isProducer : true
}
// for (const key,val of myObj) {     
//     console.log(key);                      =>  Cannot iterate over an Object using for...of
// }                                            instead following can be used

for (const key in myObj) {
    console.log(key);
    
}

// for (const key of Object.keys(myObj)) {
//     console.log(key);
    
// }