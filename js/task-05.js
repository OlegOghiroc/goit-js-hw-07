const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

const textEl = nameOutputEl.textContent;

nameInputEl.addEventListener('input',(evt) => {
    evt.preventDefault();
    nameOutputEl.textContent = nameInputEl.value;
    if (evt.currentTarget.value === '') {
        nameOutputEl.textContent = textEl
    }
    console.log(nameInputEl);
})