import galleryItems from './gallery-items.js';
const refs = {
  gallery: document.querySelector('.js-gallery'),
  picture: document.querySelector('.lightbox__image'),
  lightbox: document.querySelector('.js-lightbox'),
  button: document.querySelector('.lightbox__button'),
};

const drawToHTML = galleryItems
  .map(
    elem =>
      `<li class='gallery__item'>
        <a target="blank" class="gallery__link" href="${elem.original}">
        <img class="gallery__image" src="${elem.preview}" data-source="${elem.original}" alt="${elem.description}"/>
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
refs.gallery.addEventListener('click', handleOriginalImage);
refs.button.addEventListener('click', handleCloseModal);
refs.picture.addEventListener('click', handleClose);
refs.gallery.addEventListener('keydown', handleCloseEsc);
