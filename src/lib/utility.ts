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
