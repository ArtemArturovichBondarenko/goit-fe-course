// let login = 'jgsra';

// const product = {
//     login,
//     name: 'sasha',
//     price: 30,
//     description: 'djn piajrgoalwkm poaksgma',
// };

// console.log(product['price']);
// console.log(product.name);

// product.price = 50;
// product.age = 40;

// delete product.price;
// console.log(product);

// const product = (name, price) => {
//   return {
//     name,
//     price,
//   };
// };

// console.log(product('apple', 50));

// const key = 'name';
// const value= 10;

// const jbj = {
//     a:1,
//     [key]: value,
// };

// console.log(jbj);

// const product = {
//   login: 4,
//   name: 'sasha',
//   price: 30,
//   changePrice(newPrice) {
//     console.log(newPrice);
//   },
// };

// product.changePrice(100);

//------------Работа с коллекцией ---------------
// const storage = {
//   items: [
//     { id: 'id-1', name: 'apples', price: 30 },
//     { id: 'id-2', name: 'grapes', price: 40 },
//   ],
//-----------Функция возврвщения массива
//   getItems() {
//     return this.items;
//   },
//----------Ф-я добавления в массив -------------
//   addProduct(product) {
//     this.items.push(product);
//   },
//----------Ф-я поиска и удаления
//   removeProduct(id) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       console.log(this.items[i]);

//       if (this.items[i].id === id) {
//         this.items.splice(i, 1);
//       }
//     }
//   },
// };

// console.table(storage.getItems());

// storage.addProduct({ id: 'id-3', name: 'carrots', price: 20 });

// console.table(storage.getItems());

// storage.removeProduct('id-2');

// console.table(storage.getItems());

//============================================

// const product = {
//   name: 'hlkuv',
//   price: 50,
//   quantity: 20,
// };

// // for (const key in product) {
// //   console.log(`key: ${key}, value: ${product[key]}`);
// // }

// //----Получение всех ключей----
// const keys = Object.keys(product);
// console.log(keys);

// //--------- Получение всех значений-------
// for(const key of keys) {
//     console.log(key)
//     console.log(`key: ${key}, value: ${product[key]}`);
// }

//======================================================

// больше всех задач

// const findPerson = function(stats) {
//   let max = 0;
//   let name;

//   const keys = Object.keys(stats);

//   for (const key of keys) {
//     if (max < stats[key]) {
//       max = stats[key];
//       name = key;
//     }
//   }
//   return {
//     name,
//     taskCompleted: max,
//   };
// };

// console.log(
//   findPerson({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     bruce: 99,
//   }),
// );

// console.log(
//   findPerson({
//     ann: 29,
//     david: 135,
//     helen: 1,
//     bruce: 99,
//   }),
// );

//=================================================

//--------- Возврвщение массива значений ------------

// const users = [
//   { name: 'Poly', age: 7, mood: 'happy' },
//   { name: 'Mango', age: 4, mood: 'blissful' },
//   { name: 'Ajax', age: 3, mood: 'tired' },
// ];

// const getAllPropValues = function(users, key) {
//   const values = [];

//   for (const user of users) {
//     if (key in user) {
//       values.push(user[key]);
//     }
//   }
//   return values;
// };

// console.log(getAllPropValues(users, 'name'));

// console.log(getAllPropValues(users, 'mood'));

// console.log(getAllPropValues(users, 'active'));
//====================================================================

//---------------  Найти больше 10% --------------

// const uploads = [
//   { name: 'pdf', percentage: 14 },
//   { name: 'psd', percentage: 21 },
//   { name: 'mp3', percentage: 3 },
//   { name: 'flac', percentage: 7 },
// ];

// const filterUploadesWithThreshold = function(uploads, threshold) {
//   //   console.table(uploads);
//   //   console.log(threshold);
//   const filterUploades = [];

//   for (const upload of uploads) {
//     if (upload.percentage >= threshold) filterUploades.push(upload);
//   }
//   return filterUploades;
// };

// console.table(filterUploadesWithThreshold(uploads, 10));
// console.table(filterUploadesWithThreshold(uploads, 20));
//=============================================================================

//------------------------

// const names = [
//   'Радар',
//   'Сканер',
//   'Дроид',
//   'Захват',
//   'Двигатель',
//   'Топливный бак',
// ];

// const prices = [1000, 2000, 1500, 2700, 1600, 8000];

// const combine = function(names, prices) {
//   const combined = [];
// //   console.table(names);
// //   console.table(prices);

//   for (let i = 0; i < names.length; i += 1) {
//     // console.log(names[i]);
//     // console.log(prices[i]);

//     const obj = {
//       name: names[i],
//       price: prices[i],
//     };
//     combined.push(obj);
//   }
//   return combined;
// };
//============================================

//---------- деструктуризация и параметры по умолчанию -------

// const user = {
//   name: 'Mango',
//   room: 24,
// };

// const greeter = ({ room, type = 'regular', name } = {}) => {
//   return `Гость ${name} прибывает как ${type} в комнату ${room}`;
// };

// console.log(greeter(user));
//=================================================

//------------- Глубокая деструктуризация --------------

// const profile = {
//     name: "Mango",
//     email: 'mango@mail.com',
//     adress: {
//         name: 'Adress name prop',
//         city: 'Zimbabwe',
//         country: 'Ukraine',
//         street: 'Some street',
//     },
// };

// const {
//     name,
//     email,
//     adress: { city, country, street, name: adressName },
// } = profile;

//--------------------------

// const tasks = {
//     ann: 30,
//     boris: 50,
//     valera: 99,
// };

// const entries = Object.entries(tasks);

// console.table(entries);

// for (const [name, value] of entries) {
//     console.log(name, value);
// };
//=========================================================================

const storage = {
  items: [
    { id: 'id-1', name: 'apples', price: 30 },
    { id: 'id-2', name: 'grapes', price: 40 },
  ],
  // -----------Функция возврвщения массива
  getItems() {
    return this.items;
  },
  // ----------Ф-я добавления в массив -------------
  addProduct(product) {
    this.items.push(product);
  },
  //---------- Ф-я поиска по id ------------------------
  findProduct(id) {
    for (let i = 0; i < this.items.length; i += 1) {
      const product = this.items[i];
      if (product.id === id) {
        return product;
      }
    }
  },
  // ----------Ф-я поиска и удаления
  removeProduct(id) {
    for (let i = 0; i < this.items.length; i += 1) {
      console.log(this.items[i]);

      if (this.items[i].id === id) {
        this.items.splice(i, 1);
        return;
      }
    }
  },
  //---------- Изменнение цены по id испщльзуч ф-ю findProduct-------------------
  changePrice(id, price) {
    const product = this.findProduct(id);
    //----- guard clause --------
    if (!product) {
      return;
    }
    product.price = price;
  },
  getProductName() {
    const names = [];

    // for (const { name } of this.items) {
    //     names.push(item.name)
    // } одинаково с нижним (деструктуризация)
    for (const item of this.items) {
      names.push(item.name);
    }
    return names;
  },
  //---------- Поиск по цене -----------
  filterWithPrice(threshold) {
    const filtred = [];

    for (const item of this.items) {
      if (item.price >= threshold) {
        filtred.push(item);
      }
    }
    return filtred;
  },
};

console.table(storage.getItems());

storage.addProduct({ id: 'id-3', name: 'carrots', price: 20 });
console.table(storage.getItems());

storage.removeProduct('id-2');
console.table(storage.getItems());

storage.changePrice('id-3', 100);
console.table(storage.getItems());

console.table(storage.getProductName());

console.table(storage.filterWithPrice(50));
