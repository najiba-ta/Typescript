//* type alias vs interface

//? interface is generally connected to objects
// ? type alias is more connected to literals, union, tuples, primitives

// TODO Type Alias

type Id = number;
//! interface id = number;

 type Role = "admin" | "member";

//! interface Role = "admin" | "member";

interface User {
   name :string;
   id :Id;
   role:"admin" | "member";
}

const user : User = {
    name:"najiba",
    id : 1234,
    role:"admin",

}

// TODO Interface

interface Animal{
    species : string;
}

interface Cat extends Animal{
    breed : string;
}
 
const cat : Cat = {
    species : "felix catus",
    breed : "persian"
}
console.log();

type vahicle ={
    brand : string;
}

type Car = vahicle & { //? "&" symbol use to perform intersection
    model : string;
}

const car : Car ={
    brand:"BMW",
    model : "X5",
}

interface IEmployee {
    name : string;
}

interface IEmployee{
   id : number;
}

const employee : IEmployee ={
    name:"Najiba",
    id:1453654
}
// ! This is not valid on type

// type Teacher = {
//     name:string;
// }
//  type Teacher = {
//     name: string;
//  }