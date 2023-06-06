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

class Shop {
  #ime;
  lokacija;
  logo;

  static brojKasa = 10;

  constructor(name, location, logo) {
    this.#ime = name;
    this.lokacija = location;
    this.logo = logo;
  }

  ourName() {
    return this.#ime;
  }

  setOurName(nekoIme) {
    return (this.#ime = nekoIme);
  }
}

const nekaProdavnica = new Shop("IDEA", "jedinstvo", "iDEA");

console.log(nekaProdavnica);
// console.log(nekaProdavnica.#ime); // ne moze se ovako pristupiti
