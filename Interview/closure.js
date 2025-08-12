// function add(num){
//   return function (n){
//     console.log(num+n);
//   }
// }

// var closure = add(6)
// closure(21)

view = 'Roadies'
function once(nums){
  called=0
  return function(){
    if (called===0){
      console.log('Subscribe to' + view);
      called++;
    }else{
      console.log("Already subscribed");
    }
  }
}

call = once(2)
call()
call()
call()
call()