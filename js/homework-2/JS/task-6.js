let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');
  const inputNumber = Number(input);
  if (inputNumber === null && inputNumber === 0) {
    break;
  } else if (Number.isNaN(inputNumber)) {
    alert('Было введено не число, попробуйте еще раз');
  }
  numbers.push(inputNumber);
} while (input !== null && input !== 0);
for (const number of numbers) {
  total += number;
}
console.log(`Общая сумма чисел равна ${total}`);
