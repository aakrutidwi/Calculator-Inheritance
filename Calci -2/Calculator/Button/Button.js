function Button (title){
    console.log("Button controller")
console.log(title)
    this.init = function(){
       
    }

    Button.prototype.init = function () {
        console.log("in Button.prototype.init")
        this.model = new ButtonModel();
        this.view = new ButtonView();
        console.log("button view called.........")
        this.WidgetElement = this.ButtonView.getWidget();
    }

    Button.prototype.getWidget = function(){
        console.log("in Button.prototype.getWidget",this.WidgetElement)
        return this.WidgetElement;
    }
}