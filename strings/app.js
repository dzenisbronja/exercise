// kako primeniti splice na stringu

// let ime = "sead";
// let iseceno = ime.split("");
// console.log(iseceno);

// iseceno.splice(1, 0, "dsadsa");
// console.log(iseceno);

// iseceno.splice(0, 1, "prva");
// console.log(iseceno);

//1) 1.	Prebrojati koliko se puta u unetom stringu pojavljuje
// slovo "M" (i veliko i malo). Npr. za string 'Mama ima momu'

const recenica = "Mama ima momu";
let counter = 0;

//a)
for (let i = 0; i < recenica.length; i++) {
  if (recenica[i] === "m" || recenica[i] === "M") {
    counter++;
  }
}

console.log(counter);

//b) ili to lowerCase
for (let i = 0; i < recenica.length; i++) {
  if (recenica[i].toUpperCase === "M") {
    counter++;
  }
}

console.log(counter);

//2) koliko je karaktera

console.log(recenica.length);

//3) koliko ima malih slova
