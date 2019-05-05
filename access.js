"use strict";
exports.__esModule = true;
var classDemo_1 = require("./classDemo");
var cd = new classDemo_1.classDemo(123);
cd.setUsername("Rahul");
console.log(cd.getUsername());
console.log(cd.getSSN());
function validate(value) {
    return value + 1;
    //console.log("hey");
}
function validateCar(car) {
    console.log(car.camera);
    console.log(car.engine);
}
var Bmw = {
    color: "red",
    engine: 100,
    camera: true
};
var xyz = {
    color: "black",
    engine: 500,
    camera: false
};
validateCar(Bmw);
validateCar(xyz);
console.log(validate(2));
