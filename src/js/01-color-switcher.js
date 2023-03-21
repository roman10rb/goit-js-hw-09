
const refs = {
    start: document.querySelector("[data-start]"),
    stop: document.querySelector("[data-stop]"),
    body: document.body,
};

let olreadyStart = null;

refs.start.addEventListener('click', (e) => {
    if (olreadyStart) {
        return;
    };
    colorInterval = setInterval(() => {
        olreadyStart = true;
        e.target.disabled = true;
        refs.stop.disabled = false;
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
   
});



 refs.stop.addEventListener('click', (e) => {
      clearInterval(colorInterval);
     e.target.disabled = true;
        olreadyStart = false;
     refs.start.disabled = false;
     
});














function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}