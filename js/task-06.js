const validationInputEl = document.querySelector('#validation-input');
const dataLengthEl = document.querySelector('[data-length="6"]')

validationInputEl.addEventListener('blur', onBlurtEl);
console.log(dataLengthEl.dataset.length)



function onBlurtEl(event) {
    const inputText = event.currentTarget;
    console.log(inputText.value.length)
    
    if (inputText.value.length < dataLengthEl.dataset.length || inputText.value.length > dataLengthEl.dataset.length) {
       
        validationInputEl.classList.add('invalid');
    } else {
        validationInputEl.classList.remove('invalid');
        validationInputEl.classList.add('valid');
    }
   
}