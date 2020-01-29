// const numbers = [1, 2, 3, 4, 5];

// const products = [
//   { id: 'id-1', label: 'Apples', price: 100, quanity: 50 },
//   { id: 'id-2', label: 'Bananas', price: 120, quanity: 70 },
//   { id: 'id-3', label: 'Lemons', price: 70, quanity: 30 },
// ];

// const users = [
//     {id: 'id-1', name: 'Mango', isActive: true},
//     {id: 'id-2', name: 'Poly', isActive: false},
//     {id: 'id-3', name: 'Ajax', isActive: true},
//     {id: 'id-4', name: 'Chelsey', isActive: false},
// ];

//--------- map

// const numbers = [1, 2, 3, 4, 5];

// const dobuled = numbers.map(number => {
//   console.log(number * 2);
// });
//-------------------------------------------------------

// const products = [
//   { id: 'id-1', label: 'Apples', price: 100, quanity: 50 },
//   { id: 'id-2', label: 'Bananas', price: 120, quanity: 70 },
//   { id: 'id-3', label: 'Lemons', price: 70, quanity: 30 },
// ];
//--------- map через функцию

// const getLabels = products => {
//   return products.map(product => {
//     return product.label;
//   });
// };

//------------------------------------------------

// const getLabels = products => products.map(product => product.label);

// const labels = getLabels(products);
// console.table(labels);
//--------------------------------

// // const labels = products.map(product => {
// //   return product.label;
// // });

// // console.table(labels);

// const updatedProducts = products.map(product => {
//   return {
//     ...product,
//     price: product.price * 1.1,
//   };
// });

// console.table(updatedProducts);

//-----------------------------------------

// const updatedProductsPrice = (products, value) => {
//   return products.map(product => {
//     return {
//       ...product,
//       price: product.price * value,
//     };
//   });
// };

//-------------------------

// const updatedProductsPrice = (products, value) =>
//   products.map(product => ({
//     ...product,
//     price: product.price * value,
//   }));

// const updatedProducts = updatedProductsPrice(products, 1.5);
// console.table(updatedProducts);

//-------------------

// const updateProductQuantity = (products, productId, amount) => {
//   return products.map(product => {
//     return product.id === productId
//       ? { ...product, quanity: product.quanity + amount }
//       : product;
//   });
// };

// const updated = updateProductQuantity(products, 'id-3', 50);
// console.table(updated);

//==========================================

//----------- filter

// const numbers = [1, 2, 3, 4, 5];

// const filtred = numbers.filter(number => {
//     return number > 2;
// });

// console.log(filtred);

//-- под капотом

// const filter = (array, callback) => {
//   const filtredArrey = [];

//   for (let i = 0; i < array.length; i += 1) {
//     const passed = callback(array[i]);

//     if (passed) {
//       filtredArrey.push(array[i]);
//     }
//   }
//   return filtredArrey;
// };

// //------------------- array ---  callback ф-я
// console.table(filter(numbers, number => number > 2));
// console.table(filter(numbers, number => number < 3));

//---------------------------------------------------

// const products = [
//   { id: 'id-1', label: 'Apples', price: 100, quanity: 50 },
//   { id: 'id-2', label: 'Bananas', price: 120, quanity: 70 },
//   { id: 'id-3', label: 'Lemons', price: 70, quanity: 30 },
// ];

// const cheapProducts = products.filter(product => {
//   return product.price < 120;
// });

// console.table(cheapProducts);

//------------------

// const getProductWithPrice = (products, price) => {
//   return products.filter(product => {
//     return product.price < price;
//   });
// };

// const cheapProducts = getProductWithPrice(products, 120);
// console.table(cheapProducts);

//-------------------

// const getProductsWithQuantity = (products, quanity) => {
//   return products.filter(product => {
//     return product.quanity > quanity;
//   });
// };

// const availableProducts = getProductsWithQuantity(products, 40);
// console.table(availableProducts);

//-------------------------------------------------------------

// const users = [
//   { id: 'id-1', name: 'Mango', isActive: true },
//   { id: 'id-2', name: 'Poly', isActive: false },
//   { id: 'id-3', name: 'Ajax', isActive: true },
//   { id: 'id-4', name: 'Chelsey', isActive: false },
// ];

// const activeUsers = users.filter(user => {
//   return user.isActive;
// });
// console.table(activeUsers);

//-----------------------------------------------

// const getActiveUser = users => {
//   return users.filter(user => {
//     return user.isActive;
//   });
// };

// const activeUsers = getActiveUser(users);
// console.table(activeUsers);

//-------------------------------------------------

// const inactiveUsers = users.filter(user => {
//   return !user.isActive;
// });
// console.table(inactiveUsers);

