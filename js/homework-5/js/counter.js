// const Counter = function({ initialValue = 0, step = 1 }) {
//   this.value = initialValue;
//   this.step = step;
// };

// Counter.prototype.increment = function() {
//   this.value += this.step;
// };

// Counter.prototype.decrement = function() {
//   this.value -= this.step;
// };

// const counter = new Counter({ initialValue: 1, step: 1 });

// const counterValueField = document.querySelector('.js-counter-value');
// const incrementBtn = document.querySelector('button[data-action="increment"]');
// const decrementBtn = document.querySelector('button[data-action="decrement"]');

// counterValueField.textContent = counter.value;

// incrementBtn.addEventListener('click', () => {
//   counter.increment();
//   //   console.log('clicked increment!');
//   //   console.log('counter.value: ', counter.value);
//   counterValueField.textContent = counter.value;
// });

// decrementBtn.addEventListener('click', () => {
//   counter.decrement();
//   // console.log('clicked increment!');
//   // console.log('counter.value: ', counter.value);
//   counterValueField.textContent = counter.value;
// });

// console.log(counterValueField);
// console.log(incrementBtn);
// console.log(decrementBtn);

//-----------------------


const Guest = function(name,room) {
    this.name = name;
    this.room = room;
  };
  
  Guest.prototype.showGuestInfo = function() {
    console.log(`name: ${this.name}, room: ${this.room}`);
  };
  
  const mango = new Guest('Mango', 28);
  const poly = new Guest('Poly', 36);
  
  mango.showGuestInfo(); // name: Mango, room: 28
  poly.showGuestInfo(); // name: Poly, room: 36