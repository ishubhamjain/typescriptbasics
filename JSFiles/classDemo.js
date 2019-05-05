"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class classDemo {
    constructor(ssn) {
        this.ssn = ssn;
    }
    getUsername() {
        return this.username; //username property of the class
    }
    setUsername(username) {
        this.username = username; //set username property to one name
    }
    getSSN() {
        return this.ssn;
    }
}
exports.classDemo = classDemo;
//create object of the class, and using that object call the methods or properties present in that class
let cd = new classDemo(123);
cd.setUsername("Rahul");
console.log(cd.getUsername());
console.log(cd.getSSN());
function validateCar(car) {
    console.log(car.camera);
    console.log(car.engine);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NEZW1vLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY2xhc3NEZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBYSxTQUFTO0lBUXRCLFlBQVksR0FBVTtRQUVuQixJQUFJLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQztJQUNoQixDQUFDO0lBQ0QsV0FBVztRQUdQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBLGdDQUFnQztJQUN6RCxDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQWU7UUFFMUIsSUFBSSxDQUFDLFFBQVEsR0FBQyxRQUFRLENBQUMsQ0FBTSxtQ0FBbUM7SUFDakUsQ0FBQztJQUNELE1BQU07UUFFRixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUtBO0FBOUJELDhCQThCQztBQUNELHdHQUF3RztBQUV4RyxJQUFJLEVBQUUsR0FBQyxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQixFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUN6QixTQUFTLFdBQVcsQ0FBQyxHQUFXO0lBRWhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hCLENBQUMifQ==