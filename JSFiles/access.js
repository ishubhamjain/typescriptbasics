"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classDemo_1 = require("./classDemo");
let cd = new classDemo_1.classDemo(123);
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
let Bmw = {
    color: "red",
    engine: 100,
    camera: true
};
let xyz = {
    color: "black",
    engine: 500
};
validateCar(Bmw);
validateCar(xyz);
console.log(validate(2));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYWNjZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXNDO0FBWXRDLElBQUksRUFBRSxHQUFDLElBQUkscUJBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQixFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUV6QixTQUFTLFFBQVEsQ0FBQyxLQUFZO0lBRTlCLE9BQU8sS0FBSyxHQUFDLENBQUMsQ0FBQztJQUNmLHFCQUFxQjtBQUNyQixDQUFDO0FBQ0QsU0FBUyxXQUFXLENBQUMsR0FBVztJQUVoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4QixDQUFDO0FBRUQsSUFBSSxHQUFHLEdBQ1A7SUFDSSxLQUFLLEVBQUMsS0FBSztJQUNYLE1BQU0sRUFBQyxHQUFHO0lBQ1YsTUFBTSxFQUFDLElBQUk7Q0FDZCxDQUFBO0FBR0QsSUFBSSxHQUFHLEdBQ1A7SUFDSSxLQUFLLEVBQUMsT0FBTztJQUNiLE1BQU0sRUFBQyxHQUFHO0NBRWIsQ0FBQTtBQUVELFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQixXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7QUFHakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyJ9