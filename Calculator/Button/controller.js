function Button (title,id,options){
    console.log(" 2. Button controller")
console.log(title)
console.log(options)
    this._init = function(title,id,options){
        console.log(" 3. in init Button controller")
        this.init(title,id,options);  // calling overridden mehtod
        }
        this._init(title,id,options);
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