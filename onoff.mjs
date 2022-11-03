class Gpio {
  constructor(pin, mode) {
    this.pin = pin;
    this.mode = mode;
  }

  writeSync(state) {
    if (state == 1) {
      console.log(`Pin ${this.pin} in on`);
    } else {
      console.log(`Pin ${this.pin} in off`);
    }
  }
}

export { Gpio };
