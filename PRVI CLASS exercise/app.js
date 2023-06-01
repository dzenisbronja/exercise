// switch se koristi kada imamo/zelimo tacnu vredsnost,
//if kada je vece ili manje, switch je brzi i koristimo ga kod mnogo uslova

/*let c = 8

switch (c) {
  case 3:
    console.log ("b je 3");
    break;
   case 4:
    console.log ("b je 4");
    break;
   case 5:
    console.log ("b je 5");
    break;
   default:
    console.log("ovo je preostalo")
    break;
    }*/

//skraceni if else

/*let d = 10;

 d > 5 ? console.log("vece od 5") : console.log ("manje od 5");*/

// petlje za izbegavanje ponavljanja koda
//-- smanjuje za po 1, ++ dodaje za po 1

/*for (let v = 0; v < 10; v++) {
  console.log("ovo je petlja", v)
}


let a = 5;

for (i = 0; i < 10; i++) {
  console.log(a, "default", i);
  i += 1;
  console.log (i, "petlja" );
  console.log(a);
}

//let k = prompt ("unesi nesto")
//console.log (+k);
//console.log (typeof +k);
//"3", 3*/

// let brojOkretanja = prompt("Unesi broj okretanja petlje: ");

/*let a = 10;
for (let i = 0; i < 2; i++) {
    console.log("nesto", i);
    a += +prompt ("dodaj broj");
    console.log(a, i);
}*/

// +"3"
//console.log(a);
// "0" + +"5" + +"5" + +"5"
// 0+5+5+5
// let nekiBroj = "5" + "tri";
// console.log(nekiBroj);

/*for (let i = 0; i < 100; i++) {
  if (i % 3 ===0 && i % 5 ===0) {
    console.log ("fiz-buz", i);
  } else if (i % 5 ===0) {
    console.log ("baz", i); 
  } else if (i % 3 ===0) {
    console.log ("fiz", i);
  }  else {
    console.log(i)
  }
}*/

/*for (let i = 0; i < 20; i++) {
  if (i % 2=== 0) {
    console.log (i *7 + 20);
  } else {
    console.log (i * 5 + 20);
  }
}*/

// a = 0; b

// while (a !==22 ) {
//   a = +prompt ("izaberi neki broj 1-100");
//   if (a === 22) {
//     console.log ("cestitamo dobili ste dedu", a);
//   } else {
//     console.log ("vise srece drugi put", a)
//   }
//  }

//a = 3

/*while (a < 10) {
  console.log ("website", a);
  a++;
}*/

// let a = Math.floor(Math.random() * 100) +1;
//  let guess;

// do {
//   guess = prompt ("unesite neki broj od 1-100");
//   if(+guess > a) {
//     alert("probaj manji broj");
//   } else if (+guess < a) {
//     alert("probaj veci broj")
//   } else {
//     alert("pogodili ste broj")
//   }
// } while (guess !== a)

// let a = Math.floor(Math.random() * 100) +1;
// let guess;

// while (guess !==a) {
//   guess = prompt ("unesi neki broj od 1-100");
//   if (+guess < a) {
//     alert ("probaj veci broj");
//   } else if (+guess > a) {
//     alert ("probaj manji broj");
//   } else {
//     alert ("pogodili ste broj")
//   }
// }

////////////////////////////function///////////////////////////////////////

// function obrniOkreni (prva, druga, treca) {
//   console.log (prva * druga - treca)
// }

// obrniOkreni(30,30,30)
// obrniOkreni(20,30,30)

// function  kvadrat(number) {
//   return number * number
// }

// console.log(kvadrat(4))
// console.log(kvadrat(43))

// function razlika(number1, number2) {
//   if(number1 > number2) {
//     return number1 - number2
//   } else if(number2 > number1) {
//     return number2 - number1
//   } else {
//     return 'uneli ste dva ista broja, nece da moze'
//   }
// }

// console.log(razlika(3, 7))
// console.log(razlika(3, 8))
// console.log(razlika(7, 7))

//nameless fukckija

// const zbir = function() {
//   return "ovo je nameless function"
// }

// console.log(zbir());

// const celsiusToFahrentheit= function(number) {
//   return number * 1.8 + 32
// }

// console.log(celsiusToFahrentheit(303));

// const farentheitToCelsius = function(number) {
//   return (number - 32) / 1.8
// }

// console.log(farentheitToCelsius(86));

//////////////////////////////niz//////////////////////////////////
// let nekiDrugiNiz = [3, 10, 16, "Nesto", true, false, undefined, NaN, "bilosta"];

// console.log(nekiDrugiNiz[0]);
// console.log(nekiDrugiNiz[1]);
// console.log(nekiDrugiNiz[2]);
// console.log(nekiDrugiNiz[3]);
// console.log(nekiDrugiNiz[4]);
// console.log(nekiDrugiNiz[5]);
// console.log(nekiDrugiNiz[6]);
// console.log(nekiDrugiNiz[7]);
// console.log(nekiDrugiNiz[8]);

// console.log(nekiDrugiNiz.length);

// for(let i = 0; i < 9; i++) {
//   console.log(nekiDrugiNiz[i]);
// }

// for(let i = nekiDrugiNiz.length - 1; i >= 0; i--){
//   console.log(nekiDrugiNiz[i], i)
// }

// let ime = "nekoime";
// ime = ["n", "e", "k", "o", "i", "m", "e"];
// console.log(ime.length);
// console.log(ime);

