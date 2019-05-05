
describe('Protractor Alert steps', function() {

    function selectItems(product) {
        //take 4 cards into list
        //go through each index in the list - and get the title= if title =desired title then in that index i will select add button
        element.all(by.tagName("app-card")).each(async(item) =>{

            item.element(by.css("h4 a")).getText().then(async(text)=> {
                if (text == product) {
                    item.element(By.css("button[class*='btn-info']")).click();
                }
              
               
            })
        })
    }
    it('Open NonAngular js website Alerts', async() => {


        await browser.get("https://qaclickacademy.github.io/protocommerce/");

        // element(by.name("name")).sendKeys("Mystudents");
        // element(by.css("input[name='email']")).sendKeys("mystudents@gmail.com");
        // element(by.id("exampleInputPassword1")).sendKeys("password2");
        // element(by.css("input[type='checkbox']")).click();
        // element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
        // element.all(by.name("inlineRadioOptions")).first().click();
        // element(by.buttonText("Submit")).click().then(function() {
        //     element(by.css("div[class*='success']")).getText().then(function(text) {
        //         console.log(text);
        //     })
        // })
        // element(by.name("name")).clear();
        // element(by.name("name")).sendKeys("M").then(function() {
        //     element(by.css("[class='alert alert-danger']")).getText().then(function(text) {
        //         console.log(text);
        //     })
        // })
        await element(by.linkText("Shop")).click();
        await selectItems("Samsung Note 8");
        await selectItems("iphone X");

        await element(by.partialLinkText("Checkout")).getText().then(async(text)=> {
            var res = text.split("(");
           // var x = Number(res[1].trim().charAt(0));
            var x = res[1].trim().charAt(0);

            //var y = x + 1;
            var y = x;
            await console.log(y);
            await expect(res[1].trim().charAt(0)).toBe(x);
        })

    })

    it('self practice', async() => {
        var value;
        var amount=new Array();
        await element(by.partialLinkText("Checkout")).click();
        await element.all(by.css("td[class*='text-center']")).each(async(item)=>{
            await item.element(by.css("strong")).getText().then(async(text)=> {
                await console.log(text);
                   var res =text.split('.');
                   value = Number(res[1].trim());
                   amount.push(value);
                   await console.log("my value ="+value);
                   await console.log("my amounts"+amount);
                   
            })
            //await console.log("my amounts final inside"+amount);
            var add=0;
            for (var i = 0; i < amount.length; i++) {
                await console.log("array value = "+amount[i]);
                add=add+amount[i];
             }
             await console.log("total calculate value"+add);
        })
        await console.log("my amounts final outside"+amount);
        

    })
})