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

// const recenica = "Mama ima momu";
// let counter = 0;
// let counterMalih = 0;

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

// let varijabla = "WEBnSTUDY.com";
// console.log(varijabla.toLowerCase());

//7) 7.	Pronaći poziciju poslednjeg razmaka u stringu.
// Npr. za uneto 'Pera ima devojku', rezultat je 8.

//a)
// let pera = "Pera ima devojku";
// let poslednjiSpace = pera.lastIndexOf(" ");
// console.log(poslednjiSpace);

//b)
// for (let i = 0; i < pera.length; i++) {
//   if (pera[i] === " ") {
//     poslednji = i;
//   }
// }

// console.log(poslednji);

//na isti nacin bi nasli prvi space, samo dodamo break ispod
//brek mu kaze da izadje cim nadje prvo poklapanje
//dok on ovako uzima vrednost index-a poslednjeg nadjenog

//8) 8.	Ispisati dužinu prve reči unetog stringa.
//Npr. za uneto 'Pera ima devojku', rezultat je 4.
//Podrazumeva se da uneti string nema vodeće razmake.

// let recenica = "Pera ima devojku";
// let sastav = recenica.split(" ");
// let brojChar = sastav[0].length;
// console.log(brojChar);

//9)9.	Za uneti string A treba kreirati novi string B
// koji se sastoji od prve i poslednje reči
//(odvojenih razmakom) unetog stringa.
//Npr. za A='Svuda pođi, kući dođi',
//dobija se B='Svuda dođi'. Podrazumeva se da uneti
// string nema vodeće ili prateće razmake.

// let A = "Svuda pođi, kući dođi";
// let spacedA = A.split(" ");
// let novi = `${spacedA[0]} ${spacedA[spacedA.length - 1]}`;
// console.log(novi);

//10) 10.	Iz unetog stringa treba izdvojiti N znakova sa leve
// strane. Npr. za string 'Pera ima devojku' i N=6,
// dobija se 'Pera i'. Ako je N veće od dužine stringa,
// kao rezultat se dobija ceo string.

// let pera = "Pera ima devojku";

// function brojKaraktera(broj, nekiString) {
//   if (broj > nekiString.length) {
//     return nekiString;
//   } else {
//     return nekiString.slice(0, broj);
//   }
// }

// console.log(brojKaraktera(3, pera));

//11) 11.	Izdvojiti N znakova sa desne strane
//(poslednjih N znakova) unetog stringa.
//Npr. za string 'Pera ima devojku' i N=5, dobija se 'vojku'.

// let pera = "Pera ima devojku";

// function brojKaraktera(broj, nekiString) {
//   if (broj > nekiString.length) {
//     return nekiString;
//   } else {
//     return nekiString.slice(-broj);
//   }
// }

// console.log(brojKaraktera(5, pera));

//12) 12.	Za uneti string A, treba izdvojiti podstring B,
// koji počinje od unete pozicije N i ima M znakova.
// Npr. za string 'Pera ima devojku', N=6 i M=7,
//dobija se B='ima dev'.

// let A = "Pera ima devojku";

// function dvaBroja(a, b, niz) {
//   let B = niz.slice(a, a + b);
//   return B;
// }

// console.log(dvaBroja(6, 7, A));

//13) 13.	Unosi se string A i znak Z.
//Kreirati novi string B koji se dobija tako što se iz unetog
//stringa izbacuje svaka pojava znaka Z.
//Npr. za unet string "Madagaskar" i znak "a",
//dobijamo rezultat "Mdgskr"

// let A = "Madagaskar";

// function izbaciSlovo(slovo, niz) {
//   let B = niz.split("");
//   for (let i = 0; i < B.length; i++) {
//     if (B[i] === slovo) {
//       B.splice(i, 1);
//     }
//   }

//   return B;
// }

// console.log(izbaciSlovo("a", A));

//14) 14.	Uneti string se šifruje tako što se zamenjuje redosled
// znacima u stringu. Prvi i drugi zamene mesta, zatim 3. i 4.
// zamene mesta itd. Npr. za string 'Pera ima devojku',
//treba dobiti 'ePari amd vejouk'. Ako string ima neparan broj
// znakova, poslednji znak se ne dira.

function sifrujString(unetiString) {
  let rezultat = "";
  let n = Math.floor(unetiString.length / 2);

  for (let i = 0; i < n; i++) {
    rezultat += unetiString[2 * i + 1] + unetiString[2 * i];
  }

  if (unetiString.length % 2 !== 0) {
    rezultat += unetiString[unetiString.length - 1];
  }

  return rezultat;
}

let unetiString = "Pera ima devojku";
let sifrovanString = sifrujString(unetiString);
console.log(sifrovanString);

//15) 15.	Unose se dva stringa A i B. Kreirati novi string
// kao kombinaciju stringova A i B, tako što se kombinuju prvi
//sa prvim, drugi sa drugim, treći sa trećim znakom itd.
//Ako je jedan string duži od drugog, na kraju samo dodati
//znakove viška. Npr. za stringove "PERA" i "sladoled" dobija
//se string "PsElRaAdoled".

function kombinujStringove(stringA, stringB) {
  let rezultat = "";
  let duzinaA = stringA.length;
  let duzinaB = stringB.length;
  let duzinaMax = Math.max(duzinaA, duzinaB);

  for (let i = 0; i < duzinaMax; i++) {
    if (i < duzinaA) {
      rezultat += stringA[i];
    }
    if (i < duzinaB) {
      rezultat += stringB[i];
    }
  }

  return rezultat;
}

let stringA = "PERA";
let stringB = "sladoled";
let kombinovaniString = kombinujStringove(stringA, stringB);
console.log(kombinovaniString);
