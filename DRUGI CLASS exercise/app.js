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

const data = [2, 26, 38, 75, 11, 29];

const parniBr = data.filter((el) => el % 2 === 0);
console.log(parniBr);

const words = ["televizor", "daljinski", "telefon", "voda", "ranac", "stolica"];

const drugoE = words.filter((el) => el[1] === "e");
console.log(drugoE);

const sestChar = words.filter((el) => el.length <= 6);
console.log(sestChar);

const boolean = data.map((el) => el % 2 === 0);
console.log(boolean);

const noviDo50 = (arr) => {
  let niz = arr.filter((el) => el < 50 && el % 2 === 0);

  return niz;
};

const brojevi = [1, 2, 32, 41, 666, 4, 5, 54, 65, 34];

const filtered = noviDo50(brojevi);
console.log(filtered);
