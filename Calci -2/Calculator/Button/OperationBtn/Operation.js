
function OperationBtn(title,id,options) {
    console.log(" 1 In Operation controller")

    console.log("^^^^^^^^^^^",options.className)

    this.init = function(title,id,options) {
      this.options =options;
      console.log(" 4 operation controller init ======>",title)
      this.model = new opModel();
      this.view = new opView(title,id,this.options);  
    }
    Button.call(this,title,id,options); 
    };

    OperationBtn.prototype = Object.create(Button.prototype);
    OperationBtn.prototype.constructor = OperationBtn;

