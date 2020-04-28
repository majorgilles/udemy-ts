class Robot {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  askName() {
    console.log(`My name is ${this.name}`);
  }

  move(distance: number) {
    console.log(`${this.name} moved ${distance} meters`);
  }
}

const robot = new Robot("John");
robot.askName();
robot.move(21);
