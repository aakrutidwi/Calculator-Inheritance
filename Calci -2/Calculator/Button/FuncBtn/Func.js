function FuncBtn(title) {
  console.log("1. In Function controller", title)

  this.init = function(title) {
    console.log(" 4 Function controller init ====> ",title)
    this.model = new FuncModel();
    this.view = new FuncView(title);
  }
  
  Button.call(this,title);
  };

  FuncBtn.prototype = Object.create(Button.prototype);
 FuncBtn.prototype.constructor = FuncBtn;


