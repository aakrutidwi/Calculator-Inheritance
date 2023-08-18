function FuncBtn(title) {
  console.log("In Operation controller")

  this.init = function() {
    this.model = new FuncModel();
    this.view = new FuncView(title);
  }
  Button.call(this,title);
  };

  FuncBtn.prototype = Object.create(Button.prototype);
 FuncBtn.prototype.constructor = FuncBtn;


