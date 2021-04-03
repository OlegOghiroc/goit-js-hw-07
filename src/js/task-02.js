const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const potatoEl = document.createElement('li');
potatoEl.textContent = 'Картошка';
const mushroomsEl = document.createElement('li');
mushroomsEl.textContent = 'Грибы';
const garlicEl = document.createElement('li');
garlicEl.textContent = 'Чеснок';
const tomatosEl = document.createElement('li');
tomatosEl.textContent = 'Помидоры';
const greenEl = document.createElement('li');
greenEl.textContent = 'Зелень';
const seasonsEl = document.createElement('li');
seasonsEl.textContent = 'Приправы';

const ingredients = document.querySelector('#ingredients');
ingredients.appendChild(potatoEl);
console.log(ingredients)