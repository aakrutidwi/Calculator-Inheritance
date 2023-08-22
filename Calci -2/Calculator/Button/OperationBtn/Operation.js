
function OperationBtn(title) {
    console.log(" 1 In Operation controller")

    this.init = function() {
      console.log(" 4 operation controller init ======>",title)
      this.model = new opModel();
      this.view = new opView(title);  
    }
    Button.call(this,title); 
    };

    OperationBtn.prototype = Object.create(Button.prototype);
    OperationBtn.prototype.constructor = OperationBtn;

