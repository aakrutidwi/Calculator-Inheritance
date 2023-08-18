
function OperationBtn(title) {
    console.log("In Operation controller")

    this.init = function() {
      this.model = new opModel();
      this.view = new opView(title);  
    }
    Button.call(title);
    };

    OperationBtn.prototype = Object.create(OperationBtn);
    OperationBtn.prototype.constructor = OperationBtn;

