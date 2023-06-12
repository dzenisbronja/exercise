let log = console.log;
let myInt = 123;
let mySrting = "456";
let address = "456 Main Ave.";
let myFloat = 123.345432;
let mySrtingFloat = "322.243432.43.32";
let cost = "12.99 per box";

/////////////////////////////////////////////// +

// console.log(typeof +mySrting); //number
// console.log(+mySrting); //456

// console.log(typeof +address); //number
// console.log(+address); //NaN

// console.log(typeof +mySrtingFloat); //number
// console.log(+mySrtingFloat); //NaN

// console.log(typeof +cost); //number
// console.log(+cost); //NaN

// ///////////////////////////////////////////////////////// myString
// console.log(typeof mySrting); //string

// console.log(typeof parseFloat(mySrting));
// console.log(parseFloat(mySrting)); // 456 =>number

// console.log(typeof parseInt(mySrting));
// console.log(parseInt(mySrting)); // 456 =>number

// console.log(typeof Number(mySrting));
// console.log(Number(mySrting)); // 456 =>number

// /////////////////////////////////////////////////////// address
// console.log(typeof address); //string

// console.log(typeof parseFloat(address)); //ako se na prvom mestu nadje slovo NaN
// console.log(parseFloat(address)); //456 =>number

// console.log(typeof parseInt(address)); //ako se na prvom mestu nadje slovo NaN
// console.log(parseInt(address)); //456 =>number

// console.log(typeof Number(address));
// console.log(Number(address)); //NaN  =>number

// ///////////////////////////////////////////////////// myFloat
// console.log(typeof myFloat); //number

// console.log(typeof parseFloat(myFloat));
// console.log(parseFloat(myFloat)); //123.345432 =>number

// console.log(typeof parseInt(myFloat));
// console.log(parseInt(myFloat)); //123 =>number

// console.log(typeof Number(myFloat));
// console.log(Number(myFloat)); //123.345432 =>number

// ////////////////////////////////////////////////// mySrtingFloat

// console.log(typeof mySrtingFloat); //string

// console.log(typeof parseFloat(mySrtingFloat)); //vraca ceo broj i decimale posle prve tacke
// console.log(parseFloat(mySrtingFloat)); //322.243432 =>number

// console.log(typeof parseInt(mySrtingFloat)); //ako pocne sa slovom NaN, float takodje
// console.log(parseInt(mySrtingFloat)); //322 =>number

// console.log(typeof Number(mySrtingFloat)); //Vratice vrednost broja float ako nema vise od jedne tacke
// console.log(Number(mySrtingFloat)); // NaN => number

// //////////////////////////////////////////////// cost

// console.log(typeof cost); //string

// console.log(typeof parseFloat(cost)); //ako stavimo slovo prvo NaN
// console.log(parseFloat(cost)); //12.99 =>number

// console.log(typeof parseInt(cost)); //ako stavimo slovo prvo NaN
// console.log(parseInt(cost)); //12 =>number

// console.log(typeof Number(cost));
// console.log(Number(cost)); //NaN =>number
