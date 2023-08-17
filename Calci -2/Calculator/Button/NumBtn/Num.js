
function NumBtn(title1) {
  console.log("In NumBtn controller");

  console.log(title1);

  this.model = new numModel();
  this.view = new numView(title1);

  this.numberBtn = this.view.getWidget();
  console.log("widget element" + this.numberBtn);

  this.getWidget = function () {
    console.log("In getwidget of function ctrl");
    return this.numberBtn;
  }
}