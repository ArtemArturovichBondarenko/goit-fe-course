// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;

const result = document.querySelector('#value');

const increment = () => {
  counterValue += 1;
  result.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  result.textContent = counterValue;
};

document
  .querySelector('#counter button[data-action="increment"]')
  .addEventListener('click', increment);

document
  .querySelector('#counter button[data-action="decrement"]')
  .addEventListener('click', decrement);
