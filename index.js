let pcAnswer       = document.querySelector('.pcAnswer');
const startGame    = document.querySelector('.startGame');
const butU         = document.querySelector('.butU');
const butD         = document.querySelector('.butD');
const corBut       = document.querySelector('.corBut');

butU.style.display = "none";
butD.style.display = "none";
corBut.style.display = "none";

startGame.addEventListener("click", () => {
  pcAnswer.innerHTML = "50?";
  localStorage.setItem("min" , 0);
  localStorage.setItem("max" , 100);
  localStorage.setItem("guess", 50);
  butU.style.display = "inline-block";
  butD.style.display = "inline-block";
  corBut.style.display = "inline-block";
});

butU.addEventListener("click", () => {
  let max   = localStorage.getItem("max");
  let guess = localStorage.getItem("guess");
  let prediction = Math.floor( ( Number(max) + Number(guess) )/2);
  pcAnswer.innerHTML = prediction + "?";
  localStorage.setItem("guess" , prediction);
  localStorage.setItem("min" , guess);
});

butD.addEventListener("click", () => {
  let min = localStorage.getItem("min");
  let guess = localStorage.getItem("guess");
  let prediction = Math.floor( ( Number(guess) + Number(min))/2);
  pcAnswer.innerHTML = prediction + "?";
  localStorage.setItem("guess" , prediction);
  localStorage.setItem("max" , guess);
});

corBut.addEventListener("click", () => {
  pcAnswer.innerHTML = " ";
  localStorage.clear();
  butU.style.display = "none";
  butD.style.display = "none";
  corBut.style.display = "none";
});
