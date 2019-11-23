const CHINA = 'китай';
const CHILI = 'чили';
const AUSTRALIA = 'австралия';
const INDIA = 'индия';
const JAMAIKA = 'ямайка';

const PRICE_CHINA = 100;
const PRICE_CHILI = 250;
const PRICE_AUSTRALIA = 170;
const PRICE_INDIA = 80;
const PRICE_JAMAIKA = 120;

let message;

let delivery = prompt(
  'Укажите страну в которую необходимо осуществить доставку',
);

switch (delivery.toLowerCase()) {
  case CHINA:
    message =
      'Доставка в ' + CHINA + ' будет стоить ' + PRICE_CHINA + ' кредитов';
    break;
  case CHILI:
    message =
      'Доставка в ' + CHILI + ' будет стоить ' + PRICE_CHILI + ' кредитов';
    break;
  case AUSTRALIA:
    message =
      'Доставка в ' +
      AUSTRALIA +
      ' будет стоить ' +
      PRICE_AUSTRALIA +
      ' кредитов';
    break;
  case INDIA:
    message =
      'Доставка в ' + INDIA + ' будет стоить ' + PRICE_INDIA + ' кредитов';
    break;
  case JAMAIKA:
    message =
      'Доставка в ' + JAMAIKA + ' будет стоить ' + PRICE_JAMAIKA + ' кредитов';
    break;
  default:
    alert('В вашей стране доставка не доступна');
}

console.log(message);
