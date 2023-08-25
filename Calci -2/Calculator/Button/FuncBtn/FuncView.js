// var funcContainer = document.createElement("div");
// funcContainer.className = "funcContainer";

function FuncView(title,id,options) {
    console.log(" 6 . In Func View",title)

     this.init = function(id,options){
        console.log("11. In init function-- this is the overidden method of button init")
        this.setWidget(id,options);
     }

     this.setWidget = function(){
        console.log(" 12. in setWidget FuncVeiw")
        console.log("here we will implement function btn specific logic")
     }

ButtonView.call(this,title,id,options);


}


FuncView.prototype = Object.create(ButtonView.prototype);
FuncView.prototype.constructor = FuncView;
