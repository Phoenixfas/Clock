setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}
setClock();

const swich = document.getElementById("switch");
const btn = document.getElementById("btn");
const body = document.querySelector("body");
let nightMode = true;
btn.addEventListener("click", function () {
  if (nightMode) {
    nightMode = false;
    btn.style.transform = "translateX(100%)";
    btn.style.backgroundImage = "url(./images/day.png)";
    btn.style.backgroundColor = "#111";
    body.style.backgroundColor = "#ddd";
    swich.style.borderColor = "#000";
  } else {
    nightMode = true;
    btn.style.transform = "translateX(0%)";
    btn.style.backgroundImage = "url(./images/night.png)";
    btn.style.backgroundColor = "#fff";
    body.style.backgroundColor = "#111";
    swich.style.borderColor = "#fff";
  }
});