// for(i = 0; i < ime.length; i++){
//   console.log(ime[i]);
// }

// for(i = ime.length -1; i >= 0; i--) {
//   console.log(ime[i]);
// }

//niz kola, napred i nazad, prikazi samo parne ili neparne

// let cars = ["bmw", "audi", "alfa", "mercedes", "vw"];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

// for(let i = cars.length -1; i >= 0; i--){
//   console.log(cars[i]);
// }

// for(i = 0; i < cars.length; i++) {
//   if(i % 2 ===0){
//     console.log(cars[i]);
//   }
// }

// for(i = cars.length -1; i >= 0; i--) {
//   if(i % 2 === 0) {
//     console.log(cars[i]);
//   }
// }

///////////////////////////////////////////////////////////////////////////////

//  let someArray = [3, 4, 53, 44, 66, 5];
//  let anotherArray = [34, ,435, 5433, 543, 243, 532, 52];
//  let anotherOne = [343, 54333, 5434, 636346, ,435, 5433, 543, 243, 532, 52];

//  function getMaxNumber(niz){
//   const duzinaNiza = niz.length;
//   let number = 0;

//   for (let i = 0; i < duzinaNiza; i++){
//     if(number < niz[i]) {
//       number = niz [i];
//     }
//   }
//   return number;
//  }

//  console.log(getMaxNumber(anotherArray))
//  console.log(getMaxNumber(someArray))
//  console.log(getMaxNumber(anotherOne))

// let matrica = [
//   [1, 2, 3], // 1
//   [4, 5, 6], // 2
//   [7, 8, 9], // 3
// ];

// for (let i = 0; i < matrica.length; i++) {
//   console.log(matrica[i][i]);
// }

// for (let i = 0; i < matrica.length; i++) {
//   console.log(matrica[i]);
//  }

//   console.log(matrica[0][1]);
//   console.log(matrica[2][2]);

// for (let i = 0; i < matrica.length; i++) {
//   for (let j = 0; j < matrica[i].length; j++) {
//     console.log(matrica[i][j]);
//   }
// }

// let matrica = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// function getMaxNumber(niz){
//   const duzinaMatrice = niz.length;
//   const duzinaNiza = niz[i].length;
//   result = niz[0][0];

//   for(let i=0; i < duzinaMatrice;  i++){
//     for(let j=0; j < duzinaNiza; j++){
//       if(result < niz[i][j]){
//         result = niz[i][j]
//       }
//     }
//   }
//   return result
// }

// console.log(getMaxNumber(matrica))

// let matrica = [
//   [23, 32, 423, 324],
//   [34, 234, 432, 323],
//   [89, 788, 687, 676]
// ]

// function getLowestNumber(arr){
//   let min = arr[0][0];

//   for(let i in arr){
//     for(let j in arr[i]){
//       if(min - arr[i][j] >= 0){
//         min = arr[i][j]
//       }
//     }
//   }
//   return min
// }

// console.log(getLowestNumber(matrica))

// function getLowestNumber(arr){
//   let min = Infinity

//   for(i=0; i<arr.length; i++){
//     for(j=0; j<arr[i].length; j++){
//       if(min > arr[i][j]){
//         min = arr[i][j]
//       }
//     }
//   }
//   return min
// }

// console.log(getLowestNumber(matrica))

// let prva = [
//   [23, 32, 423, 324],
//   [34, 234, 432, 323],
//   [89, 788, 687, 676, -2],
// ]

// let druga = [
//   [231, 232, 43, 34],
//   [2, 2334, 0, 32, 3],
//   [29, 4, 44, 376]
// ]

// let treca = [
//   [22313, 3233, 4223, 3224],
//   [3224, 2324, 4322, 32323],
//   [839, 2788, 62387, 6716]
// ]

// let glavna =[prva, druga, treca]

// function getLowestNumber(arr){
//   let min = Infinity

//   for(i=0; i<arr.length; i++){
//     for(j=0; j<arr[i].length; j++){
//       for(k=0; k<arr[i][j].length; k++){
//       if(min > arr[i][j][k]){
//         min = arr[i][j][k]
//       }
//     }
//   }
//   return min
// }
// }

// console.log(getLowestNumber(glavna))

// function getLowestNumber(arr){
//   let min = arr[0][0][0]

//   for(let i=0; i < arr.length; i++){
//     for(let j=0; j < arr[i].length; j++){
//       for(let k=0; k < arr[i][j].length; k++){
//         if(min-arr[i][j][k] >= 0){
//           min = arr[i][j][k]
//         }
//       }
//     }
//   }
//   return min
// }

// console.log(getLowestNumber(glavna))

// for (let i = 0; i < glavna.length; i++) {
//   for (let j = 0; j < glavna[i].length; j++) {
//     for(let k = 0; k < glavna[i][j].length; k++){
//         console.log(glavna[i][j][k])
//     }
//   }
// }

// let prva = [
//   [23, 32, 423, 324],
//   [34, 234, 432, 323],
//   [89, 788, 687, 676, -2],
// ]

// let druga = [
//   [231, 232, 43, 34],
//   [2, 2334, 0, 32, 3],
//   [29, 4, 44, 376]
// ]

// let treca = [
//   [22313, 3233, 4223, 3224],
//   [3224, 2324, 4322, 32323],
//   [839, 2788, 62387, 6716]
// ]

// let cetvrta = [
//   [23, 32, 423, 324],
//   [34, 234, 432, 323],
//   [89, 788, 687, 676, -2],
// ]

