interface IA {
  a: number;
}

interface IB {
  b: number;
}

interface IC {
  c: number;
}

function X(obj: IA & IB & IC) {
  return obj.a + obj.b + obj.c;
}

function combine<A extends object, B extends object>(objA: A, objB: B): A & B {
  return {
    ...objA,
    ...objB,
  };
}

const objA = { a: 1 };
const objB = { b: 2 };
const resultObj = combine(objA, objB);
//const resultObj2 = combine(1, objB); fails as expected because of the type specifications of A & B
