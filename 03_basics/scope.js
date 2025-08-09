
function firstName(){
    lastName1 = "Patil"
    function lastName(){
        firstName1 = "Ruturaj"
        console.log(firstName1,lastName1);

    }

    console.log(lastName1);
    //console.log(firstName1);  // => Throws Error as the firstname1 variable does not have scope here
    lastName()
      
    
}
// console.log(lastName1);       // => Again here lastname1 does not has the scope here as its declared in the function
firstName()