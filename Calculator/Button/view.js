var ButtonView = function(title,id,options){
    console.log(" 7 . in button view",title)
console.log("????????",options)

    this._init = function (title,id,options){
        console.log("????????",options)
        console.log(" 8. buttonview init")
        this.WidgetElement = null;
        this._setWidget(title,id,options);
        console.log(" 10. back from setWidget")
        this.init(title,id,options);
    }
    
    this._setWidget = function(title,id,options){
        console.log("9 . in ButtonView setWidget")
        console.log("all the logic common to every button goes here....")
        this.WidgetElement = document.createElement("button");
        console.log("---------",this.WidgetElement);
        this.WidgetElement.innerHTML=title;
        console.log("+++++++++",this.WidgetElement);
        console.log(id);
        this.WidgetElement.setAttribute("id",options.btnId);
        this.WidgetElement.setAttribute("className",options.className);
    }

    this.getWidget= function(){
        console.log("ButtonView getWidget ", this.WidgetElement )
        return this.WidgetElement;
    }
    this._init(title,id,options);
}


ButtonView.prototype.init = function(){
    console.log("this method is overridden in child----so it won't be called")
    console.log("In btn view prototype init ");
}
