let car = {
  registrationNumber: "GA12345",
  brand: "Toyota",

  displayDetails() {
    console.log(this.registrationNumber + " " + this.brand);
  },
};

// console.log(car)
// car.displayDetails()
/////////////////////////////////////////////////////BIND//////////////////////////////////////////////////

let myCarDetails = car.displayDetails.bind(car);
// myCarDetails()

let car2 = {
  registrationNumber: "GT13305",
  brand: "Lada",

  displayDetails(ownerName, amount) {
    console.log(
      ownerName +
        " this is your car " +
        this.registrationNumber +
        " " +
        this.brand +
        " and you need to pay " +
        amount +
        " $"
    );
  },
};

// car2.displayDetails('bekir', 300)

// let myCarInvoice = car2.displayDetails.bind(car2,'bekir', 300)
// myCarInvoice()

let myCarInvoice2 = car2.displayDetails.bind(car2); ///isto sto i gornja, samo sto je ova
// myCarInvoice2('bekir', 300)                       ///zapravo reusable nova funkcija

let car3 = {
  registrationNumber: "SD13305",
  brand: "McL",

  displayDetails(ownerName, amount) {
    console.log(
      ownerName +
        " this is your car " +
        this.registrationNumber +
        " " +
        this.brand +
        " and you need to pay " +
        amount +
        " $"
    );
  },
};

let myCarTicket = car3.displayDetails.bind(car3);
// myCarTicket('Brksa', 3000)

const users = [
  {
    name: "saladin",
    profession: "car detailer",
    id: 1,
    sayHello() {
      console.log(
        "Hello " +
          this.name +
          " you are " +
          this.profession +
          " and your id is " +
          this.id
      );
    },
  },
  {
    name: "medin",
    profession: "mehanic",
    id: 2,
    sayHello() {
      console.log(
        "Hello " +
          this.name +
          " you are " +
          this.profession +
          " and your id is " +
          this.id
      );
    },
  },
  {
    name: "dedin",
    profession: "old man",
    id: 3,
    sayHello() {
      console.log(
        "Hello " +
          this.name +
          " you are " +
          this.profession +
          " and your id is " +
          this.id
      );
    },
  },
  {
    name: "kredin",
    profession: "old lady",
    id: 4,
    sayHello() {
      console.log(
        "Hello " +
          this.name +
          " you are " +
          this.profession +
          " and your id is " +
          this.id
      );
    },
  },
  {
    name: "rastko",
    profession: "parasit",
    id: 5,
    sayHello() {
      console.log(
        "Hello " +
          this.name +
          " you are " +
          this.profession +
          " and your id is " +
          this.id
      );
    },
  },
];

// users.map(el => el.sayHello())

const changeProfessionByName = (name, newProf) => {
  const newArray = users.map((el) => {
    if (name === el.name) {
      return { ...el, profession: newProf };
    } else {
      return el;
    }
  });
  return newArray;
};

const updatedArray = changeProfessionByName("rastko", "pastir");
console.log(updatedArray);

const myBind = (el) => {
  return el.sayHello.bind(el);
};

const boundFunctions = users.map(myBind);

boundFunctions.forEach((func) => func());

function fun() {
  let b = 3;
  return b;
}

const druga = fun();

function funB() {
  console.log(druga);
}

funB();

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
