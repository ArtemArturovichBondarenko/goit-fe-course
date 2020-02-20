const refs = {
  body: document.querySelector('body'),
  input: document.querySelector('.js-switch-input'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const handleChangeInput = e => {
  if (e.target.checked) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);

    localStorage.setItem('theme', Theme.DARK);
  }

  if (!e.target.checked) {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);

    localStorage.setItem('theme', Theme.LIGHT);
  }
};

const themeNow = localStorage.getItem('theme');

if (themeNow === Theme.DARK) {
  refs.input.checked = true;
  refs.body.classList.add(Theme.DARK);
}

if (themeNow === Theme.LIGHT) {
  refs.input.checked = false;
  refs.body.classList.add(Theme.LIGHT);
}
refs.input.addEventListener('change', handleChangeInput);
