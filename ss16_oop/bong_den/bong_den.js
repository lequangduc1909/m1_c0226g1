class ElectricLamp {
  constructor() {
    this.status = false; 
  }

  turnOn() {
    this.status = true;
  }

  turnOff() {
    this.status = false;
  }
}

class SwitchButton {
  constructor() {
    this.status = false; 
    this.lamp = null;
  }

  connectToLamp(lamp) {
    this.lamp = lamp;
  }

  switchOn() {
    this.status = true;
    this.lamp.turnOn();
  }

  switchOff() {
    this.status = false;
    this.lamp.turnOff();
  }
}

const lamp = new ElectricLamp();
const button = new SwitchButton();

button.connectToLamp(lamp);


for (let i = 1; i <= 10; i++) {
  if (button.status === false) {
    button.switchOn();
    console.log(`Lần ${i}: Đèn BẬT `);
  } else {
    button.switchOff();
    console.log(`Lần ${i}: Đèn TẮT `);
  }
}
