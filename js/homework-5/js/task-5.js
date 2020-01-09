class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, 
      speed: ${car.speed}, 
      isOn: ${car.isOn}, 
      distance: ${car.distance}, 
      price: ${car.price}`,
    );
  }

  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.speed = speed;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  get _price() {
    return this.price;
  }

  set _price(price) {
    this.price = price;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    let gainSpeed = this.speed + value;
    if (gainSpeed < this.maxSpeed) {
      this.speed = gainSpeed;
    } else {
      this.speed = 'Превышение максимальной скорости';
    }
  }

  decelerate(value) {
    let speedDrop = this.speed - value;
    if (speedDrop >= 0) {
      this.speed = speedDrop;
    } else {
      this.speed = 'Автомобиль остановлен';
    }
  }

  drive(hours) {
    console.log(this.isOn);
    if (this.isOn !== false) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
