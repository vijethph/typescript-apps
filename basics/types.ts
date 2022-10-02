const today = new Date();

const person = {
  age: 20,
};

class Color {}

const red = new Color();
const blue: Color = new Color();

let apples: number = 5;
let speed: string = "fast";
let hasName: string | boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let colors: string[] = ["red", "green", "blue"];

// objects
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

const profile = {
  name: "John",
  age: 35,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;

// function
const logNumber: (input: number) => void = (input: number) => {
  console.log(input);
};

const addNumbers = (a: number, b: number): number => {
  return a + b;
};

// destructuring for an object - obj = {a,b};
function divide({ a, b }: { a: number; b: number }): number {
  return a / b;
}

const throwError = (message: string): never => {
  throw new Error(message);
};

// tuples
const pepsi: [string, boolean, number] = ["brown", true, 40];
// ordering of types is important in a tuple

type Drink = [string, boolean, number]; // type alias

const coke: Drink = ["black", false, 20];

// classes
class Vehicle {
  color: string = "red";

  constructor(color: string) {
    this.color = color;
  }

  public drive(): void {
    console.log("driving..");
  }

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("yellow");
console.log(vehicle.color);

class Car extends Vehicle {
  // this is equivalent to declaring speed property in class and this.speed = speed inside constructor
  constructor(public speed: number) {
    super("green");
  }

  public drive(): void {
    // access modifier of function in parent class cannot be changed in child class
    console.log("car driving...");
  }

  startDrivingProcess(): void {
    this.honk();
  }
}
