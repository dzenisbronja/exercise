var car = { 
  registrationNumber: "GA12345",
  brand: "Toyota",

  displayDetails: function(){
      console.log(this.registrationNumber + " " + this.brand);
  }
}
// car.displayDetails()

//////////////////bind povezuje funkciju sa objektom u kome se nalazi (this-om) 
///////////////// 'menja' this(window) object sa konkretnim objektom (onim u kojem se nalazi)

var myCarDetails = car.displayDetails.bind(car)
// myCarDetails()

var car = { 
  registrationNumber: "GA12345",
  brand: "Toyota",

  displayDetails: function(ownerName){
      console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
  }
}

var myCarDetails = car.displayDetails.bind(car, 'Victor');
// myCarDetails()


////////call and apply povezuju funkciju sa nekim objektom 
////////i apply koristi samo niz parametara kao parametar, dok call korisiti parametre same i niz parametara

var car = { 
  registrationNumber: "GA12345",
  brand: "Toyota"
}

function displayDetails(ownerName) {
  console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
}

// displayDetails.apply(car, ['Victor'])
// displayDetails.call(car, ['Victor'])
// displayDetails.call(car, 'Victor')


