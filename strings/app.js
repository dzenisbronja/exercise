// kako primeniti splice na stringu

// let ime = "sead";
// let iseceno = ime.split("");
// console.log(iseceno);

// iseceno.splice(1, 0, "dsadsa");
// console.log(iseceno);

// iseceno.splice(0, 1, "prva");
// console.log(iseceno);

//1) 1.	Prebrojati koliko se puta u unetom stringu pojavljuje
// slovo "M" (i veliko i malo). Npr. za string 'Mama ima momu'

const recenica = "Mama ima momu";
let counter = 0;
let counterMalih = 0;

//a)
// for (let i = 0; i < recenica.length; i++) {
//   if (recenica[i] === "m" || recenica[i] === "M") {
//     counter++;
//   }
// }

// console.log(counter);

//b) ili to lowerCase
// for (let i = 0; i < recenica.length; i++) {
//   if (recenica[i].toUpperCase === "M") {
//     counter++;
//   }
// }

// console.log(counter);

// 2) koliko je cifara

// for (let i = 0; i < recenica.length; i++) {
//   if (isNaN(recenica[i])) {
//     counter = 0;
//   } else {
//     counter++;
//   }
// }

// console.log(counter);

//3) koliko ima malih slova

// for (let i = 0; i < recenica.length; i++) {
//   if (recenica[i] === recenica[i].toLowerCase() && recenica[i] !== " ") {
//     counter++;
//   }
// }
// console.log(counter);

//4) kojih slova ima vise, velikih ili malih

// for (let i = 0; i < recenica.length; i++) {
//   if (recenica[i] === recenica[i].toUpperCase() && recenica[i] !== " ") {
//     counter++;
//   } else if (recenica[i] === recenica[i].toLowerCase() && recenica[i] !== " ") {
//     counterMalih++;
//   }
// }

// if (counter > counterMalih) {
//   console.log(`velikih slova ima vise(${counter}), a malih je ${counterMalih}`);
// } else {
//   console.log(`malih slova ima vise(${counterMalih}), a velikih je ${counter}`);
// }

//5) 5.	Proveriti da li je uneti string palindrom
// (potpuno je isti kada se čita od pozadi). Npr. 'anavolimilovana' je palindrom.

// let provera = "anavolimilovana";
// let rastavljen = [];
// let reversed = [];

// for (let i = 0; i < provera.length; i++) {
//   rastavljen.push(provera[i]);
// }

// for (let i = provera.length - 1; i >= 0; i--) {
//   reversed.push(provera[i]);
// }

// console.log(rastavljen);
// console.log(reversed);

// for (let i = 0; i < rastavljen.length; i++) {
//   for (let i = 0; i < reversed.length; i++) {
//     if (rastavljen[i] === reversed[i]) {
//       console.log("isti su");
//     } else {
//       console.log("nisu isti");
//     }
//   }
// }

//6) sve mala slova

let varijabla = "WEBnSTUDY.com";
console.log(varijabla.toLowerCase());
