

function NumBtn(title) {
  console.log("In Number controller")

  this.init = function() {
    console.log(" 4 Numeric controller init ====> ",title)
    this.model = new numModel();
    this.view = new numView(title);  
  }
  Button.call(this,title);
  };
 
  NumBtn.prototype = Object.create(Button.prototype);
  NumBtn.prototype.constructor = NumBtn;
