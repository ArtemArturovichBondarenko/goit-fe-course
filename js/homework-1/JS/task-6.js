let getNum;
let total = 0;

do {
  getNum = Number(prompt('Введите пожалуйста число'));
  console.log(getNum);
  total += getNum;
} while (getNum !== 0);
alert(`Общая сумма чисел равна ${total}`);
