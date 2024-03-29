const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryList = document.querySelector('#gallery');
const onImageGalery = images.map(({ url, alt }) => {
  return `<li class="galleryItem"><img src="${url}" alt="${alt}"  width="300" height="300"></li>`;
}).join('');

galleryList.insertAdjacentHTML('afterbegin',onImageGalery);








// const onGaleryMaker = images.map(image => {
//   const itemEl = document.createElement('li');
//   itemEl.style.margin = '20px';
//   itemEl.insertAdjacentHTML('afterbegin', `<img src='${image.url}' alt='${image.alt}' width ='400px' height = '300px'>`)
//   return itemEl;
// })

// galleryList.append(...onGaleryMaker)