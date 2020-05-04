////
interface Cart {
  calculateTotal(): number;
}
namespace MyNamespace {
  export const x: number = 10;
  export interface SomeInterface {
    y: number;
  }
}
function someFunction() {
  return 10;
}
enum Vegetables {
  Tomatato = "tomato",
  Onion = "onion",
}

class Salad {}
////

interface Cart {
  x: number;
}
interface Cart {
  calculateTotal(options: { discountCode: number }): number;
}

let myCart: Cart = {
  x: 1,
  calculateTotal(options?: { discountCode: number }) {
    if (options && options.discountCode) {
      // apply discount
    }
    return 1;
  },
};

// add props to namespace
namespace MyNamespace {
  export const getX = () => x;
  export interface SomeInterface {
    x: number;
  }
}

MyNamespace.x;
MyNamespace.getX();

const SomeInterface: MyNamespace.SomeInterface = {
  x: 1,
  y: 2,
};

namespace someFunction {
  export const someProperty = 10;
}

namespace Vegetables {
  export function makeSalad() {
    return Vegetables.Tomatato + Vegetables.Onion;
  }
}

const salad = Vegetables.makeSalad();

namespace Salad {
  export const availableDressings = ["Olive oil", "Yoghurt"];
}

Salad.availableDressings.includes("olive oil");
