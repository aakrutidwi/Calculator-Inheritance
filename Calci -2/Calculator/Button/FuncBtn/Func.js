function FuncBtn(title) {
  console.log("In Func controller");

  console.log(title);
  this.model = new FuncModel();
  this.view = new FuncView(title);

  this.functionBtn = this.view.getWidget();
  console.log("widget element" + this.functionBtn);

  this.getWidget = function () {
    console.log("In getwidget of function ctrl");
    return this.functionBtn;
  };
}

