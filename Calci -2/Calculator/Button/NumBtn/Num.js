

function NumBtn(title) {
  console.log("In Operation controller")

  this.init = function() {
    this.model = new numModel();
    this.view = new numView(title);  
  }
  Button.call(this,title);
  };

  NumBtn.prototype = Object.create(Button.prototype);
  NumBtn.prototype.constructor = NumBtn;
