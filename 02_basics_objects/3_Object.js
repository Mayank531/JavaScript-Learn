menu = {
    dish : "Pohe",
    price:60,
    serves:1
}

//console.log(menu.dish);     => Pohe

//const {dish} = menu     => same work done by below line
const {dish : di} = menu;    // Known as destructuring
console.log(di);

