const img = document.getElementById("img");
const buttons = document.getElementById("buttons");
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
  breakAutomatic();
  turnOn[event.target.id]();
};

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeLight = () => {
  const colors = ["red", "yellow", "green"];
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
}

const breakAutomatic = () => {
  clearInterval ( intervalId );
}

const turnOn = {
  red:       () => (img.src = "./assets/img/vermelho.png"),
  green:     () => (img.src = "./assets/img/verde.png"),
  yellow:    () => (img.src = "./assets/img/amarelo.png"),
  automatic: () => intervalId = setInterval(changeLight, 1000)
}

buttons.addEventListener("click", trafficLight);