// let peta = [
//   [231, 232, 43, 34],
//   [2, 2334, 0, 32, 3],
//   [29, 4, 44, 376]
// ]

// let sesta = [
//   [22313, 3233, 4223, 3224],
//   [3224, 2324, 4322, 32323],
//   [839, 2788, 62387, 6716]
// ]

// let sedma = [
//   [23, 32, 423, 324],
//   [34, 234, 432, 323],
//   [89, 788, 687, 676, -2],
// ]

// let osma = [
//   [231, 232, 43, 34],
//   [2, 2334, 0, 32, 3],
//   [29, 4, 44, 376]
// ]

// let deveta = [
//   [22313, 3233, 4223, 3224],
//   [3224, 2324, 4322, -4, 32323],
//   [839, 2788, 62387, 6716]
// ]

// let sporedna =[prva, druga, treca]
// let drugaSporedna =[cetvrta, peta, sesta]
// let trecaSporedna =[sedma, osma, deveta]

// let glavna =[sporedna, drugaSporedna, trecaSporedna]

// function getLowestNumber(arr){
//   let min = Infinity

//   for(let i=0; i < arr.length; i++){
//     for(let j=0; j < arr[i].length; j++){
//       for(let k=0; k < arr[i][j].length; k++){
//         for( let l=0; l < arr[i][j][k].length; l++){
//           if(min > arr[i][j][k][l]){
//             min = arr[i][j][k][l]
//           }
//         }
//       }
//     }
//   }
//   return min
// }

// console.log(getLowestNumber(glavna))

// function getLowestNumber(arr){
//   let min = arr[0][0][0][0]

//   for(let i in arr){
//     for(let j in arr[i]){
//       for(let k in arr[i][j]){
//         for(let l in arr[i][j][k]){
//           if(min - arr[i][j][k][l] >=0){
//             min = arr[i][j][k][l]
//           }
//         }
//       }
//     }
//   }
//   return min
// }

// console.log(getLowestNumber(glavna))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const arrow = (number) => number * number;

// console.log(arrow(5))

// let array = [2, 3, 4, 23, 11, 324];

// const sumNumbers = (niz) => {
//   let start = 0;

//   for(let i = 0; i < niz.length; i++){
//     start += niz[i];
//   }
//   return start
// }

// console.log(sumNumbers(array))

// let nekiArray = [2, 3, 43, 54, 324];

// let vaki = [324, 3, 32, 45, 53, 23];

// // console.log(nekiArray)

// // nekiArray[0] = 2222;

// // console.log(nekiArray)

// const substitution = (niz) => {

//   for(let i = 0; i < niz.length; i++){
//     niz[0] = 3333;
//   }

//   return niz
// }

// console.log(substitution(nekiArray));

// console.log(substitution(vaki));

// //in Boolean context these values gonna be falsy

// const falsy = [
//   false,
//   undefined,
//   NaN,
//   null,
//   document.all,
//   0,
//   -0,
//   0n,
//   ""
// ];

//radi
// if([]){
//   console.log("pose")
//}

//ne radi
// if(0){
//   console.log("pose")
// }

//izabrace jednu od dve, bude li false (bilo sta od 9 gore navedenih) prva user ce biti unknown
// const name = data.name || "unknow user";

//ovo postaje tricky kod numbers values, ako imamo sledeci zadatak
// const playerOneScore = data.score || 5;
//ovde value 0 moze biti truthy value, ali je na ovaj nacin necemo doseci

//resenje za ovaj problem je nullish coalescing operator (??)
// const playerTwoScore = data.score ?? 5;
//on je koristi falsy check, on trazi 0 ili undefiend
//jedino ako je data.score 0 ili undefiend ici ce na 5, u suprotnom ce zadrzati valid score of 0

// score.name = 0;

// const playerThreeScore = data.score ?? 5;

/////////////////////////////////////////////////////////callback function/////////////////////

// function sayHello() {
//   console.log("hello")
// }

// function biggerOne(nekaFunkcija) {
//   nekaFunkcija()
//   console.log("dzenise")
//   console.log("hamza")
//   console.log("melisa")
//   nekaFunkcija()
// }

// biggerOne(sayHello)

// function sabiranje(a, b, c) {
//   return a * b * c
// }

// function biggerOne(someFunction) {
//   a = 3
//   b = 3
//   c = 3

//   return someFunction(a, b, c)
// }

// console.log(biggerOne(sabiranje))

// let someArray = [23, 5, 123, 54, 213, 54, 23, 123, 435, 123, 8];

// console.log(someArray)

// helperFunction = (a) => a + 20
// pomocnFunkcija = (a) => a * 100

// function biggerOne(niz, helper, pomocnik) {
//   let noviNiz = []
//   for(let i = 0; i < niz.length; i++) {
//     if(niz[i] % 2 === 0){
//       noviNiz.push(helper(niz[i]))
//     } else{
//       noviNiz.push(pomocnik(niz[i]))
//     }
//   }
//   return noviNiz
// }

// console.log(biggerOne(someArray, helperFunction, pomocnFunkcija))

// let matrica = [
//   [12, 34, 54],
//   [33, 223, 324],
//   [99, 32, 44]
// ]

// const helperFunction = (a) => a * a
// const pomocnaFunction = (a) => a / a

