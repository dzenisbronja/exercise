let x = 10;
let y = x;

x = 20;

console.log(x);
console.log(y);
// u ovom slucaju posto je u pitanju primitivni tip podatka y se nije promenilo
// sto znaci da u memoriji postoji za sebe i promena x ne uticu na njega

let z = { value: 10 };
let q = z;

console.log(z);
console.log(q);
// ovde se zapravo promenila samo jedan objekat u memoriji kompijutera
// sto znaci su referentni podaci  kada se izjednace ne prave nova mesta u memoriji
// oni samo dele istu referencu (path) do nekog mesta u memoriji
//sto dalje kaze ako se to promeni u memoriji, sve referentne vrednosti ce ukazivati
//na istu novu izmenjenu verziju

let number = 10;

function increase(number) {
  return (number += 1);
}

console.log(increase(number));
console.log(number);

number = increase(number);
console.log(number);

//ovde ce se desiti da ako ne sacuvamo number sa izmenom nece je inkrementirati
//logovace njemu inicial value

let obj = { value: 10 };

function increment(obj) {
  return obj.value++;
}

increment(obj);
console.log(obj);

// ovde se je izmenilo i sacuvala se je ta izmena zato sto radimo sa referencama
//a ne sa razlicitim kopijama u memoriji, tako da se svaka izmena odrazi kroz
// promenu u memoriji, sto dalje znaci da sve iste refence sada ukazuju na novu
// izmenjenu verziju

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);
console.log(circle);

circle.location = { x: 1 };

console.log(circle);

//da prodjemo kroz classu mozemo da koristimo for petlju sa key-om ne bi dobili kljuceve
// da dobijemo njihove vrednisti imeClasse[key]

for (let key in circle) {
  // console.log(key); //logujemo samo keys
  // console.log(key, circle[key]); //logujemo keys i value
  if (typeof circle[key] !== "function") {
    console.log(key, circle[key]); //vraca keys i vrednosti koji nisu metode
  }
}

const keys = Object.keys(circle); //vraca niz sa keys
console.log(keys);

if ("radius" in circle) {
  console.log("circle has a radius value");
} //in proverava da li imamo taj key u nekom objektu
