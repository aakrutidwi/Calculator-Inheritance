// var operationContainer = document.createElement("div");
// operationContainer.className = "operationContainer";

function opView(title2) {
    console.log("in op view")

    
    this.init = function(){
        console.log("In init function")
        this.operationBtn = null;
        this.setWidget();
    }

    this.getWidget = function(){
        console.log("in getWidget in Operationview")
        return this.operationBtn; 
       
    }

    this.setWidget = function(){
        console.log("in setWidget OperationVeiw")
        this.operationBtn = document.createElement("button");
        this.operationBtn.innerHTML = title2;
        console.log(this.operationBtn);
    }

    this.init();
}
