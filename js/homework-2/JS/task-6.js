let input;
const numbers = [];
let total = 0;

do {
  input = Number(prompt('Введите число'));
  if (input === null && input === 0) {
    break;
  } else if (Number.isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
  }
  numbers.push(input);
} while (input !== null && input !== 0);
for (const number of numbers) {
  total += number;
}
console.log(`Общая сумма чисел равна ${total}`);
