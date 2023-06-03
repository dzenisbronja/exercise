// ENCAPSULATION

let employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};

console.log(employee.getWage());

//vs

let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}

console.log(getWage(baseSalary, overtime, rate)); //ili
let totalWage = getWage(baseSalary, overtime, rate);
console.log(totalWage);

// ABSTRACTION s njom smanjujemo uticaj promena na spoljni interface
// i njome prikazujemo samo neophodno za funkcionalnost neke celine
//dok sve sto je kompleksno ostaje "ispod haube"

// INHERETANCE nam omogucava da nasledjuemo jednom ispisan kod preko extend-a
// time se smanjuje pisanje i ponavljanje istih codova

// POLYMORPHISM znaci "mnoge forme"
// primer tome je neka ista motoda koja se nalazi u vise razlicitih objekata
// i on se ponasa drugacije u svakom od this objekata

// ///////////////////////////////BENEFITS

// ENCAPSULATION
// -om grupisemo srodne variable i funkcije zajedno
// i smanjujemo kompleksnost koda,
// mozemo i da reusamo taj objekat u drugim delovima programa ili drugim programima

// ABSTRACTION
//-om krijemo kompleksiju koja stoji iza koda i
// predstavljamo samo esencije neophodne za funkcionisanje
// time izoliramo uticaj promena

// INHERETANCE
// -om se oslobadjamo suvisnog coda

// POLYMORPHISM
// -om refaktorisemo ruzni switch case statement
// koji bi se inace koristio da odredi razlicito ponasanje istih metoda
// u razlicitim situacijama

/////////////////////////////PRACTICE

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw() {
//     console.log("draw");
//   },
// };

// circle.draw();

// factory function koristi return

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle2 = createCircle(2);
// circle2.draw();

// Construction function koristi this keyword

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);
// another.draw();
// svaki objekat u sebi sadrzi built in construction function
// koja pravi new object i koristi this keyword
// console.log(another.constructor);

//funkcije su objekti i sve unutar js je objekat

// const Circle1 = new Function(
//   "radius",
//   `
// this.radius = radius;
// this.draw = function () {
//   console.log("draw");
// };
// `
// );

// const circle = new Circle1(2);
// console.log(circle);
// circle.draw();
