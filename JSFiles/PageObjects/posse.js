"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class posse {
    constructor() {
        this.placeSearch = protractor_1.element(protractor_1.by.model('userInputQuery'));
    }
    //function 
    disp() {
        var input = this.locationSearch = protractor_1.element(protractor_1.by.model('locationQuery'));
        return input;
    }
    testFunction(headings) {
        let test = this.testingLocator = protractor_1.element(protractor_1.by.model('locationQuery'));
        return test;
    }
}
exports.posse = posse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9wb3NzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3RDtBQUV4RCxNQUFhLEtBQUs7SUFNZDtRQUVJLElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUV6RCxDQUFDO0lBRUQsV0FBVztJQUNaLElBQUk7UUFDSCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVGLFlBQVksQ0FBQyxRQUFzQjtRQUMvQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FFSDtBQXZCRCxzQkF1QkMifQ==