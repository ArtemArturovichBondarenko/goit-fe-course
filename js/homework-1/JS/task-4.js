let credits = 23580;
let pricePerDroid = 3000;

let Droid = prompt('Какое количество дроидов вам нужно ?');
let totalPrice = Number(Droid * pricePerDroid);
if (Droid === null) {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  console.log(
    'Вы купили ' +
      Droid +
      ' дроидов, на счету осталось ' +
      Number(credits - totalPrice) +
      ' кредитов.',
  );
}
