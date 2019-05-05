import { Given, When, Then } from "cucumber";
import { browser, element, by } from "protractor";
import { async } from "q";
import chai from "chai"

let assert = chai.assert;
async function selectItems(product) {
    //take 4 cards into list
    //go through each index in the list - and get the title= if title =desired title then in that index i will select add button
    await element.all(by.tagName("app-card")).each(async(item) => {

      await item.element(by.css("h4 a")).getText().then(async(text)=> {
            if (text == product) {
                await item.element(by.css("button[class*='btn-info']")).click();
            }
        })
    })
}
Given(':I will navigate to qaacamedy site', async () => {
   await browser.get("https://qaclickacademy.github.io/protocommerce/");
   await console.log("browser lunched");
  });

  When(': click on the shop and add all products in cart', async () => {
    await element(by.linkText("Shop")).click();
    await selectItems("Samsung Note 8");
    await selectItems("iphone X");

    await element(by.partialLinkText("Checkout")).getText().then(async(text)=> {
        let res = text.split("(");
        let x = res[1].trim().charAt(0);
        let y = x;
        await console.log(y);
        await assert.equal(res[1].trim().charAt(0),x);
    })
  });

  When(': I calculate all price', async () => {
    let value;
    let amount=new Array() ;
    let set= new Set();
    await element(by.partialLinkText("Checkout")).click();
    await element.all(by.css("td[class*='text-center']")).each(async(item)=>{
          item.element(by.css("strong")).getText().then(async(text)=> {
               await console.log(text);
               let res =text.split('.');
               value=Number(res[1].trim());
               amount.push(value);
               set.add(value);
               await console.log("my value ="+value);
               await console.log("my amounts"+amount);
        }) 
    })
        let add=0;
            // for (let i = 0; i < amount.length; i++) {
            //     await console.log("array value = "+amount[i]);
            //     add=add+amount[i];
            //  }
             for (let num of set) {
 
              await console.log("iterbale value of set = "+num);     //1 2 3 4 5 6
               add=add+num;
            }


             await console.log("total calculate value ="+add);
             await console.log("my amounts final"+amount);
  });

  Then(': some should be shown', async () =>  {
    await console.log("Then Statement");
  });