function Button (title){
    console.log(" 2. Button controller")
console.log(title)
    this._init = function(){
        console.log(" 3. in init Button controller")
        this.init(title);
        }
        this._init();
}



Button.prototype.getWidget = function(){
    console.log("in Button prototype getWidget",this.WidgetElement)
    return this.view.WidgetElement;
}

Button.prototype.init = function () {
    console.log("in Button.prototype.init")
    this.model = new ButtonModel();
    this.view = new ButtonView();

    
}