// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
// текст заголовка элемента (тега h2) и количество элементов в категории
// (всех вложенных в него элементов li).

const numberOfCategories = document.querySelectorAll('.item');
console.log(`В списке ${numberOfCategories.length} категории.`);

for (let node of document.querySelectorAll('.item')) {
  console.log(`Категория: ${node.querySelector('h2').textContent} 
  Колличество элементов: ${node.querySelectorAll('li').length}`);
}
