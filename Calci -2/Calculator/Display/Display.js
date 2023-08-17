function display() {
    console.log("Indisplay controller");
    this.model = new displayModel();
    this.view = new displayView();

    this.displayElement = this.view.getWidget();
    console.log("widget element"+ this.displayElement)

 this.getWidget = function(){
    console.log("In getwidget of display ctrl")
 return this.displayElement;
 } 
   
}