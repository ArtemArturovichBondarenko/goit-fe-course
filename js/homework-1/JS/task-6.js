// let getNum;
// let total = 0;

// do {
//   getNum = Number(prompt('Введите пожалуйста число'));
//   console.log(getNum);
//   total += getNum;
// } while (getNum !== 0);
// alert(`Общая сумма чисел равна ${total}`);

// let num = Number(prompt('Введите пожалуйста число'));
// let sum = 0;

// for (let i = 0; i === null; i += 1 ) {
//   sum += i;
// }

// console.log(sum);

//===================================================================

// const m = ['mango', 4, 10, 'apple'];
// for (let index = 0; index < m.length; index++) {
//   console.log('name : ', m[index]);
// }

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

// const numbers = [2, 56, 57, 23, 69, 2, 1];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число больше чем ${threshold}; ${numbers[i]}`);
// }

// const clients = ['mango', 5, 'join'];
// console.log(typeof clients);

// console.log(clients.join('-'));
// console.log(typeof clients);

// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// let fruit = prompt('Введите название ягоды');

// if (redFruits.includes(fruit)) {
//   сonsole.log('It is a red fruit!');
// } else {
//   console.log('not');
// }

//=================== ОШИБКА ???? ======================
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';

// if (redFruits.includes(fruit)) {
//   сonsole.log('It is a red fruit!');
// }

// const products = ['banana', 'orange', 'grape'];
// // for (let i = 0; i < products.length; i += 1) {
// //   console.log(`products: [${i}]:`, products[i]);
// // }
// for (const product of products) {
//   console.log(product);

//==============================================================================

// const numbers = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// for (let i = 0; i < numbers.length; i += 1) {
//   console.group(`Iteration ${i}`);
//   console.log('i: ', i);
//   console.log(`numbers[${i}]: `, numbers[i]);
//   for (let j = 0; j < numbers[i].length; j += 1) {
//     console.log('j: ', j);
//     console.log(`numbers[${i}][${j}]: `, numbers[i][j]);
//   }
//   console.groupEnd(`Iteration ${i}`);
// }

//=========================================================================

// const message = 'may the force by with you';
// const words = message.split(' ');
// let longestWord = words[0];

// for (let i = 0; i < words.length; i += 1) {
//   if (words[i].length > longestWord.length) {
//     longestWord = words[i];
//   }
// }

// for (const word of words) {
//   if (word.length > longestWord.length) {
//     longestWord = word;
//   }
// }
// console.log(words);
// console.log(longestWord);

//=======================================================

// const message = 'ww, rrrr, tty, uigut, obu, hvde';
// const words = message.split(', ');
// const max = words.length - 1;
// const leftCount = 4;
// const rightCount = 5;
// let target;
// for (let i = 1; i < max; i += 1) {
//   console.log(words[i]);
//   console.log(i);
//   const prevElementLengs = words[i - 1].length;
//   const nextElementLengs = words[i + 1].length;

//   if (prevElementLengs === leftCount && nextElementLengs === rightCount) {
//     target = words[i];
//   }
// }

// console.log(words);
// console.log(target);

//==========================================================
//===============ФУНКЦИИ=======================
// const findLongestWord = function(string) {
//   const words = string.split(' ');
//   let longestWord = words[0];
//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// };

// console.log(
//   findLongestWord(
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit Fuga adipisci minus culpa magnam commodi beatae',
//   ),
// );
