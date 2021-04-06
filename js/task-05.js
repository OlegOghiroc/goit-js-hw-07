const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input',(evt) => {
    evt.preventDefault();
    nameOutputEl.textContent = nameInputEl.value;
})