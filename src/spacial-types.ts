//* Top types

let helloWorld : any = "Hello World";
helloWorld = 123;

helloWorld.length;

const something : unknown = "Hello World";

// something.length;

//* Core types

let something2 : unknown;
const num : number = 134;
let nothing : void;
something2 = nothing;

//* nulish Types

interface User{
    name : string;
}

type loggedInUser = User | null;

const currentUser: loggedInUser = null;


//* Unit type 

const greet = ()=>{
   console.log("Hello World");
};
greet();

//* Sub-type of unit type


const anotherGreet = () : undefined =>{
   console.log("Hello World");
   return undefined;
};
const greetings : void = anotherGreet();
console.log(greetings);

//* Bottom type

const getError = (msg: string) => {
    throw new Error (msg)
}

const x : null  = getError ("abcd")