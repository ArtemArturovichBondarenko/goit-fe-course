const ref = {
  nav: document.querySelector('.nav'),
  list: document.querySelector('.list'),
  listItem: document.querySelectorAll('.list-item'),
  btn: document.querySelector('.btn'),
};

// const baseComponent = {
//   urlToImage: 'https://www.w3schools.com/howto/img_snow.jpg',
// };

// // console.log(ref.nav.querySelector('.list').querySelectorAll('.list-item'))

// const chngeBackground = url => {
//   ref.nav.style.background = `url(${url})`;
// };

// // chngeBackground('https://www.w3schools.com/howto/img_snow.jpg');

// ref.listItem.forEach(elem => {
//   elem.style.color = 'red';
// });

// ref.btn.onclick = () => {
//   chngeBackground(baseComponent.urlToImage);
// };

// document.body.innerHTML =  `<div class="nav">
// <ul class="list">
//   <li class="list-item">HOME</li>
//   <li class="list-item">CONTACT</li>
//   <li class="list-item">ABOUT</li>
//   <li class="list-item">EXIT</li>
// </ul>
// </div>`

//------------------------------

const createElement = (tag, className) => {
  const elem = document.createElement(tag);
  elem.classList.add(className);
  return elem;
};

const res = createElement('div', 'box');

console.log(res);
