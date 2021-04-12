function makeCar(color, speed) {
  const car = {
    color,
    speed,
    run() {
      console.log(`Runs at ${this.speed}`);
    },
  };
  return car;
}

class makeCar2 {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }

  run() {
    console.log(`Runs at ${this.speed}`);
  }
}

const car1 = new makeCar2('blue', '100km/h');

car1.run();