//--------------------------------------

//=======================================================

//--------------- find

//  const users = [
//   { id: 'id-1', name: 'Mango', isActive: true },
//   { id: 'id-2', name: 'Poly', isActive: false },
//   { id: 'id-3', name: 'Ajax', isActive: true },
//   { id: 'id-4', name: 'Chelsey', isActive: false },
// ];

// const user = users.find(user => {
//   return user.id === 'id-1';
// });

// console.table(user);

//--------------- под капотом

// const find = (array, callback) => {
//   for (let i = 0; i < array.length; i += 1) {
//     const passed = callback(array[i], i, array);

//     if (passed) {
//       return array[i];
//     }
//   }
// };

// console.table(find(users, user => user.id === 'id-1'));

//-------------------------

// const findUserById = (users, id) => {
//   return users.find(user => {
//     return user.id === id;
//   });
// };

// const user = findUserById(users, 'id-2');
// console.table(user);
//==================================================

//---------- every some

// const users = [
//   { id: 'id-1', name: 'Mango', isActive: true },
//   { id: 'id-2', name: 'Poly', isActive: false },
//   { id: 'id-3', name: 'Ajax', isActive: true },
//   { id: 'id-4', name: 'Chelsey', isActive: false },
// ];
// //--------------------------------------------------------

// const allUsersActive = users.every(user => {
//   return user.isActive;
// });

// console.table(allUsersActive);
// //----------------------------------------------------------------

// const isSomeUsersActive = users.some(user => {
//   return user.isActive;
// });

// console.table(isSomeUsersActive);

//----------------------------------------------------

// const storage = {
//   current: 1,
//   _items: [
//     { id: 0, label: 'item-1' },
//     { id: 1, label: 'item-2' },
//   ],
//   get items() {
//     return this._items;
//   },
//   add(item) {
//     this._items = [...this._items, { id: ++this.current, ...item }];
//   },
//   update(id, label) {
//     const item = this._items.find(item => item.id === id);
//     if (item) {
//       item.label = label;
//     }
// иммутфбельно
// this._items = this._items.map(item => {
//     return item.id === id ? { ...item, label } : item;
// });
//   },
//   delete(id) {
//     this._items = this._items.filter(item => item.id !== id);
//   },
// };

// storage.add({ label: 'item-3' });
// storage.update(1, 'updated label');
// storage.delete(0);

// console.table(storage.items);

//=================================================

//-------- reduce

// const numbers = [1, 2, 3, 4, 5];

// const total = numbers.reduce((accumulator, number) => {
//   return accumulator + number;
// }, 0);

// console.log(total);

//------ под капотом

// const reduce = (array, callback, initialValue = array[0]) => {
//   let accumulator = initialValue;

//   for (let i = 0; i < array.length; i += 1) {
//     accumulator = callback(accumulator, array[i]);
//   }
//   return accumulator;
// };

// const total = reduce(numbers, (acc, num) => acc + num, 0);
// console.log(total);

//-------------------------------------------------

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const total = Object.values(salary).reduce((acc, value) => {
//   return acc + value;
// }, 0);

// console.log(total);

//--------------------------------------

// const products = [
//   { id: 'id-1', label: 'Apples', price: 100, quanity: 50 },
//   { id: 'id-2', label: 'Bananas', price: 120, quanity: 70 },
//   { id: 'id-3', label: 'Lemons', price: 70, quanity: 30 },
// ];

// const totalQuantity = products.reduce((total, product) => {
//   return total + product.quanity;
// }, 0);

// console.log(totalQuantity);

//-----------------------------------

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const tags = tweets.reduce((acc, tweet) => {
//   acc.push(...tweet.tags);
//   return acc;
// }, []);

// console.log(tags);

//==============================

//------------- forEach

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// for (let i = 0; i < tweets.length; i += 1) {
//   console.log(tweets[i]);
// }

// tweets.forEach(tweet => {
//   console.log(tweet);
// });

//==================================

//--------- sort

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const sortedTagsMore = [...tweets].sort((userA, userB) => {
// //--------  по возврастанию
// //   return userA.likes - userB.likes;

// //--------  по убыванию
// // return userB.likes - userA.likes;
// });

// console.table(sortedTagsMore);

//===========================================

// -- запись на Prototype
// const numbers = [1, 2, 3, 4, 5];


// Array.prototype.customReduce = function(
//   callback,
//   initialValue = array[0],
// ) {
//   let accumulator = initialValue;

//   for (let i = 0; i < this.length; i += 1) {
//     accumulator = callback(accumulator, this[i]);
//   }
//   return accumulator;
// };

// console.log(numbers.customReduce((acc, num) => acc + num, 0));