// const biggerOne = (niz, pomocnik, helper) => {
//   let noviNiz = []
//   for(let i = 0; i < niz.length; i++) {
//     for(let k = 0; k < niz[i].length; k++) {
//       if(niz[i][k] % 2 === 0){
//         noviNiz.push(helper(niz[i][k]))
//       }else{
//         noviNiz.push(pomocnik(niz[i][k]))
//       }
//     }
//   }
//   return noviNiz
// }

// console.log(biggerOne(matrica,pomocnaFunction, helperFunction))

//  function biggerOne(niz, pomocnik, helper) {
//   let novaMatica = []
//   for(let i = 0; i < niz.length; i++) {
//     for(let k = 0; k < niz[i].length; k++) {
//       if(niz[i][k] % 2 === 0) {
//         novaMatica.push(helper(niz[i][k]))
//       }else{
//         novaMatica.push(pomocnik(niz[i][k]))
//       }
//     }
//   }
//   return novaMatica
// }

/////////////////////////////////////////////////////////map mathod///////////////////////////////////////////

// const niz =[22, 33, 43, 543, 44, 423, 995]

// const kvadrat = niz.map((a) => a % 2 === 0 ? a * a : a / 2)

// console.log(niz)
// console.log(kvadrat)

// let matrica = [
//   [12, 34, 54],
//   [33, 223, 324],
//   [99, 32, 44],
//   [33, 41, 33],
//   [99, 3244, 34]
// ]

// const delilac = matrica.map((manjiNiz) =>
// manjiNiz.map((el) => el % 2 === 0 ? el * el : el - 1000))

// console.log(delilac)

// let prva = [
//   [23, 32, 423, 324],
//   [34, 234, 432, 323],
//   [89, 788, 687, 676, -2],
// ]

// let druga = [
//   [231, 232, 43, 34],
//   [2, 2334, 0, 32, 3],
//   [29, 4, 44, 376]
// ]

// let treca = [
//   [22313, 3233, 4223, 3224],
//   [3224, 2324, 4322, 32323],
//   [839, 2788, 62387, 6716]
// ]

// let cetvrta = [
//   [23, 32, 423, 324],
//   [34, 234, 432, 323],
//   [89, 788, 687, 676, -2],
// ]

// let peta = [
//   [231, 232, 43, 34],
//   [2, 2334, 0, 32, 3],
//   [29, 4, 44, 376]
// ]

// let sesta = [
//   [22313, 3233, 4223, 3224],
//   [3224, 2324, 4322, 32323],
//   [839, 2788, 62387, 6716]
// ]

// let sedma = [
//   [23, 32, 423, 324],
//   [34, 234, 432, 323],
//   [89, 788, 687, 676, -2],
// ]

// let osma = [
//   [231, 232, 43, 34],
//   [2, 2334, 0, 32, 3],
//   [29, 4, 44, 376]
// ]

// let deveta = [
//   [22313, 3233, 4223, 3224],
//   [3224, 2324, 4322, -4, 32323],
//   [839, 2788, 62387, 6716]
// ]

// let sporedna =[prva, druga, treca]
// let drugaSporedna =[cetvrta, peta, sesta]
// let trecaSporedna =[sedma, osma, deveta]

// let glavna =[sporedna, drugaSporedna, trecaSporedna]

// const mapetina = glavna.map(manja =>
//   manja.map(josManja =>
//     josManja.map(basMala =>
//       basMala.map(el => el % 2 === 0 ? el * el : el / el))))
//   console.log(mapetina)

// helperFunction = (a) => a * a
// pomocnaFunction = (a) => a / a

// const mapetina = (niz, pomocnik, helper) => {
//   let noviNiz = []
//   for(let i = 0; i < niz.length; i++){
//     for(let k = 0; k < niz[i].length; k++){
//       for(let j = 0; j < niz[i][k].length; j++){
//         for(let h = 0; h < niz[i][k][j].length; h++){
//           if(niz[i][k][j][h] % 2 === 0){
//             noviNiz.push(pomocnik(niz[i][k][j][h]))
//           }else{
//             noviNiz.push(helper(niz[i][k][j][h]))
//           }
//         }
//       }
//     }
//   }
//   return noviNiz
// }

// console.log(mapetina(glavna, helperFunction, pomocnaFunction))

// const mapetina = glavna.map(manji =>
//   manji.map(kretManji =>
//     kretManji.map(ulaz =>
//       ulaz.map(el => el % 2 === 0 ? el * el * el : el / el))))

//       console.log(mapetina)

/////////////////////////////////filter method/////////////////////////////////////////////////////////////////

// const brojevi = [6, 5, 27, 28, 29, 31, 33, 15];

// const neparniBrojevi = brojevi.filter((el) => el % 2 === 0);

// console.log(brojevi);
// console.log(neparniBrojevi);

// const neparniMapBrojevi = brojevi.map((el) => el % 2 !== 0);

// console.log(neparniMapBrojevi);

// const biggerNums = brojevi.filter((el) => el > 16);

// // console.log(biggerNums);

// const ourCustomFilter = (niz, callbackFn) => {
//   const noviFilterNiz = [];
//   for (let i = 0; i < niz.length; i++) {
//     if (callbackFn(niz[i])) {
//       noviFilterNiz.push(niz[i]);
//     }
//   }
//   return noviFilterNiz;
// };

// function customCallback(el) {
//   return el > 10;
// }

// // console.log(ourCustomFilter(brojevi, customCallback));

// const nekiBrojevi = [7, 12, 1, 8, 19, 20, 15, 22, 25, 30, 2, 10, 63];

// const pomnozenibrojevi = nekiBrojevi.map((el) => el * 3);
// console.log(pomnozenibrojevi);

