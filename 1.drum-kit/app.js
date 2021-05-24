function playSound(e) {
  let dataVal;
  if (e.type === "mousedown") dataVal = this.getAttribute("data-key");
  else dataVal = e.keyCode;

  const audio = document.querySelector(`audio[data-key="${dataVal}"]`);

  const key = document.querySelector(`div[data-key="${dataVal}"]`);

  if (!audio) return;
  
  key.classList.add("playing");

  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
keys.forEach((key) => key.addEventListener("mousedown", playSound));
