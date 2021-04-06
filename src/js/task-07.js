const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
console.log(fontSizeControlEl.value)

fontSizeControlEl.addEventListener('input',(e)=> {
    textEl.style.fontSize = e.target.value + 'px';
})