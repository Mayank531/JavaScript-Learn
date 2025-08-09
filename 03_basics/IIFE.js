// IIFE - "Immediately Invoked Function Expression"

(function world(){
    console.log("Hello world")
})();                                 // this ";" semi-colon is must to write 2 or more iife in one program 

(()=> {
    console.log("Hello Arrow");

})();                                       // iife without parametrs 
 
((name)=> {
    console.log(`Hello ${name}`)
})("User1")                                 // iife with parameters 