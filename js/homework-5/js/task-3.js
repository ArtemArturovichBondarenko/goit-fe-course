class Storage {
  constructor(items) {
    this.items = [...items];
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
    return this.items;
  }

  removeItem(item) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].includes(item)) {
        this.items.splice(i, 1);
      }
    }
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
