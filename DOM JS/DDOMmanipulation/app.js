// EVENT LISTENERS

// prvi nacin je preko onclic-a, primer prvog dugmeta

// drugi je event listener => element.addEventListener("click",function)

const buttonTwo = document.querySelector(".btn-2");

buttonTwo.addEventListener("click", () => alert("dodao sam event listener"));
// moze biti bolja praksa da se u zagradi poziva samo ime funkcije koju smo
// prethodno napravili (callback function), a ne da se pravi na licu mesta
