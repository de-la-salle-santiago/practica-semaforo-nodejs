import { Gpio } from './onoff';

const led = new Gpio(4, 'out');

function timer(ms) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), ms);
  });
}

async function main() {
  while (true) {
    led.writeSync(1);
    await timer(1000);
    led.writeSync(0);
    await timer(1000);
  }
}

main();
