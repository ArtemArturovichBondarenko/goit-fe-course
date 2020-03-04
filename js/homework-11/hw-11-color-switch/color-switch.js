const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  bgBody: document.querySelector('body'),
};

const colorChange = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.colorId = setInterval(() => {
      refs.bgBody.style.backgroundColor =
        colora[randomIntegerFromInterval(min, max)];
    }, 1000);
  },
  stop() {
    clearInterval(this.colorId);
    this.isActive = false;
  },
};

refs.startBtn.addEventListener('click', colorChange.start.bind(colorChange));
refs.stopBtn.addEventListener('click', colorChange.stop.bind(colorChange));

const colora = colors.map(color => color);
const min = 0;
const max = colors.length - 1;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// console.log(colora[randomIntegerFromInterval(min, max)]);
