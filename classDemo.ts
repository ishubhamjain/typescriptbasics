import {vehicle} from './access';

export class classDemo
{

//properties,methods,constructor
username:string;
password:string;
ssn:number;

constructor(ssn:number)
{
   this.ssn=ssn;
}
getUsername()
{

    return this.username;//username property of the class
}

setUsername(username:string)
{
 this.username=username;      //set username property to one name
}
getSSN()
{
    return this.ssn;
}




}
//create object of the class, and using that object call the methods or properties present in that class

let cd=new classDemo(123);
cd.setUsername("Rahul");
console.log(cd.getUsername());
console.log(cd.getSSN());
function validateCar(car:vehicle)
{
console.log(car.camera);
console.log(car.engine);
}



