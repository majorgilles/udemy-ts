interface A {
  [key: string]: number | string;
  someProp: string;
}

interface Profile {
  readonly name: string;
  age?: number;
}

let profile: Profile = {
  name: "John",
  age: 30,
};
console.log(profile);

const a: A = { someProp: "test" };
a.x = 1;
a.y = "b";
console.log(a);

interface Sum {
  (a: number, b: number): number;
}

const sum: Sum = (a, b) => a + b;

console.log(sum(1, 2));

interface Parent {
  x: string;
}

interface Child extends Parent {}

let child: Child = { x: "some_prop" };
console.log(child);
