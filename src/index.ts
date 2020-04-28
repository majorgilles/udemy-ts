class Robot {
  private _color: string;
  constructor(protected _name: string, color: string = "green") {
    if (!Robot.isColorAvailable(color)) {
      throw new Error(`Color ${color} not available.`);
    }
    this._color = color; // TODO how to avoid duplicating the setter code and still satisfy the compiler that _color is used?
  }

  static availableColors = ["green", "yellow"];
  static isColorAvailable(color: string) {
    return Robot.availableColors.includes(color);
  }

  askName() {
    console.log(`My name is ${this.name}`);
  }

  move(distance: number) {
    console.log(`${this.name} moved ${distance} meters`);
  }

  set color(color: string) {
    if (!Robot.isColorAvailable(color)) {
      throw new Error(`Color ${color} not available.`);
    }
    this._color = color;
  }

  set name(value: string) {
    this._name = `PREFIX_${value}`;
  }

  get name() {
    return `PREFIX_${this._name}`;
  }
}

const robot = new Robot("John");
robot.askName();
robot.move(21);
robot.color = "green";
//robot.color = "red"; crashes as expceted

class FlyingRobot extends Robot {
  private readonly jetpackSize: number;
  constructor(name: string, color: string = "green", jetpackSize: number) {
    super(name, color);
    this.jetpackSize = jetpackSize;
  }

  move(distance: number) {
    super.move(distance);
    console.log(`${this.name} is flying ${distance} meters.`);
  }
}
const flying_robot = new FlyingRobot("test", "green", 21);
flying_robot.move(22);
// console.log(`size: ${flying_robot.jetpackSize}`);
//flying_robot.jetpackSize = 512;
// console.log(`size: ${flying_robot.jetpackSize}`);
console.log(`My name is ${flying_robot.name}`);
