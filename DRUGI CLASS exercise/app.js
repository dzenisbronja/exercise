// const arr = [528, 23, 339, 99, 33, 200];

// arr.reverse();
// console.log(arr);

// arr.sort((a, b) => a - b);
// console.log(arr);

// arr.sort((a, b) => b - a);
// console.log(arr);

// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

// const reversed = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   reversed.push(arr[i]);
// }

// console.log(reversed);

// maxNum = arr[0];

// for (let i = arr.length - 1; i >= 0; i--) {
//   if (arr[i] > maxNum) {
//     maxNum = arr[i];
//   }
// }

// console.log(maxNum);

// minNum = arr[0];

// for (let i = arr.length - 1; i >= 0; i--) {
//   if (minNum > arr[i]) {
//     minNum = arr[i];
//   }
// }

// console.log(minNum);

////////////////////ENCAPSULATION
// class Shop {
//   #ime;
//   lokacija;
//   logo;

//   static brojKasa = 10;

//   constructor(name, location, logo) {
//     this.#ime = name;
//     this.lokacija = location;
//     this.logo = logo;
//   }

//   get ourName() {
//     return this.#ime;
//   }

//   setOurName(nekoIme) {
//     this.#ime = nekoIme;
//   }
// }

// const brojKasaUMaxiju = Shop.brojKasa;
// console.log(brojKasaUMaxiju);

// const maxi = new Shop("maxi", "1. maj", "MaXi");
// console.log(maxi);

// console.log(maxi.lokacija);
// console.log(maxi.ime);  //ne moze mu se ovako pristupiti jer je private

// console.log(maxi.ourName); // ovako mu se more pristupiti preko gettera

// const imeProdavnice = maxi.ourName;
// console.log(imeProdavnice);

// const novaLokacija = (maxi.lokacija = "stefana nemanje");
// console.log(maxi);

// const novoIme = (maxi.ime = "idea");
// console.log(maxi);
// ako dodamo # ispred imena, imacemo bug, a ako ne
//onda cemo dodati novi properti ne promenivsi st
//tako da ga manjamo iskljucivo preko settera

// const newName = maxi.setOurName("idea");
// console.log(maxi); //ovako se jedino menja privat property, preko setera

////////drugi nacin za get

// class Shop {
//   #ime;
//   lokacija;
//   logo;

//   static brojKasa = 10;

//   constructor(name, location, logo) {
//     this.#ime = name;
//     this.lokacija = location;
//     this.logo = logo;
//   }

//   ourName() {
//     return this.#ime;
//   }

//   setOurName(nekoIme) {
//     return (this.#ime = nekoIme);
//   }
// }

// const nekaProdavnica = new Shop("IDEA", "jedinstvo", "iDEA");

// console.log(nekaProdavnica);
// console.log(nekaProdavnica.#ime); // ne moze se ovako pristupiti

// const imeProdavnice = nekaProdavnica.ourName();
// console.log(imeProdavnice);

// nekaProdavnica.setOurName("RODA");
// console.log(nekaProdavnica);

/////////////////////////////////////////////////////////////////////////////

// const prvaMatrica = [
//   [20, 12, 25],
//   [10, 222, 7],
//   [99, 33, 46],
// ];

// for (let i = 0; i < prvaMatrica.length; i++) {
//   for (let j = 0; j < prvaMatrica[i].length; j++) {
//     prvaMatrica[i][j] % 2 === 0
//       ? console.log(prvaMatrica[i][j], "paran broj")
//       : console.log(prvaMatrica[i][j], "neparan broj");
//   }
// }

////////////////////////////////////////////

// const classAges = [17, 17, 16, 21, 23, 16, 25, 20];

// const prosek = classAges.reduce((a, c) => a + c);
// // console.log(prosek / classAges.length);

// const miles = [502.8, 120.5, 350.6, 205.2, 100, 98, 115, 9000, 53];

// const km = miles.map((el) => el * 1.6);
// console.log(km);
// const avg = km.reduce((a, c) => a + c);
// console.log(avg);
// const prosecean = avg / miles.length;
// console.log(prosecean);

// ///////////////////////////////////

// const mama = "MAMA ima momu";

// let brojMova = 0;

// for (let i = 0; i < mama.length; i++) {
//   if (mama[i] === "M" || mama[i] === "m") {
//     brojMova++;
//   }
// }

// console.log(brojMova);

/////////////////////////////// map zadaci
//1)

// const DATA1 = [2, 26, 38, 75, 11, 29];
// const DATA2 = ["a", "b", "c", "d", "e"];

