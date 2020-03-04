class CountdownTimer {
  constructor({ selector, targetDate }) {
    (this.selector = selector), (this.targetDate = targetDate);
    (this.timeContent = document.querySelector(this.selector)),
      (this.refs = {
        days: this.timeContent.querySelector('span[data-value="days"]'),
        hours: this.timeContent.querySelector('span[data-value="hours"]'),
        mins: this.timeContent.querySelector('span[data-value="mins"]'),
        secs: this.timeContent.querySelector('span[data-value="secs"]'),
      });
  }

  countdown = setInterval(() => {
    const startTime = Date.now();
    const deltaTime = this.targetDate - startTime;
    if (deltaTime <= 0) {
      this.deltaTime = 0;
      return;
    }
    this.updateClockface(deltaTime);
  }, 1000);

  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    this.refs.days.textContent = `${days}`;
    this.refs.hours.textContent = `${hours}`;
    this.refs.mins.textContent = `${mins}`;
    this.refs.secs.textContent = `${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('March, 8, 2020'),
});
