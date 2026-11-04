let myNumber : number  = 1234;
let myBoolean : boolean = false;
let myString : string = "najiba";
let myBigInt : bigint = 100n;
let mySymbol :symbol = Symbol();

const addTwo = (a : number ,b : number) =>{
    return a + b
};
console.log(addTwo(20,30));

// Array
const arr : string[] = ["Najiba","Takarrum"];
const myNum : number[] = [1,2,3,4];
const array: Array <string> = ["Najiba","Takarrum"];
const contactName = (firstName : string, lastName ?: string)=> {
   if (!lastName){
    return firstName;
   }
  return firstName + "" + lastName;
}
console.log(contactName("Najiba","Takarrum"));

// rest peramiters 
const sum = (...numbers : number[]) =>{
     return numbers.reduce ((total , sum) => total + sum , 0)
}
sum (1,2,3,4,5);

const logUserAction = (...args : [age:number, name:string, isActive:boolean])=>{
    const [age,name,isActive] = args;
    console.log(name + "is" + age);
}
logUserAction(16,"Najiba",true);

//  object type , type alias and interface
const user :{
    name : string;
    age : number;
    status : boolean;
    action :()=> void;
    badges : string[];
} ={
    name : "Najiba",
    age : 16,
    status : true,
    action : () => console.log("hello"),
    badges :["premium", "plutinum","gold"],
};