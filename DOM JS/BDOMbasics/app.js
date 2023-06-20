// STYLING ELEMENTS

// const title = document.querySelector("#main-heading");

// title.style.color = "red"; //most direct method to style

// const listItems = document.querySelectorAll(".list-items");

// // listItems.style.fontSize = "2rem"; //nece raditi na sve (all), ovako, mora petlja

// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].style.fontSize = "2rem";
// } //ovako ce da radi

// console.log(listItems);

//CREATING ELEMENTS

const ul = document.querySelector("ul");
const li = document.createElement("li");

// ADDING ELEMENT

ul.append(li);

// MODIFYING THE TEXT

// const firstListItem = document.querySelector(".list-items");

// console.log(firstListItem.innerText); // prikazuje vrednost - PREPORUKA
// console.log(firstListItem.textContent); // prikazuje vrednost kao na webu
// console.log(firstListItem.innerHTML); // kao content, ali sa tags, NE KORISTITI, SECURITY reasons

li.innerText = "X-men";

// MODIFYING ATRRIBUTES & CLASSES

// li.setAttribute("id", "main-heading");
// // prvo ide koji atribut dodajemo, drugo je njegovo ime, dodavsi mu ime po kome
// // su neki elementi uredjeni, on ce poprimiti njihovo stilizovanje
// li.removeAttribute("id");
// //ovako se uklanja atribut

// const title = document.querySelector("#main-heading");
// console.log(title.getAttribute("id")); //ovako dobijamo ime atributa / id-a

li.classList.add("list-items");
//ovako mu dodajemo classu, opet, ako je ista neki postojecim, poprimice stil

li.classList.remove("list-items"); //uklanja classu

console.log(li.classList.contains("list-items"));
// proverava da li ima neku trazenu classu i vraca boolean

//REMOVE ELEMENTS

li.remove();
