// var funcContainer = document.createElement("div");
// funcContainer.className = "funcContainer";

function FuncView(title) {
    console.log("In Func View",title)

     this.init = function(){
        console.log("In init function")
        this.functionBtn = null;
        this.setWidget();
     }

     this.getWidget = function(){
        console.log("in getWidget in funcview")
        return this.functionBtn;
     }

     this.setWidget = function(){
        console.log("in setWidget FuncVeiw")
         this.functionBtn = document.createElement("button");
        this.functionBtn.innerHTML =title;
     
     }

     this.init();
}

