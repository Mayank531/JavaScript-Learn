const myArray = ["c", "cpp", "python", "java", "dart","go", "cobol"]
i="1"
// myArray.forEach( function (item){
//     console.log(item+i);
//     i++
//  } )

//Using aarrow function
// myArray.forEach( (item) => console.log(item)
// )


// function lang(items){
//     console.log(items);
// }
// myArray.forEach(lang)


myArray.forEach((items,inde,arr)=> {
    console.log(items,inde,arr);
    
})