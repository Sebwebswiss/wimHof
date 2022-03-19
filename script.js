if(a==="" || a=== NaN){
  a=30;
}
getFontSize();
const container = document.getElementById("container");
const text = document.getElementById("text");
const num = document.getElementById("num");
const circle = document.getElementById("circle");
const hide = document.getElementById("hide");
const btn = document.getElementById("btn");
const settings= document.getElementById("settings");
const option= document.getElementById("option");
var a;
let count = 0;
let count1;
let circleCount = 0;
let countHold = 0;
let timeSecond = 90;
let timeSecond1 = -1;
var countDown;
var id;
var stop;



const totalTime = 4000;
const breatheTime = 1700;
// const holdTime = totalTime / 5;

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
  if (count > a) {
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
  if (circleCount === 0) {
    timeSecond = 105;
  } else if (circleCount === 1) {
    timeSecond = 120;
  } else {
    timeSecond = 135;
  }
}

function stopingAll() {
  count = 0;
  count1;
  circleCount = 0;
  countHold = 0;
  timeSecond = 90;
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
  btn.innerHTML = "START";

  btn.onclick = function () {
    start();
  };
  text.appendChild(btn);
  option.classList.remove("hide");
}

function test3(){
  container.classList.add("hide");
  settings.classList.remove("hide");
  option.classList.add("hide");
}

function test4(){
  container.classList.remove("hide");
settings.classList.add("hide");
option.classList.remove("hide");

fontSize();


}


//****************************************************************************************** */

function fontSize() {
  var select = document.getElementById("n");
  var listValue = select.options[select.selectedIndex].value;
  // select.style.fontSize = listValue;
  localStorage.setItem("ve", listValue);
}

function getFontSize() {
  var select = document.getElementById("n");
  select.value = localStorage.getItem("ve");
  let strToNbr= parseInt(select.value);
  a = strToNbr;
}