import dogs from "./data.js";
import Dog from "./Dog.js";

let dogCounter = 0;
let dog = getNewDog();
let winnerKnown = false;

function getNewDog() {
  dogCounter = dogCounter < dogs.length ? dogCounter : 0;
  return new Dog(dogs[dogCounter++]);
}

function render() {
  document.getElementById("main").innerHTML = dog.getDogHtml();
  if (dogs.length === 1) {
    dog.getWinnerHtml();
    winnerKnown = true;
  }
}

document.getElementById("footer__like").addEventListener("click", function () {
  if (!dog.hasBeenSwiped && !winnerKnown) {
    dog.getLikeHtml();
    dog.hasBeenSwiped = true;
    dog.hasBeenLiked = true;
    setTimeout(() => {
      dog = getNewDog();
      render();
    }, 1000);
  }
});

document.getElementById("footer__nope").addEventListener("click", function () {
  if (!dog.hasBeenSwiped && !winnerKnown) {
    dog.getNopeHtml();
    dog.hasBeenSwiped = true;
    if (dogs.length > 1) {
      dogs.splice(dogCounter - 1, 1);
      dogCounter--;
    }
    setTimeout(() => {
      dog = getNewDog();
      render();
    }, 1000);
  }
});

render();