// const parnibrojevi = pomnozenibrojevi.filter((el) => el % 2 === 0);
// console.log(parnibrojevi);

// let prva = [
//   [23, 32, 423, 324],
//   [34, 234, 432, 323],
//   [89, 788, 687, 676, -2],
// ]

// let druga = [
//   [231, 232, 43, 34],
//   [2, 2334, 0, 32, 3],
//   [29, 4, 44, 376]
// ]

// let treca = [
//   [22313, 3233, 4223, 3224],
//   [3224, 2324, 4322, 32323],
//   [839, 2788, 62387, 6716]
// ]

// let cetvrta = [
//   [23, 32, 423, 324],
//   [34, 234, 432, 323],
//   [89, 788, 687, 676, -2],
// ]

// let peta = [
//   [231, 232, 43, 34],
//   [2, 2334, 0, 32, 3],
//   [29, 4, 44, 376]
// ]

// let sesta = [
//   [22313, 3233, 4223, 3224],
//   [3224, 2324, 4322, 32323],
//   [839, 2788, 62387, 6716]
// ]

// let sedma = [
//   [23, 32, 423, 324],
//   [34, 234, 432, 323],
//   [89, 788, 687, 676, -2],
// ]

// let osma = [
//   [231, 232, 43, 34],
//   [2, 2334, 0, 32, 3],
//   [29, 4, 44, 376]
// ]

// let deveta = [
//   [22313, 3233, 4223, 3224],
//   [3224, 2324, 4322, -4, 32323],
//   [839, 2788, 62387, 6716]
// ]

// let sporedna =[prva, druga, treca]
// let drugaSporedna =[cetvrta, peta, sesta]
// let trecaSporedna =[sedma, osma, deveta]

// let glavna =[sporedna, drugaSporedna, trecaSporedna]

// helperFunction = (a) => a % 2 === 0

// const custom6d = (niz,helper) => {
//   const noviNiz =[]
//   for(let i = 0; i < niz.length; i++){
//     for(let j = 0; j < niz[i].length; j++){
//       for(let k = 0; k < niz[i][j].length; k++){
//         for(let l = 0; l < niz[i][j][k].length; l++){
//           if(helper(niz[i][j][k][l])){
//             noviNiz.push(niz[i][j][k][l])
//           }
//         }
//       }
//     }
//   }
//   return noviNiz
// }

// console.log(custom6d(glavna, helperFunction))

// const filterusa = glavna.map(manja =>
//   manja.map(josManja =>
//     josManja.map(njamb =>
//       njamb.filter(el => el % 2 ===0))))

//       console.log(filterusa)

// const pomnozeni = glavna.map(manja =>
//   manja.map(josManja =>
//     josManja.map(njamb =>
//       njamb.map(el => el * el))))

// console.log(pomnozeni)

// const parni = pomnozeni.map(manja =>
//   manja.map(josManja =>
//     josManja.map(njamb =>
//       njamb.filter(el => el % 2 === 0))))

// console.log(parni)

////////////////////////////////////////reduce/////////////////////////////////////

// const nizZaReduce = [2, 8, 14, 17, 10, 50, 60, 30, 43, 3, 9, 68];

// const prosek = nizZaReduce.reduce((akumulator, el) => akumulator + el)
// console.log(prosek / nizZaReduce.length)

// console.log(nizZaReduce)

// const addNumber = nizZaReduce.reduce((akumulator, el) => akumulator.concat(`number: ${el}`), [])

// console.log(addNumber)

// const users = [
//   {id: 1, name:'pedro', age: 26},
//   {id: 2, name:'john', age: 26},
//   {id: 3, name:'jessica', age: 56},
//   {id: 4, name:'rio ferdinand', age: 126},
//   {id: 5, name:'michel scott', age: 45},

////////////////////////////////////////reduce kroz niz objekata////////////////////////////////////////////

// const addNumber = users.reduce((p,c) => p.concat(`objects: ${c}`), [])
// console.log(addNumber)

// const increseNumById = users.reduce((p,c) => {
//   if (c.name === 'pedro') {
//     return p += 1
//   }
//   return p
// }, 0)
// console.log(increseNumById)

// const ages = users.reduce((p,c) => {
//   p.push(c.age)
//   return p
// },[])
// console.log(ages)

// const ids = users.reduce((p, c) => {
//   p.push(c.id)
//   return p
// }, [])
// console.log(ids)

// const names = users.reduce((p, c) => {
//   p.push(c.name)
//   return(p)
// },[])
// console.log(names)

// const count = users.reduce((p, c) => {
//   if (c.name === 'john') {
//     p += 1
//   }
//   return (p)
// }, 0)
// console.log(count)

// ////////////////////////////////////////map kroz niz objekata//////////////////////////////////////////////

// const changeIdByAge = (age, id) => {
//   const newArray = users.map(el => {
//     if (age === el.age) {
//       return {id: id, name: el.name, age: el.age}
//     } else {
//       return el
//     }
//   })
//   return newArray
// }
// console.log(changeIdByAge(22, 333))

//  const changeNameById = (id, ime, noviId) => {
//   const newArray = users.map(el => {
//     if(id === el.id) {
//       return {id: noviId, name: ime, age: el.age}
//     } else {
//       return el
//     }
//   })
//   return newArray
//  }
//  console.log(changeNameById(1, 'imran', 66))

