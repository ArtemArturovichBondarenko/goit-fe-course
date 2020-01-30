// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

const input = document.querySelector('#validation-input');
input.addEventListener('blur', changeBorder);
function changeBorder() {
  if (input.value.length > 5 && input.value.length < 7) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
