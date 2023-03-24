// --------- ELEMENTER ----------------------------------------------------
const dragFoodBox = document.querySelectorAll(".foodcontainer article");
const targetAnimal = document.querySelectorAll(".animal div");

const pointBox = document.querySelector("#score span");
const foodBox = document.querySelector("#foods .foodcontainer");

// ------  event listener for drag og drop elementer ---------------------
dragFoodBox.forEach(function (element) {
  element.addEventListener("dragstart", startDrag);
});

targetAnimal.forEach(function (element) {
  element.addEventListener("dragover", cancelDefault);
  element.addEventListener("drop", dropMad);
});

// --------- AUDIO ------------------------------------------------------

const successAudio1 = new Audio("audio/succes1_lion.mp3");
const successAudio2 = new Audio("audio/succes2_lion.mp3");
const successAudio3 = new Audio("audio/succes3_lion.mp3");
const successAudio4 = new Audio("audio/succes1_monkey.mp3");
const successAudio5 = new Audio("audio/succes2_monkey.mp3");
const successAudio6 = new Audio("audio/succes3_monkey.mp3");
const successAudio7 = new Audio("audio/succes1_elephant.mp3");
const successAudio8 = new Audio("audio/succes2_elephant.mp3");
const successAudio9 = new Audio("audio/succes3_elephant.mp3");
const failureAudio = new Audio("audio");
failureAudio.load();

// ------- KNAPPER --------------------------------------------------------

const catchButton = document.querySelector(".catch");
  const freeButton = document.querySelector(".free");
  const catchAudio = document.querySelector("#catchAudio");
  const freeAudio = document.querySelector("#freeAudio");
  
// event listener for click audio knap
  catchButton.addEventListener("click", () => {
    catchAudio.currentTime = 0;
    catchAudio.play();
  
    
  });

  freeButton.addEventListener("click", () => {
    freeAudio.currentTime = 0;
    freeAudio.play();
  });

// ---------- FUNKTIONER ----------------------------------------

function startDrag(event) {
  event.dataTransfer.setData("foodId", this.id);
  event.dataTransfer.setData("foodName", this.dataset.food);
}

function cancelDefault(event) {
  event.preventDefault();
}

function dropMad(event) {
  event.preventDefault();
  const foodId = event.dataTransfer.getData("foodId");
  const foodName = event.dataTransfer.getData("foodName");
  const targetId = this.id;
  const targetDataFood = this.dataset.food;

  if (foodName === targetDataFood) {
    const hearts = this.querySelectorAll("p > .heart");
    const heartCount = hearts.length + 1;
    const fontSize = heartCount * 55; 
    /*const successAudio = this.querySelector("audio");
    successAudio.play();*/
    

    // ----- Afspil audiofiler ved korrekt maddrop -----------------

    if (hearts.length === 0) {
      successAudio1.play();
    } else if (hearts.length === 1) {
      successAudio2.play();
    } else if (hearts.length === 2) {
      successAudio3.play();
    } else if (hearts.length === 3) {
    successAudio4.play();
    } else if (hearts.length === 4) {
    successAudio5.play();
    } else if (hearts.length === 5) {
    successAudio6.play();
    } else if (hearts.length === 6) {
    successAudio7.play();
    } else if (hearts.length === 7) {
      successAudio8.play();
    } else if (hearts.length === 8) {
      successAudio9.play();
    }


    hearts.forEach(function (heart) {
      heart.remove();
    });

    const p = this.querySelector("p");
    const emoji = p.textContent.trim();

    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement("span");
      heart.classList.add("heart");
      heart.innerHTML = "";
      p.appendChild(heart);
    }

    p.style.fontSize = fontSize + "px";
    pointBox.innerHTML = parseInt(pointBox.innerHTML) + 100;
  } else {
    failureAudio.play();
    alert("Ups! Forkert mad");
  }
  
}


for (let i = 0; i < array.length; i++) {
  const element = array[i];
  
}