// const changeAgeById = (id, newAge) => {
//   const newArray = users.map(el => {
//     if (id === el.id) {
//       return {id: el.id, name: el.name, age: newAge}
//     } else {
//       return el
//     }
//   })
//   return newArray
// }
// console.log(changeAgeById(1, 2222))

///////////////////////////////////////////filter kroz niz objekata////////////////////////////////////////////////
// const removeByAge = (age, age2, age3) => {
//   const newArray = users.filter(el => el.age != age && el.age != age2 && el.age != age3)
//   return newArray
// }
// console.log(removeByAge(26, 22, 56))

// const removeName = (name, ime) => {
//   const newArray = users.filter(el => el.name != name && el.name != ime)
//   return newArray
// }
// console.log(removeName('pedro', 'john'))

// const removeId = (id, id2) => {
//  const newArray = users.filter(el => el.id != id && el.id != id2)
//     return newArray
// }
// console.log(removeId(1, 3))

///////////////////////////////////////////////////////fiz buzz///////////////////////////////////////

// for(let i = 0; i < 100; i++) {
//   if (i % 15 === 0) {
//     console.log('fizz-buzz')
//   } else if (i % 5 === 0) {
//     console.log('buzz')
//   } else if(i % 3 === 0) {
//     console.log('fizz')
//   } else {
//     console.log(i)
//   }
// }

// const niz = [1, 2, 3, 4, 5, 6]

// niz.push(2, 3)
// niz.unshift(2,3)

// console.log(niz)

// const mnozi = niz.map(el => el * 7)
// const parni = mnozi.filter(el => el % 3 === 0)
// console.log(mnozi)
// console.log(parni)

////////////////////////////////shift, unshift, pop, push///////////////////////////////////////////

// const array = [1, 2, 4, 5, 6, 7, 78]

// array.push(12, 13)
// console.log(array)

// //samo poslednji 1 kom ELEMINISE
// const last = array.pop()
// console.log(last)
// console.log(array)

// //samo prvi 1 kom ELEMINISE
// const first = array.shift()
// console.log(first)
// console.log(array)

// //radi isto sto push samo na pocetku niza
// array.unshift(0, 5, 6)
// console.log(array)

// /* vraca kopiju niza celog ili zagradama odredjenog dela,
// dok org niz ostaje nepromenjen*/
// console.log(array.slice(4,7))
// console.log(array)

// /*splice vraca izmenjen niza

// -koristi se da se ukolini neki element iz niza ili vise njih
// u tom slucaju prvi broj oznacava index elementa u nizu koji zelimo da uklonimo,
// a drugi broj oznacava koliko elemenata uklanjajmo,
// npr: (0, 1) ce ukloniti samo samo jedan element pod index-om 0,
// dok (0, 2) ce ukloniti 2 elementa pocevsi od index-a 0 tj. 0 i 1

// -koristi se i zamenimo neki element na odredjeno mesto u nizu,
// u tom slucaju prvi broj oznacava index na koji zelimo da dodje novi element,
// a drugi je broj 1 i on predstavlja postojanje elementa na tom mestu,
// (0, 1, 'may') ce oznaciti da se brise postojeci element sa index-om 0 u nizu
// i da na njegovo mesto dolazi element 'may' ,

// u ovom slucaju se vraca ista duzina niza,
// ali izmenjena, ovo je primer za jedan element, ali se moze dodavati tako i vise njih,
// sto ce dalji promeniti duzinu niza.
// (0, 1, 'may', 'jun', 'july') bi isto uradio sa 'may'-em ali bi posle njega dodao
// i ostale mesece, sto bi nadalje promenilo index-e sledecim elementima

// -koristi se i da se doda element u nizu na odredjenom mestu preko index-a,
// radi sve isto kao za zamenu, samo sto u ovom slucaju ne menjamo nijedan elemet,
// vec samo dodajemo novi ili vise njih, pa je metoda drugacija:
// (0, 0, 'may') ili (0, 0, 'may', 'jun', 'july') ce uraditi sve isto kao prethodni
// primer samo sto nece brisati postojeci element sa index-om u ovom slucaju 0,
// nego ce ga pomeriti unapred i tako sve elemente niza

// -logovanjem splice, logujemo deo niza (0, 4) ce ulogovati 4 elementa prva u nizu,
// pocevsi od index-a 0 do index-a 4 BEZ njega, znaci (0, 1, 2, 3)*/

// const months = ['Jan', 'March', 'April', 'June'];
// console.log(months)

// months.splice(1, 0, 'february')
// console.log(months)
// months.splice(4, 1, 'may')
// console.log(months)

// console.log(months.splice(0, 3))

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// const bigOne = {
//   className: 'kursadzije',
//   classGrades: [4, 5, 5, 4, 4, 3, 2, 3, 4],
//   arrayOfObjects: [
//     {name: 'mehmed',
//      profession: 'palamud'
//     },
//     {name: 'rukfas',
//      profession: 'delivery driver'
//    }
//   ],
//   teacher: 'king Solomon',
//   sayHello() {
//     return 'zdravo profo ' + bigOne.teacher
//   }
// }

///////////////////// mapom
// const nizObjekata = bigOne.arrayOfObjects
// const arraySamoName = nizObjekata.map(el => {
//   return {name: el.name}
// })
// console.log(arraySamoName)

////////
// console.log(bigOne)
// console.log(bigOne.sayHello())

////////
// const ocene = bigOne.classGrades

// const zbir = ocene.reduce((a, c) => {
//   return a + c
// }, 0)
////////
// const prosek = zbir /  ocene.length
// console.log(prosek)

