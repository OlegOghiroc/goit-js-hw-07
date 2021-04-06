const categoriesEl = document.querySelectorAll('ul');
console.log(`В списке ${categoriesEl.length - 1} категории.`);

// First wey
const itemsEl = document.querySelector('.item');
console.log(`Категория:${itemsEl.firstElementChild.textContent}`);
const valueItemsFirst = itemsEl.querySelectorAll('.item ul li');
console.log(`Количество элементов:${valueItemsFirst.length}`);

console.log(`Категория:${itemsEl.nextElementSibling.firstElementChild.textContent}`);
console.log(`Количество элементов:${itemsEl.nextElementSibling.lastElementChild.children.length}`);

console.log(`Категория: ${itemsEl.nextElementSibling.nextElementSibling.firstElementChild.textContent}`);
console.log(`Количество элементов:${itemsEl.nextElementSibling.nextElementSibling.lastElementChild.children.length}`);

// Second wey
const el = document.querySelector('#categories')

console.log(el.children[0].firstElementChild.textContent);
console.log(el.children[0].lastElementChild.children.length)

console.log(el.children[1].firstElementChild.textContent);
console.log(el.children[1].lastElementChild.children.length)

console.log(el.children[2].firstElementChild.textContent);
console.log(el.children[2].lastElementChild.children.length)
