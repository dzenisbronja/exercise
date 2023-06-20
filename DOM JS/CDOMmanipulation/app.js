// PARENT NODE TRAVERSAL => parent je SAMO jedan level iznad

// let ul = document.querySelector("ul");

// console.log(ul.parentNode); // ovako saznajemo ko je parent
// console.log(ul.parentElement); // ovako saznajemo ko je parent

// console.log(ul.parentNode.parentNode); // ovako saznajemo ko je grandparent
// console.log(ul.parentElement.parentElement); // ovako saznajemo ko je grandparent

// const html = document.documentElement;

// console.log(html.parentNode); // prepouka za koriscenje
// console.log(html.parentElement); // vraca null

// CHILD NODE TRAVERSAL

let ul = document.querySelector("ul");

// console.log(ul.childNodes);
// //vraca node listu od 11, jer broji razmake, ako obrsemo neki razmak smanjice se lista
// console.log(ul.firstChild); // pristupa prvom child i vraca #text value (value razmaka)
// console.log(ul.lastChild); // pristupa last child i vraca #text value (value razmaka)

// // kada hocemo da stilizujemo last ili first node, moramo biti OPREZNI

// // ul.firstChild.style.color = "red"; //vratice error jer nije element nego #text property (value razmaka)

// ul.childNodes[1].style.color = "red";
// //ovako smo preko index-a child node-a pristupili elementu i stilizovali ga

console.log(ul.children);
// ovako se pristupa direktno i samo elementimas i vraca HTML colekcijiu
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

ul.lastElementChild.style.backgroundColor = "blue";
//ovde se moze direktno raditi, jer kao vrednost vraca element

// SIBLING NODE TRAVERSAL
