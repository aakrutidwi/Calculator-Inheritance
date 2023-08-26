function FuncBtn(title,id,options) {
  console.log("1. In Function controller", title)

  console.log("999999999999",options.funBtnId)
  this.options = options;

  this.init = function(title,id,options) {
    this.options = options;
    console.log(" 4 Function controller init ====> ",this.options.funBtnId)
    this.model = new FuncModel();
    this.view = new FuncView(title,id,this.options);
  }
  
  Button.call(this,title,id,this.options);
  };

  FuncBtn.prototype = Object.create(Button.prototype);
 FuncBtn.prototype.constructor = FuncBtn;


