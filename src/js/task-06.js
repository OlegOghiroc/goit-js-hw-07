const validationInputEl = document.querySelector('#validation-input');
const dataLengthEl = document.querySelector('[data-length="6"]')

validationInputEl.addEventListener('blur', onBlurtEl);
console.log(dataLengthEl.value.length)



function onBlurtEl(event) {
    const inputText = event.currentTarget;
    console.log(inputText.value.length)
    
    if (inputText.value.length === 6) {
        validationInputEl.classList.remove('invalid');
        validationInputEl.classList.add('valid');
    } else {validationInputEl.classList.add('invalid');} 
   
}