function genericFunction<T>(x: T): T {
  return x;
}

const genericArrowFunction = <T>(x: T): T => x;

interface GenericInterface<T> {
  (a: T): T;
  someProp: T;
}

interface GenericInterface<T> {
  <U>(a: U): U;
  someProp: T;
}
