// const Counter = function({ initialValue = 0, step = 1 }) {
//   // this = {}
//   // this.__proto__ = Counter.prototype;

//   this.value = initialValue;
//   this.step = step;

//   //   this.increment = function() {
//   //     this.value += this.step;
//   //   };

//   // return this;
// };

// Counter.prototype.increment = function() {
//   this.value += this.step;
// };

// // [[Call]]
// // Counter();

// // [[Construct]]
// const counterA = new Counter({ initialValue: 10, step: 5 });
// console.log('counterA.value: ', counterA.value);
// counterA.increment();
// console.log('counterA.value: ', counterA.value);
// counterA.increment();
// console.log('counterA.value: ', counterA.value);

// const counterB = new Counter({ initialValue: 80, step: 7 });
// console.log('counterB.value: ', counterB.value);
// counterB.increment();
// console.log('counterB.value: ', counterB.value);
// counterB.increment();
// console.log('counterB.value: ', counterB.value);

// --------- пример домашки

// const TodoEditor = function(todos = []) {
//   this.todos = todos;
// };

// TodoEditor.prototype.saveTodo = function(todo) {
//   this.todos.push(todo);
// };

// const todoEditor = new TodoEditor();

// todoEditor.saveTodo({ text: 'new todo' });

// console.log(todoEditor);

//================================================

//---------- прототипы ES-5

// const Hero = function(name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.changeName = function(name) {
//   console.log('this: ', this);
//   this.name = name;
// };

// const Warrior = function(name, xp, weapon) {
//   this.weapon = weapon;
// };

// const mango = new Warrior('Mango', 1000, 'halberd');

// console.log(mango);

//------------ прототипы ES-6

// class Hero {
//   constructor(name, xp) {
//     this.name = name;
//     this.xp = xp;
//   }

//   gainXp(amount) {
//     console.log(`${this.name} gained ${amount} experience points`);
//     this.xp += amount;
//   }
// }

// class Warrior extends Hero {
//   constructor(name, xp, weapon) {
//     super(name, xp);
//     this.weapon = weapon;
//   }

//   attack() {
//     console.log(`${this.name} attacks with ${this.weapon}`);

//     super.gainXp(10);
//   }
// }

// class Berserk extends Warrior {
//   constructor(name, xp, weapon, roar) {
//     super(name, xp, weapon);

//     this.roar = roar;
//   }

//   battlecry() {
//     console.log(this.roar);
//   }
// }

// const poly = new Berserk('Poly', 1000, 'halberd', 'waaah!!');
// console.log(poly);

// const mango = new Warrior('Mango', 1000, 'exe');

// console.log(mango);

// mango.gainXp(1000);

// mango.attack();


console.log(Object.create(null)
)