/////////
// const interduce = bigOne.sayHello() + ' our average grade is ' + prosek

// console.log(interduce)

////////////////////////////////////////////////////////////////////////////////
/*
const objekat = [
  {
    name: 'pedro',
    age: 26,
    ocupation: 'niko'
  },
  {
    name: 'smero',
    age: 35,
    ocupation: 'neko'
  },
  {
    name: 'karim',
    age: 56,
    ocupation: 'nesto'
  }
]

const totalAge = objekat.reduce((total, current) => {
  return total + current.age
}, 0)

console.log(totalAge)

const over30 = objekat.filter(el => {
  return el.age >= 30
}).map(el => {
  return {name: el.name}
})

console.log(over30)

console.log(objekat)

const names = objekat.map(el => {
  return {name: el.name}
})

console.log(names)

const names2 = objekat.map(el => {
  return el.name
})

console.log(names2)
*/

// const ourClassroom = [
//   {name:'Tajra', id: 1, age: 17},
//   {name:'Iman', id: 2, age: 17},
//   {name:'Dzenis', id: 3, age: 23},
//   {name:'Tarik', id: 4, age: 25},
//   {name:'Imad', id: 5, age: 17},
//   {name:'Haris', id: 6, age: 18},
//   {name:'Mehmed', id: 7, age: 16},
//   {name:'Taris', id: 8, age: 18},
// ]

// const parniId = ourClassroom.filter((clas) => clas.id % 2 === 0).map((par) => {
//   return {id:par.id}

// console.log(parniId)

const watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

////////////////// radi sa forEach i filter
const lista = [];

watchList.map((el) => {
  if (el.imdbRating >= 8.0) {
    lista.push({
      name: el.Title,
      rating: el.imdbRating,
    });
  }
});

// console.log(lista)

///////////////////

const myArr = watchList.reduce((acc, curr) => {
  return acc + +curr.imdbRating;
}, 0);
// console.log(myArr / watchList.length)

/////////////

// arr = [];

// watchList.forEach((el) => {
//   if (el.imdbRating >= 8.0) {
//     arr.push({
//       name: el.Title,
//       rating: el.imdbRating,
//     });
//   }
// });

// console.log(arr)

////////////

// const newArray = watchList.map(movie => {
//   return {Title: movie.Title, Rated: movie.imdbRating}
// }).filter(el => el.Rated >= 8.0)

// console.log(newArray)

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    }, this.title);
  },
};

// video.showTags()

///////////////////////////////////////////////////////////////////////////

function fun() {
  let b = 3;
  // console.log(b);
}

const druga = fun();

function funB() {
  return druga;
}

// funB();

/////////////////////////////////////////////////////////////////////////

// const nasCustomObjekat = {
//   odeljenje: "3-10",
//   dukserica: "zelena",
//   ja: "ne znam",
//   godine: 30,
//   brojLaptopova: 9,
// };
// const nasCustomObjekat2 = {
//   odeljenje: "3-10",
//   dukserica: "zelena",
//   ja: "ne znam",
//   godine: 40,
//   brojLaptopova: 9,
// };

// function ourFirstCallFunction(argumentFirst, argumentSecond) {
//   console.log(
//     `${argumentFirst} ima ${this.godine} godina i ${argumentSecond} mu je ${this.dukserica} `
//   );
// }

// ourFirstCallFunction.call(nasCustomObjekat, "Aldin", "kapa");

// ourFirstCallFunction.apply(nasCustomObjekat2, ["aldin", "kapa"]);

// const bindFunkcija = ourFirstCallFunction.bind(nasCustomObjekat2, "kapa");

// bindFunkcija();

// const user1 = {
//   id: 1,
//   godine: 12,
//   ime: "prvo Ime",
//   profesija: "HTML",
//   vozila: ["mclaren", "ladu"],
// };

// const user2 = {
//   id: 2,
//   godine: 13,
//   ime: "drugo Ime",
//   profesija: "css",
//   vozila: ["golf", "tesla", "passat", "touran"],
// };

// const user3 = {
//   id: 3,
//   godine: 25,
//   ime: "trece Ime",
//   profesija: "javascript",
//   vozila: ["audi", "toyota", "michubishi"],
// };

// const user4 = {
//   id: 4,
//   godine: 33,
//   ime: "cetvrto Ime",
//   profesija: "typescript",
//   vozila: ["volkswagen", "punto"],
// };

// function checkingUserAge() {
//   if (this.godine >= 18) {
//     console.log("svaka cast");
//   } else {
//     console.log(`dodji za ${18 - this.godine} godina`);
//   }
// }

// checkingUserAge.call(user4);
// checkingUserAge.apply(user3);
// checkingUserAge.apply(user2);
// const newOne = checkingUserAge.bind(user1);
// newOne();

const allUsers2 = [
  {
    id: 1,
    godine: 12,
    ime: "prvo Ime",
    profesija: "HTML",
    vozila: ["mclaren", "ladu"],
  },
  {
    id: 2,
    godine: 13,
    ime: "drugo Ime",
    profesija: "css",
    vozila: ["golf", "tesla", "passat", "touran"],
  },
  {
    id: 3,
    godine: 25,
    ime: "trece Ime",
    profesija: "javascript",
    vozila: ["audi", "toyota", "michubishi"],
  },
  {
    id: 4,
    godine: 33,
    ime: "cetvrto Ime",
    profesija: "typescript",
    vozila: ["volkswagen"],
  },
];

