myArr=[1,2,3,4,5,6,7,8,9,10]

// Map
// const intoThree = myArr.map((nums,index)=> {
//   return nums*3 + index
// })
// console.log(intoThree);

// Filter
// const moreThanTwo = myArr.filter((nums)=> nums>2)
// console.log(moreThanTwo);

// Reduce
// const sum = myArr.reduce((accu,curr,index)=>{
//   console.log(`Accumulator: ${accu} and Current: ${curr}`);
//   return accu+curr
// },0)
// console.log(sum)

//this concept
// fname = 'kadam'
// myObj = {
//   fname:'Rakesh',
//   fun1 : ()=> {console.log(this.fname)},
//   fun2(){
//     console.log(this.fname)
//   }
// }
// myObj.fun1()
// myObj.fun2()


//    Closure
function fun1(){
  function fun2(num){
    console.log('hello',num);
    
  }
  return fun2()
}

fun1()(2)
