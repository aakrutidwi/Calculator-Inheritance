// var funcContainer = document.createElement("div");
// funcContainer.className = "funcContainer";

function FuncView(title) {
    console.log(" 6 . In Func View",title)

     this.init = function(){
        console.log("11. In init function-- this is the overidden method of button init")
        this.setWidget();
     }

     this.setWidget = function(){
        console.log(" 12. in setWidget FuncVeiw")
        console.log("here we will implement function btn specific logic")
     }

ButtonView.call(this,title);


}


FuncView.prototype = Object.create(ButtonView.prototype);
FuncView.prototype.constructor = FuncView;
