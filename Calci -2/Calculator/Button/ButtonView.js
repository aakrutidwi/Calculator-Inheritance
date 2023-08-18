var ButtonView = function(){
    console.log("n button view")
    this.init = function (){
this.setWidget();
    }

    this.setWidget = function(){
console.log("in ButtonView setWidget")
        this.WidgetElement = document.createElement("button");
        this.WidgetElement = this.title;
        this.WidgetElement.setAttribute(this.className);

    }

    this.getWidget= function(){
        console.log("ButtonView getWidget ", this.WidgetElement )
    return this.WidgetElement;
    }
}

ButtonView.prototype.init = function(){
    console.log("in btnView");
}