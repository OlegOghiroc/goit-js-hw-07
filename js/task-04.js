let counterValue = 0;

const startValue = document.querySelector('#value');
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

decrement.addEventListener('click', (event) => {
    counterValue -= 1;
    return startValue.textContent = counterValue;
});
increment.addEventListener('click', (event) => {
    counterValue += 1;
    return startValue.textContent = counterValue;
});