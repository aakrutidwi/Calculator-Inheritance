var ButtonView = function(title){
    console.log(" 7 . in button view",title)
    
    this._init = function (title){
        console.log(" 8. buttonview init")
        this.WidgetElement = null;
        this._setWidget(title);
        console.log(" 10. back from setWidget")
        this.init();
    }


    this._setWidget = function(title){
        console.log("9 . in ButtonView setWidget")
        console.log("all the logic common to every button goes here....")
        this.WidgetElement = document.createElement("button");
        console.log("---------",this.WidgetElement);
        this.WidgetElement.innerHTML=title;
        console.log("+++++++++",this.WidgetElement);
        this.WidgetElement.setAttribute("class","nikkk");
    }

    this.getWidget= function(){
        console.log("ButtonView getWidget ", this.WidgetElement )
        return this.WidgetElement;
    }


    this._init(title);
}


ButtonView.prototype.init = function(){
    console.log("this method is overridden in child----so it won't be called")
    console.log("In btn view prototype init ");
}