// const spojNizova = (arr1, arr2) => {
//   let combo = arr1.concat(arr2);
//   let parni = [];
//   combo.map((el) => {
//     if (el % 2 === 0) {
//       parni.push(el);
//     }
//   });

//   parni.unshift(10, 20);

//   return [combo, parni];
// };

// const result = spojNizova(DATA1, DATA2);
// console.log(result);

// const comboNiz = result[0];
// console.log(comboNiz);

// const parniNiz = result[1];
// console.log(parniNiz);

//2)

// const numbers2 = [2, 5, 10, 3, 4, 8];

// const kvadrat = numbers2.map((el) => el * el);
// console.log(kvadrat);

// const koren = numbers2.map((el) => Math.sqrt(el));
// console.log(koren);

// const kvadrat2 = numbers2.map((el, i) =>
//   i === 0 || i === 3 || i === 5 ? el * el : el
// );

// console.log(kvadrat2);

// const noviNIz = (arr) => {
//   let novi = [];

//   arr.map((el) => {
//     if (el > 2 && el < 8) {
//       novi.push((el * 4) / 2);
//     } else if (el > 2) {
//       novi.push(el * 7);
//     } else {
//       novi.push(el);
//     }
//   });

//   let ispodTen = [];

//   novi.map((el) => (el < 10 ? ispodTen.push(el) : el));

//   return ispodTen;
// };

// const random = [1, 2, 3, 44, 33, 54, 666, 43];

// const uradjeni = noviNIz(random);

// console.log(uradjeni);

//////////////////////////////// filter

// const data = [2, 26, 38, 75, 11, 29];

// const parniBr = data.filter((el) => el % 2 === 0);
// console.log(parniBr);

// const words = ["televizor", "daljinski", "telefon", "voda", "ranac", "stolica"];

// const drugoE = words.filter((el) => el[1] === "e");
// console.log(drugoE);

// const sestChar = words.filter((el) => el.length <= 6);
// console.log(sestChar);

// const boolean = data.map((el) => el % 2 === 0);
// console.log(boolean);

// const noviDo50 = (arr) => {
//   let niz = arr.filter((el) => el < 50 && el % 2 === 0);

//   return niz;
// };

// const brojevi = [1, 2, 32, 41, 666, 4, 5, 54, 65, 34];

// const filtered = noviDo50(brojevi);
// console.log(filtered);

//////////////////// reduce

// const numbers = [1, 2, 32, 41, 666, 4, 5, 54, 65, 34];

// const ukupno = numbers.reduce((a, c) => a + c);
// const prosek = ukupno / numbers.length;
// console.log(ukupno);
// console.log(prosek);

// const miles = [1, 2, 32, 41, 666, 4, 5, 54, 65, 34];

// const km = miles.map((el) => el * 1.6);
// console.log(km);

// const totalKm = km.reduce((a, c) => a + c);
// console.log(totalKm);

// const sumParnih = numbers.reduce((a, c) => {
//   if (c % 2 === 0) {
//     return a + c;
//   }
//   return a;
// });

// console.log(sumParnih);
// //parne pomnozi ih sa 2  i saberi samo njih, map, filter i reduce

// const randomNumbers = [1, 2, 32, 41, 666, 4, 5, 54, 65, 34];

// const uradjen = randomNumbers.reduce((a, c) => {
//   if (c % 2 === 0) {
//     return a + c * 2;
//   }
//   return a;
// }, 0);

// console.log(uradjen);

///////////////////////////////////////strings
//a)
// function brkanje(nekiString) {
//   let result = "";
//   let brojOkretanja = Math.floor(nekiString.length / 2);

//   for (let i = 0; i < brojOkretanja; i++) {
//     result += nekiString[2 * i + 1] + nekiString[2 * i];
//   }

//   if (nekiString.length % 2 !== 0) {
//     result += nekiString[nekiString.length - 1];
//   }
//   return result;
// }

// let ime = "Spajdermeni";
// console.log(brkanje(ime));

// console.log(Math.ceil(6.0022));//7

//combo 2 stringa

// function combo(prvi, drugi) {
//   let result = "";
//   let duzinaPrvi = prvi.length;
//   let duzinaDrugi = drugi.length;
//   let duzinaMax = Math.max(duzinaPrvi, duzinaDrugi);

//   for (let i = 0; i < duzinaMax; i++) {
//     if (duzinaPrvi > i) {
//       result += prvi[i];
//     }
//     if (duzinaDrugi > i) {
//       result += drugi[i];
//     }
//   }
//   return result;
// }

// let a = "Med";
// let b = "Krevet";

// console.log(combo(a, b));

///////////////// dodaj novi elemen u nizu sa brojem automobila

