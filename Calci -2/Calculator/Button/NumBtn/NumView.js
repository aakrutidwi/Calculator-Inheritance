// var numContainer = document.createElement("div");
//     numContainer.className = "numContainer";


function numView(title,id,options) {
    console.log(" 6 In Numbtn View" , title)
     this.init = function(id,options){
      console.log("11. In init function-- this is the overidden method of button init")
       this.setWidget(id,options); 
     }
 
 
     this.setWidget = function(){
        console.log("12 .in setWidgetNumVeiw")
     }
   ButtonView.call(this,title,id,options);
}


numView.prototype = Object.create(ButtonView.prototype);
numView.prototype.constructor = numView;

   