import Notiflix from 'notiflix'; 

const submitForm = document.querySelector('.form');
const delayEl = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');



function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay)
  });
  
};



function handleSubmitForm(event) {
  event.preventDefault();
   const amountOfPromise = Number(amountEl.value);
   let delay = Number(delayEl.value);
  const stepPromise = Number(stepEl.value);
  if (delay < 0 || stepPromise < 0 || amountOfPromise <= 0) {
    Notiflix.Notify.failure(`❌ Promise can't be created `);
    return;
  }
  for (let i = 0; i < amountOfPromise; i += 1) {

    createPromise(i+1, delay).then(({ position, delay }) =>
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      )
      .catch(({ position, delay }) =>
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      );
    delay += stepPromise;
  };

};
submitForm.addEventListener('submit', handleSubmitForm);




