// Напиши скрипт который, при наборе текста в инпуте
// input#name-input (событие input), подставляет его текущее значение
// в span#name-output. Если инпут пустой, в спане должна
// отображаться строка 'незнакомец'.

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', handleInputChange);
console.log(input.textContent)
function handleInputChange(event) {
  if (input.value === '') {
    output.textContent = 'незнакомец';
  } else {
    output.textContent = event.currentTarget.value;
  }
}
