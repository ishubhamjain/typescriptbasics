"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
let assert = chai_1.default.assert;
function selectItems(product) {
    return __awaiter(this, void 0, void 0, function* () {
        //take 4 cards into list
        //go through each index in the list - and get the title= if title =desired title then in that index i will select add button
        yield protractor_1.element.all(protractor_1.by.tagName("app-card")).each((item) => __awaiter(this, void 0, void 0, function* () {
            yield item.element(protractor_1.by.css("h4 a")).getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                if (text == product) {
                    yield item.element(protractor_1.by.css("button[class*='btn-info']")).click();
                }
            }));
        }));
    });
}
cucumber_1.Given(':I will navigate to qaacamedy site', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get("https://qaclickacademy.github.io/protocommerce/");
    yield console.log("browser lunched");
}));
cucumber_1.When(': click on the shop and add all products in cart', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.element(protractor_1.by.linkText("Shop")).click();
    yield selectItems("Samsung Note 8");
    yield selectItems("iphone X");
    yield protractor_1.element(protractor_1.by.partialLinkText("Checkout")).getText().then((text) => __awaiter(this, void 0, void 0, function* () {
        let res = text.split("(");
        let x = res[1].trim().charAt(0);
        let y = x;
        yield console.log(y);
        yield assert.equal(res[1].trim().charAt(0), x);
    }));
}));
cucumber_1.When(': I calculate all price', () => __awaiter(this, void 0, void 0, function* () {
    let value;
    let amount = new Array();
    let set = new Set();
    yield protractor_1.element(protractor_1.by.partialLinkText("Checkout")).click();
    yield protractor_1.element.all(protractor_1.by.css("td[class*='text-center']")).each((item) => __awaiter(this, void 0, void 0, function* () {
        item.element(protractor_1.by.css("strong")).getText().then((text) => __awaiter(this, void 0, void 0, function* () {
            yield console.log(text);
            let res = text.split('.');
            value = Number(res[1].trim());
            amount.push(value);
            set.add(value);
            yield console.log("my value =" + value);
            yield console.log("my amounts" + amount);
        }));
    }));
    let add = 0;
    // for (let i = 0; i < amount.length; i++) {
    //     await console.log("array value = "+amount[i]);
    //     add=add+amount[i];
    //  }
    for (let num of set) {
        yield console.log("iterbale value of set = " + num); //1 2 3 4 5 6
        add = add + num;
    }
    yield console.log("total calculate value =" + add);
    yield console.log("my amounts final" + amount);
}));
cucumber_1.Then(': some should be shown', () => __awaiter(this, void 0, void 0, function* () {
    yield console.log("Then Statement");
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJhY3RpY2VDbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbmF0aW9uL3ByYWN0aWNlQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywyQ0FBa0Q7QUFFbEQsZ0RBQXVCO0FBRXZCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsU0FBZSxXQUFXLENBQUMsT0FBTzs7UUFDOUIsd0JBQXdCO1FBQ3hCLDRIQUE0SDtRQUM1SCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBTSxJQUFJLEVBQUUsRUFBRTtZQUUzRCxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFNLElBQUksRUFBQyxFQUFFO2dCQUN6RCxJQUFJLElBQUksSUFBSSxPQUFPLEVBQUU7b0JBQ2pCLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDbkU7WUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FBQTtBQUNELGdCQUFLLENBQUMsb0NBQW9DLEVBQUUsR0FBUyxFQUFFO0lBQ3BELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsaURBQWlELENBQUMsQ0FBQztJQUNyRSxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGtEQUFrRCxFQUFFLEdBQVMsRUFBRTtJQUNsRSxNQUFNLG9CQUFP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