// const automobili = {
//   ja: ["vw", "audi", "cayenne", "targa"],
//   tajra: ["golf", "audi", "bmw"],
//   iman: ["peugeot", "fiat", "citroen", "x5"],
//   bronja: ["pagani", "mclaren", "rollce roys"],
// };

// let niz = Object.values(automobili);
// console.log(niz);

// let noviNiz = niz.map((el) => [...el, el.length]);
// console.log(noviNiz);

//////////////////////////////////////////////////////////////////////////////

// const dogs = [
//   { weigth: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weigth: 8, curFood: 200, owners: ["Matilda"] },
//   { weigth: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weigth: 32, curFood: 340, owners: ["Michael"] },
// ];

// // 1) recommendedFood (portion) as new property
// // formula
// // weigth ** 0.75 * 28 (result is in grams of food, and the weigth needs to be in kg)

// dogs.forEach((el) => {
//   el.recommendedFood = parseInt(el.weigth ** 0.75 * 28);
// });

// console.log(dogs);

// // 2) log if sarahs dog eats too much or little food

// const sarahsDog = dogs.filter((el) => {
//   return el.owners.includes("Sarah");
// });

// console.log(sarahsDog);

// if (sarahsDog.curFood > sarahsDog.recommendedFood) {
//   console.log("this dog eats too little");
// } else {
//   console.log("this dog eats too much");
// }

// // 3) array with owners whos dogs eat too much and one for too little

// const ownersEatTooMuch = dogs
//   .filter((dog) => dog.curFood > dog.recommendedFood)
//   .map((dog) => dog.owners);

// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs
//   .filter((dog) => dog.curFood < dog.recommendedFood)
//   .map((dog) => dog.owners);

// console.log(ownersEatTooLittle);

// // 4)

// ownersEatTooLittle.forEach((el) => {
//   el.forEach((el) => console.log(el + " eat too much"));
// });

// // 5)

// const help = dogs.map((el) => el.curFood === el.recommendedFood);
// console.log(help);

// // 6)

// const ok = dogs.map((el) => el.curFood >= el.recommendedFood);
// console.log(ok);

// // 7)

// const okDogs = dogs.filter((el) => {
//   return el.curFood >= el.recommendedFood;
// });

// console.log(okDogs);

// // 8)

// const newShallow = dogs
//   .slice()
//   .sort((a, b) => b.recommendedFood - a.recommendedFood);
// console.log(newShallow);

///////////////////////////////////////////////////////////////////////////////

// let matrix = [
//   [1, 3, 5],
//   [2, 4, 6],
//   [6, 8, 9],
// ];

// let sum = 0;

// for (let i = 0; i < matrix.length; i++) {
//   sum += matrix[i][i];
// }

// console.log(sum);

// let sum2 = 0;

// for (let i = 0; i < matrix.length; i++) {
//   sum2 += matrix[i][matrix.length - 1 - i];
// }

// console.log(sum2);

//////////////////////////////////////////////////

// const array = [1, 23, 445, 56];

// for (const key in array) {
//   console.log(array[key]);
// }

// for (const iterator of array) {
//   console.log(iterator);
// }

// const object = {
//   name: "saladin",
//   lastName: "veliki",
//   address: "oslobodjenja",
//   profession: "mehanic",
// };

// for (const key in object) {
//   console.log(object[key]);
// }

///////////////////////////////////////////////////////////////

// let threeDArray = [
//   [
//     [1, 2, 7],
//     [4, 5, 6],
//     [7, 8, 3],
//   ],
//   [
//     [2, 4, 6],
//     [8, 9, 3],
//     [5, 7, 1],
//   ],
//   [
//     [9, 8, 7],
//     [6, 5, 4],
//     [3, 2, 7],
//   ],
// ];

// a) zbir svih dijagonala
// let firstD = 0;

// for (let i = 0; i < threeDArray.length; i++) {
//   for (let j = 0; j < threeDArray[i].length; j++) {
//     firstD += threeDArray[i][j][j];
//   }
// }

// console.log(firstD);

// let secondD = 0;

// for (let i = 0; i < threeDArray.length; i++) {
//   for (let j = 0; j < threeDArray[i].length; j++) {
//     secondD += threeDArray[i][j][threeDArray.length - 1 - j];
//   }
// }

// console.log(secondD);

// b) dijagonalni zbir 3 broja

// let firstD = 0;

// for (let i = 0; i < threeDArray.length; i++) {
//   firstD += threeDArray[i][i][i];
// }

// console.log(firstD);

// let secondD = 0;

// for (let i = 0; i < threeDArray.length; i++) {
//   secondD += threeDArray[i][i][threeDArray.length - 1 - i];
// }

// console.log(secondD);
