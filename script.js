const container = document.getElementById("container");
const text = document.getElementById("text");
const num = document.getElementById("num");
const hide = document.getElementById("hide");
const btn = document.getElementById("btn");
const settings = document.getElementById("settings");
const option = document.getElementById("option");
let selectNbrBrth = document.getElementById("n");
let count = 0,
  circleCount = 0,
  countHold = 0,
  timeSecond = 60,
  timeSecond1 = -1,
  countDown,
  id,
  stop,
  count1,
  p,
  countOfBrthinCircle,
  countOfBrth,
  countOfBrth1,
  dataBreath,
  dataBreath1;

//----------------------------------------------------------------------------------------------------
const totalTime = 4000; /*4000 normal */
const breatheTime = 1500; /*1700 normal */

// **************************************************************************************************
// Funkcije
//***************************************************************************************************
function breathAnimation() {
  count++;
  hide.classList.remove("hide");
  text.innerText = "Breathe In!";
  num.innerText = count;
  container.className = "container grow";
  stop = setTimeout(() => {
    text.innerText = "Breathe Out!";
    container.className = "container shrink";
  }, breatheTime);
  stoping();
}

function start() {
  breathAnimation();
  id = setInterval(breathAnimation, totalTime);
  option.classList.add("hide");
}

function stoping() {
  if (count > countOfBrthinCircle) {
    clearInterval(id);
    clearTimeout(stop);
    hide.classList.add("hide");
    num.innerText = " ";
    text.innerText = " ";
    container.className = "container shrink";
    holdBreath();
  }
}

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  num.innerText = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
}

function holdBreath() {
  countDown = setInterval(() => {
    timeSecond--;
    text.innerText = "Hold your breathd";
    displayTime(timeSecond);
    if (timeSecond <= 0 || timeSecond < 1) {
      clearInterval(countDown);
      timeSecond1 = -1;
      newFunction();
    }
  }, 1000);
}

function newFunction() {
  breathdInHold();
}

function breathdInHold() {
  count1 = setInterval(() => {
    timeSecond1++;
    text.innerText = "BREATHD IN and hold 15sec";
    displayTime(timeSecond1);
    if (timeSecond1 > 17 || timeSecond1 >= 16) {
      clearInterval(count1);
      check();
      countHold = 0;
      count = 0;
      circleCount++;
      text.innerText = "";
      num.innerText = "";

      breathAnimation();
      id = setInterval(breathAnimation, totalTime);
    }
  }, 1000);
}

function check() {
  // funkcija koja provjerava krugove treba update!
  if (circleCount === 0) {
    timeSecond = 75;
  } else if (circleCount === 1) {
    timeSecond = 90;
  } else {
    timeSecond = 105;
  }
}

function stopingAll() {
  // finkcija koja sve zausatavalja. -->
  count = 0;
  count1;
  circleCount = 0;
  countHold = 0;
  timeSecond = 60;
  timeSecond1 = -1;
  container.className = "container shrink";
  clearInterval(id);
  clearTimeout(stop);
  clearInterval(count1);
  clearInterval(countDown);
  hide.classList.add("hide");
  num.innerText = " ";
  text.innerText = " ";
  let btn = document.createElement("button");
  btn.setAttribute("id", "but");
  btn.innerHTML = "START";

  btn.onclick = function () {
    start();
  };
  text.appendChild(btn);
  option.classList.remove("hide");
}

//****************************************************************************************** */
// settings funkcije
//****************************************************************************************** */
function settingsBtn() {
  container.classList.add("hide");
  settings.classList.remove("hide");
  option.classList.add("hide");
}

function save() {
  container.classList.remove("hide");
  settings.classList.add("hide");
  option.classList.remove("hide");
}

// **************************************************************************************************
// localStorage
//***************************************************************************************************

if (localStorage.getItem("valueBrth") === null) {
  breRepeat();
}

countOfBrth1 = localStorage.getItem("valueBrth");
countOfBrthinCircle = parseInt(countOfBrth1);

countOfBrth = localStorage.getItem("dataFromSelect");
selectNbrBrth.selectedIndex = countOfBrth;

function breRepeat() {
  dataBreath1 = selectNbrBrth.options[selectNbrBrth.selectedIndex].value;
  localStorage.setItem("valueBrth", dataBreath1);

  dataBreath = selectNbrBrth.selectedIndex;
  localStorage.setItem("dataFromSelect", dataBreath);
}

