function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //stope the function from running all together
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add("playing");
}

function removeTrasition(e) {
  if (e.propertyName !== "transform") return; //skip if it's not a transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTrasition));
window.addEventListener("keydown", playSound);
