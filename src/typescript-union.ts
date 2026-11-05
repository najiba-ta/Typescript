// Literal Type
type Status = 123;
const status : Status =123;
console.log(status);

// basic Union
type Identity = string | number ;
const id :Identity = 1343;
console.log(id);
// Literal Union
type Role = "user" | "admin";
const userRole : Role ="admin"
// Object Union
type Admin = {id: number, role: "admin", previllages:string[]};
type Member ={id: number, role: "member",plans:string[]};
type User = Admin | Member;
const user : User = {id: 1234, role:"admin", previllages:["abc","def"]}
