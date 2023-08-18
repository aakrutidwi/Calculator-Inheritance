// var funcContainer = document.createElement("div");
// funcContainer.className = "funcContainer";

function FuncView(title) {
    console.log("In Func View",title)

     this.init = function(){
        console.log("In init function")
        this.setWidget();
     }

     this.setWidget = function(){
        console.log("in setWidget FuncVeiw")
     }

Button.call();

}


FuncView.prototype = Object.create(Button.prototype);
FuncView.prototype.constructor = FuncView;
