

function car(){
    this.color='red';
    this.engine='turbo';
    this.brand='BMW';

    this.getModel=function(){
        console.log("this is model 2019");
    };

};


var obj=new car();
obj.getModel();
console.log(obj.engine);

module.exports=new car();
obj.getModel();
console.log(obj.engine);