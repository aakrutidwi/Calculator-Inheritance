// var operationContainer = document.createElement("div");
// operationContainer.className = "operationContainer";

function opView(title,id,options) {
    console.log("6 in operation view",title)
    this.init = function(id,options){
        console.log("11. In init function-- this is the overidden method of button init")
        console.log("In init function")
        this.setWidget(id,options);
    } 

    this.setWidget = function(){
        console.log(" 12 in setWidget OperationVeiw");
    }
ButtonView.call(this,title,id,options);
}

opView.prototype = Object.create(ButtonView.prototype);
opView.prototype.constructor = opView;
