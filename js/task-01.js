const categoriesEl = document.querySelectorAll('#categories .item');
console.log(`В списке ${categoriesEl.length} категории.`);

categoriesEl.forEach(categori => {
    console.log(`Категория:${categori.querySelector('h2').textContent}`)
    console.log(`Количество элементов:${categori.querySelectorAll('li').length}`);
    
})

