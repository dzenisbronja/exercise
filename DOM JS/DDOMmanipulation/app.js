// EVENT LISTENERS

// prvi nacin je preko OCLICK-a, primer prvog dugmeta

// drugi je EVENT LISTENER => element.addEventListener("click",function)

const buttonTwo = document.querySelector(".btn-2");

buttonTwo.addEventListener("click", () => alert("dodao sam event listener"));
// moze biti bolja praksa da se u zagradi poziva samo ime funkcije koju smo
// prethodno napravili (callback function), a ne da se pravi na licu mesta

// treci nacin je MOUSEOVER (kada hover-amo)

const newBackgroundColor = document.querySelector(".box-3");

function changeBgColor() {
  newBackgroundColor.style.backgroundColor = "blue";
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);