const deleteFun = (id) => {
  return allUsers2.filter((el) => el.id !== id);
};
// console.log(deleteFun(1));

function checkAge() {
  if (this.godine > 17) {
    console.log("svaka cast.");
  } else {
    console.log(`dodji za ${18 - this.godine} godina.`);
  }
}

// allUsers2.forEach((user) => checkAge.call(user));
// allUsers2.filter((user) => checkAge.call(user));
// allUsers2.map((user) => checkAge.call(user));

// allUsers2.forEach((user) => checkAge.apply(user));
// allUsers2.filter((user) => checkAge.apply(user));
// allUsers2.map((user) => checkAge.apply(user));

// const newBind = allUsers2.map((user) => checkAge.bind(user));
// newBind.forEach((provera) => provera());

// const newBinic = allUsers2.map((user) => checkAge.call(user));
// const newBinic2 = allUsers2.map((user) => checkAge.apply(user));

// const ourDeleteFunction = (id, id2) =>
//   allUsers.filter((user) => user.id !== id && user.id !== id2);

// console.log(ourDeleteFunction(2, 3));
// console.log(ourDeleteFunction(3));

///////////////////////////////ES6///////////////////////////////////////

//nodredjen broj argumenata
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
// console.log(howMany(0, 1, 2));
// console.log(howMany("string", null, [1, 2, 3], {}));

//deafaukt vrednost elementa, ako je sami ne damo/promenimo
gretting = (named = "salko") => "hello " + named;
// console.log(gretting("dinamitas"));
// console.log(gretting());

//spread operator
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1];
// console.log(arr2);

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
// console.log(maximus)

//Destructuring Assignment
const user = { name: "John Doe", age: 34 };

//const name = user.name;         //old
// const age = user.age;          //old

const { name, age } = user; // new method

/////////
const [a, , , b, ...array] = [1, 2, 3, 4, 5, 6];
// console.log(a, b);
// console.log(array);

// getter and setter from class

class Book {
  constructor(author) {
    this.author = author;
  }
  // getter
  get writer() {
    return this.author;
  }
  // setter
  set writer(updatedAuthor) {
    this.author = updatedAuthor;
  }
}

const novel = new Book("Andric");
// console.log(novel);
writer = novel.writer;
// console.log(writer);
const newWriter = (novel.writer = "Selimovic");
// console.log(newWriter);
// console.log(novel);

//////////////////////////////////////klase///////////////////////////

class User {
  // ime;
  // prezime;
  // posao;
  // pribivaliste = "Novi Pazar";
  // kredit;
  constructor(name, lastname, job, credit, hobi) {
    this.ime = name;
    this.prezime = lastname;
    this.posao = job;
    this.kredit = credit;
    this.hobi = hobi;
  }
}

const jaAldin = new User("aldin", "halilovic", "coach", 0);

// console.log(jaAldin);

class Novi {
  constructor(room, mate, func, town) {
    this.room = room;
    this.mate = mate;
    this.func = func;
    this.town = town;
  }
}

function sayHello() {
  console.log("hello world");
}

const idemo = new Novi(33, "james", sayHello, "capetown");

// console.log(idemo);

class Driver {
  constructor(name, car, town) {
    this.name = name;
    this.car = car;
    this.town = town;
  }
}

const samkoDriver = new Driver("samko", "tesla", "sebecevo");

// console.log(samkoDriver);

const mojeImeObjekat = {
  ime: "Aldin",
  prezime: "blabas;ldkasl;djsalk",
};

class newClass {
  ime = "Aladin";
  prezime = "alibaba";
}

const mojeIme = new newClass();
// console.log(mojeIme);

class Bus {
  seats;
  color;

  constructor(sedista, boja) {
    this.seats = sedista;
    this.color = boja;
  }

  helloBus() {
    console.log("Selam");
  }

  changeColor(newColor) {
    this.color = newColor;
  }

  getColor() {
    return this.color;
  }
}

const lasta = new Bus(55, "zelena");

// console.log(lasta);

// lasta.helloBus();

lasta.changeColor("zuta");
// console.log(lasta);

const bojaAutaobusa = lasta.getColor();
// console.log(bojaAutaobusa);

class Pet {
  legNum;
  tail;

  constructor(noge, rep) {
    this.legNum = noge;
    this.tail = rep;
  }
}

class Cat extends Pet {
  name;
  color;

  constructor(noge, rep, ime, boja) {
    super(noge, rep);
    this.name = ime;
    this.color = boja;
  }
}

class Dog extends Cat {
  constructor(noge, rep, ime, boja) {
    super(noge, rep, ime, boja);
  }

  bark() {
    console.log("arrrr!!!");
  }

  getTail() {
    return this.tail;
  }
}

const ourCat = new Cat(4, "yes", "Sladjan", "Bela");

const ourDog = new Dog(4, "yes", "Sladjana", "grey");

// console.log(ourCat);

// console.log(ourDog);

// ourDog.bark();
const ourDogsTail = ourDog.getTail();
// console.log(ourDogsTail);

// public variable
const myObject1 = {
  name: "Parwinder",
  sayMyName() {
    return this.name;
  },
};

// console.log(myObject1.name);
// console.log(myObject1.sayMyName());

/// public class
class ObjectCreator {
  name;

  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return this.name;
  }
}

const myObject = new ObjectCreator("bond");
// console.log(myObject.name);
// console.log(myObject.sayMyName());

// private
