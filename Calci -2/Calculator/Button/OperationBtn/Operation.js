
function OperationBtn(title2) {
    console.log("In Operation controller")

    console.log(title2)

    this.model = new opModel();
    this.view = new opView(title2);

    this.operationBtn = this.view.getWidget();
    console.log("widget element" + this.operationBtn);
  
    this.getWidget = function () {
      console.log("In getwidget of function ctrl");
      return this.operationBtn;
    };
}
