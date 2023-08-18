// var numContainer = document.createElement("div");
//     numContainer.className = "numContainer";


function numView(title1) {
    console.log("In Numbtn View" , title1)
   

     this.init = function(){
        console.log("In init function")
       this.setWidget();
     }


     this.setWidget = function(){
        console.log("in setWidgetNumVeiw")
     }
   ButtonView.call();
}


numView.prototype = Object.create(ButtonView.prototype);
numView.prototype.constructor = numView;

   