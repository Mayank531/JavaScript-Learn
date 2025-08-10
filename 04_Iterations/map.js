const myMap = new Map()

myMap.set(+91,'India')
myMap.set('+234','Nigeria')

console.log(myMap);

for (const [key,value] of myMap) {
    console.log(key,value);
    
}