// var numContainer = document.createElement("div");
//     numContainer.className = "numContainer";


function numView(title1) {
    console.log("In Numbtn View" , title1)
   

     this.init = function(){
        console.log("In init function")
        this.numberBtn = null;
       this.setWidget();
     }

     this.getWidget = function(){
        console.log("in getWidget in Numview")
        return this.numberBtn;    
     }

     this.setWidget = function(){
        console.log("in setWidgetNumVeiw")
        this.numberBtn = document.createElement("button");
        this.numberBtn.innerHTML = title1;
      //   console.log(this.numberBtn);
     }
     this.init();
}

   