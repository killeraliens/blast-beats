'use strict';

const traditional = document.getElementById("traditional");
const hammer = document.getElementById("hammer");
const bomb = document.getElementById("bomb");
const freehand = document.getElementById("freehand");
const title = document.getElementById("title");

const display = document.getElementById("display");
const description = document.getElementById("description");
const nav = document.getElementById("nav");
const btns = document.getElementsByClassName("btn");

// const displayAction = (e) => {
//   const dispTraditional = "https://www.youtube.com/embed/UXqFP2Inil8";
//   const dispHammer = "https://www.youtube.com/embed/EjIhXO3OFdg";
//   const dispBomb = "https://www.youtube.com/embed/B4KNXi-SWWc";
//   const dispFreehand = "https://www.youtube.com/embed/P2Z7eksx4ck";

//   description.classList.add("hidden");

//   if (e.target.innerHTML === "Traditional") {
//     display.src = dispTraditional;
//     display.classList.remove("hidden");
//   } else if (e.target.innerHTML === "Hammer") {
//     display.src = dispHammer;
//     display.classList.remove("hidden");
//   } else if (e.target.innerHTML === "Bomb") {
//     display.src = dispBomb;
//     display.classList.remove("hidden");
//   } else if (e.target.innerHTML === "Freehand") {
//     display.src = dispFreehand;
//     display.classList.remove("hidden");
//   } else if (e.target.innerHTML.includes("Variant")) {
//     description.classList.remove("hidden");
//     display.classList.add("hidden");
//   }
// }

// const buttons = [traditional, hammer, bomb, freehand, title];
// buttons.forEach(button => {
//   button.addEventListener('click', displayAction);
// });


// refactored
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace("active", "");
      }
      if (this.id !== "title" ) {
        this.className += " active";
      }
    })
  }

  const hideDescription = () => {
    description.classList.add("hidden");
    display.classList.remove("hidden");
  }

  const dispTraditional = () => {
    hideDescription();
    display.src = "https://www.youtube.com/embed/UXqFP2Inil8";
  };

  const dispHammer = () => {
    hideDescription();
    display.src = "https://www.youtube.com/embed/EjIhXO3OFdg";
  };

  const dispBomb = () => {
    hideDescription();
    display.src = "https://www.youtube.com/embed/B4KNXi-SWWc";
  };

   const dispFreehand = () => {
    hideDescription();
    display.src = "https://www.youtube.com/embed/P2Z7eksx4ck";
  };

  const dispDescription = () => {
    description.classList.remove("hidden");
    display.classList.add("hidden");
  };


  traditional.addEventListener('click', dispTraditional);
  hammer.addEventListener('click', dispHammer);
  bomb.addEventListener('click', dispBomb);
  freehand.addEventListener('click', dispFreehand);
  title.addEventListener('click', dispDescription);



