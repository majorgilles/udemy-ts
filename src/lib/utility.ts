// Partial<T>
interface Starship {
  name: string;
  enableHyperjump: boolean;
}

const updateStarship = (id: number, starship: Partial<Starship>) => {};

// enables us to make all mandatory props of original interface optional
updateStarship(1, {
  name: "Explorer",
});

// "Required" util is the reverse to "Partial"
// "Readonly" makes all properties readonly

// Record
const aRecord: Record<string, number> = {
  apples: 10,
  oranges: 20,
};

const startships: Record<string, Starship> = {
  Explorer1: {
    name: "Explorer1",
    enableHyperjump: true,
  },
  Explorer2: {
    name: "Explorer2",
    enableHyperjump: false,
  },
};

// Pick: create new type from other type
type StarShipOnlyName = Pick<Starship, "name">;
const namedShip: StarShipOnlyName = { name: "explorer 1" };

// Omit: the reverse to starship
type UnamedShip = Omit<Starship, "name">;
const unamed: UnamedShip = { enableHyperjump: true };

// Exclude<T, U> : exclude U from T
// exclude type from union

type AvailableDrinks = "Coffee" | "Tea" | "Orange Juice" | "Lemonade";

let johnsDrink: AvailableDrinks;
johnsDrink = "Coffee";

type DrinksJaneDoesntLike = "Coffee" | "Orange Juice";
//let janesDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike> = "Coffee" // doesn't work as expected
let janesDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike> = "Lemonade"; // works because not excluded

// Extract<T, U> : reverse to exclude
type DrinksJanesLikes = "Tea" | "Lemonade" | "Mojito";
//let otherDrinks: Extract<AvailableDrinks, DrinksJanesLikes> = "Mojito"; // doesn't work as it's not in the available drinks
let otherDrinks_2: Extract<AvailableDrinks, DrinksJanesLikes> = "Tea";

// NonNullable<T> -> will remove null and undefined
interface StarshipProperties {
  color?: "blue" | "red" | "green";
}

function paintStarShip(
  id: number,
  color: NonNullable<StarshipProperties["color"]>
) {
  return {
    id,
    color,
  };
}
// paintStarShip(1, undefined); strictNullCheck activated + NonNullable -> produces an error as expected

// ReturnType<T> -> get return type of function
type PaintStarShipReturn = ReturnType<typeof paintStarShip>;

// InstanceType<T>
// type Constructible<ClassInstance> = new (...args: any[]) => ClassInstance;
// function Deletable<BaseClass extends Constructible<{}>>(Base: BaseClass) {
//   return class extends Base {
//     deleted: boolean;
//     delete() {}
//   };
// }

// class Car {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// type CarInstanceType = InstanceType<typeof Car>; // not very useful, because you should use Car directly

// class User {
//   constructor(name: string) {}
// }

// const DeletableCarVar = Deletable(Car);
// type DeletableCar = InstanceType<typeof DeletableCarVar>;
// const DeletableUserVar = Deletable(User);
// type DeletableUser = InstanceType<typeof DeletableUserVar>;

// class Profile {
//   car?: DeletableCar;
//   user?: DeletableUser;

//   constructor(car?: DeletableCar, user?: DeletableUser) {
//     this.car = car;
//     this.user = user;
//   }
// }

// const prof = new Profile();
