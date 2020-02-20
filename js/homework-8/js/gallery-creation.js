import galleryItems from './gallery-items.js';
const refs = {
  gallery: document.querySelector('.js-gallery'),
  picture: document.querySelector('.lightbox__image'),
  lightbox: document.querySelector('.js-lightbox'),
  button: document.querySelector('.lightbox__button'),
  img: document.querySelector('.gallery__image'),
};

const drawToHTML = galleryItems
  .map(
    (elem, index) =>
      `<li class='gallery__item'>
        <a target="blank" class="gallery__link" href="${elem.original}">
        <img class="gallery__image" src="${elem.preview}" data-source="${elem.original}" data-index="${index}" alt="${elem.description}"/>
        </a>
    </li>`,
  )
  .join(' ');
refs.gallery.insertAdjacentHTML('afterbegin', drawToHTML);

const handleOriginalImage = function(evt) {
  evt.preventDefault();
  const { target } = evt;
  refs.picture.setAttribute('src', target.dataset.source);
  refs.picture.setAttribute('alt', target.alt);
  refs.lightbox.classList.add('is-open');
  refs.picture.setAttribute('data-index', target.dataset.index);
};

const handleCloseModal = function() {
  refs.picture.removeAttribute('src');
  refs.picture.removeAttribute('alt');
  refs.lightbox.classList.remove('is-open');
};

const handleClose = () => {
  handleCloseModal();
};

const handleCloseEsc = function(evt) {
  if (evt.key === 'Escape') {
    handleCloseModal();
  }
};

const setNextImg = function(evt) {
  if (!refs.picture.dataset.index) return;
  let index = +refs.picture.dataset.index;
  if (evt.key === 'ArrowRight') {
    if (index === galleryItems.length - 1) return;
    index += 1;
    open(index);
    return;
  }
  if (evt.key === 'ArrowLeft') {
    if (index === 0) return;
    index -= 1;
    open(index);
    return;
  }
};

const open = i => {
  refs.picture.setAttribute('src', galleryItems[i].original);
  refs.picture.setAttribute('alt', galleryItems[i].original);
  refs.picture.setAttribute('data-index', [i]);
};

refs.gallery.addEventListener('click', handleOriginalImage);
refs.button.addEventListener('click', handleCloseModal);
refs.lightbox.addEventListener('click', handleClose);
refs.gallery.addEventListener('keydown', handleCloseEsc);
refs.gallery.addEventListener('keydown', setNextImg);
