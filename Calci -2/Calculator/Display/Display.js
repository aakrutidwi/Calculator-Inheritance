function display(id,options) {
    console.log("Indisplay controller");
    console.log("55555555555",options.className)
    this.options=options;
    this.model = new displayModel();
   
    this.view = new displayView(id,this.options);

    this.displayElement = this.view.getWidget();
    console.log("widget element"+ this.displayElement)

 this.getWidget = function(){
    console.log("In getwidget of display ctrl")
 return this.displayElement;
 } 

 this.getDisplayValue = function () {
   return this.view.getDisplayValue();
}
}