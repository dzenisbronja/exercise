//DOM Manipulation

//GetElementById('') =>obavezno je da id bude inside qouts ' ' || " "

const title = document.getElementById("main-heading");

console.log(title);

//GetElementByClassName() => vraca sve elemente sa tim className-om

// const listItem = document.getElementsByClassName("list-items");
// console.log(listItem);

//GetElementByTagName() => skoro identican ByClassName-u, samo sto uzima tag (h1,p,div...)

const listItem = document.getElementsByTagName("li");
console.log(listItem);

//querySelector() => se koristi sa match-uje prvi item koji se poklapa sa zadatim imenom
// sto znaci da ukoliko se nadje vise elemenata sa istim className, id or tag
// on ce da izabere samo prvi koji mu naidje (prihvata sve: className, id, tag )

// const container = document.querySelector("div");
// console.log(container);

//querySelectorAll() => radi sve isto sto i  querySelector(), samo sto ne uzima only
// first one koji se poklopi, nego sve elemente koji se match-uju

const container = document.querySelectorAll("div");
console.log(container);
