// var operationContainer = document.createElement("div");
// operationContainer.className = "operationContainer";

function opView(title) {
    console.log("in op view")

    
    this.init = function(){
        console.log("In init function")
        this.setWidget();
    }

    this.setWidget = function(){
        console.log("in setWidget OperationVeiw");
    }
Button.call();
}

opView.prototype = Object.create(Button.prototype);
opView.prototype.constructor = opView;
