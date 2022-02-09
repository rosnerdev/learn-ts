// General types
let id: number = 56;
let company: string = 'Facebook';
let isPublished: boolean = true;
let x: any = 'Hello';

// Array
let ids: any[] = [1,2,3,4];

// Tuple
let person: [number, string, boolean] = [1, "Brad", true];

//Tuple Array
let employee: [number, string][] = [
    [1, 'Daniel'],
    [2, 'Brad'],
    [3, 'Alex']
]

// Union
let pid: string | number = "0124522";
// This assignment works because this variable uses two types AKA "unions"
pid = 123;

// Enums
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction1.Up)

enum Direction2 {
    Up = 1,
    Down,
    Left,
    Right
}

console.log(Direction2.Up)

// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// Type assertion
let cid: any = 1;
// to make customerId a number we should use this: let costumerId = <number>cid; or this:
let costumerId = cid as number;


/* This should result in an error =>
costumerId = true */

// Functions
function addNum(x: number, y: number)/* This is the function return value type */:number {
    return x + y
}

function log(message: string | number)/* This means there is no return value */:void {
    console.log(message)
}

// Interfaces
interface UserInterface {
    id: number,
    name: string,
    age: number
}

const user1: UserInterface = {
    id: 1,
    name: 'Billie',
    age: 27
}

interface MathFunc {
    (x: number, y: number): number
}

let add: MathFunc = (x, y) => x + y;
console.log(add(1, 2))


interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

// Classes
class Person implements PersonInterface {
    id:number
    name:string

    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.name} is now registered!`
    }
}

let brad = new Person(1, "Brad")


class Employee extends Person {
    position: string

    constructor(id: number, name: string, position:string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(2, "Shawn", "Manager")

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(["y", "asd", "dasd"])