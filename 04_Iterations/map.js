myArr = [1,2,3,4,5,6,7,8,9,10]

//sqArr = myArr.map((nums)=>nums**2)

// ++++++++++++++++++++++++++====     Chaining 

sqArr = myArr.map((nums)=> nums*10).map((nums)=> nums+3).filter((nums)=> nums%3==0)
console.log(sqArr);