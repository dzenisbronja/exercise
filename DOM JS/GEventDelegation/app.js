//event delegation

// it allows users to append a SINGLE event listener to a parent element
//that adds it to all of its present AND future descendants that match a selector

// document.querySelector("#football").addEventListener("click", function (e) {
//   console.log("footbal is clicked");

//   const target = e.target;

//   if (target.matches("li")) {
//     target.style.backgroundColor = "blue";
//   }
// });      OVO JE NACIN KOJIM MORAMO ZA SVAKO DUGME DA ISPISEMO PO OVOLIKI CODE

// OVO JE NACIN KOJIM CEMO LISTENER ZAKACITI NA PARENTA I OPTIMIZIRATI CODE

document.querySelector("#sports").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id") + " is clicked");

  const target = e.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "blue";
  }
});

const sports = document.querySelector("#sports");
const newSport = document.createElement("li");

newSport.innerText = "rugby";
newSport.setAttribute("id", "rugby");

sports.append(newSport);
