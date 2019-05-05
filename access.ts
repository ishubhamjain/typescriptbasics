import {classDemo} from './classDemo';
//

export interface vehicle
{
color:string;
engine:number;
camera?:boolean;

}


let cd=new classDemo(123);
cd.setUsername("Rahul");
console.log(cd.getUsername());
console.log(cd.getSSN());

function validate(value:number):number
{
return value+1;
//console.log("hey");
}
function validateCar(car:vehicle)
{
console.log(car.camera);
console.log(car.engine);
}

let Bmw=
{
    color:"red",
    engine:100,
    camera:true
}


let xyz=
{
    color:"black",
    engine:500
   
}

validateCar(Bmw);
validateCar(xyz);


console.log(validate(2));





