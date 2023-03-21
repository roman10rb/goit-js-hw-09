// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix'; 


const startBtn = document.querySelector('button');

startBtn.disabled = 'true';

const refs = {
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]"),
};



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      chooseDate = selectedDates[0].getTime();
      
      if (selectedDates[0] < Date.now()) {
        Notiflix.Notify.failure('Please choose a date in the future');
        startBtn.disabled = 'true';
          return;
           };
           startBtn.disabled = 'false';
      changeTimer();
      timerMs = chooseDate - Date.now();
     
    },
    
};

const drawTimer = ({ days, hours, minutes, seconds }) => {
  refs.days.textContent = `${days}`;
        refs.hours.textContent = `${hours}`;
        refs.minutes.textContent = `${minutes}`;
        refs.seconds.textContent = `${seconds}`;
};

const changeTimer = () => {
  timerMs = chooseDate - Date.now();
  let { days, hours, minutes, seconds } = convertMs(timerMs);
  drawTimer({ days, hours, minutes, seconds });
  if (days === '00' && hours === '00' && minutes === '00' && seconds === '00') {
    clearInterval(idInterval);
  }
};


const handleClickTimer = () => {
  startBtn.disabled = true;

  idInterval = setInterval(changeTimer, 1000);
};

startBtn.addEventListener('click', handleClickTimer);

flatpickr("#datetime-picker", options);

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
 // {days: 0, hours: 6 minutes: 42, seconds: 20}