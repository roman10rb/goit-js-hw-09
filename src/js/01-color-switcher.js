
const refs = {
    start: document.querySelector("[data-start]"),
    stop: document.querySelector("[data-stop]"),
    body: document.body,
};

let olreadyStart = null;

refs.start.addEventListener('click', () => {
    if (olreadyStart) {
        return;
    };
    colorInterval = setInterval(() => {
        olreadyStart = true;
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
   
});



 refs.stop.addEventListener('click', () => {
    clearInterval(colorInterval);
        olreadyStart = false;

});














function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}