

function NumBtn(title,id,options) {
  console.log("In Number controller")
 
  console.log("//////////",options.className);
  console.log("{{{{{{{",options.numBtnId)

  this.init = function(title,id,options) {
    this.options=options;
    console.log(" 4 Numeric controller init ====> ",title)
    this.model = new numModel();
    this.view = new numView(title,id,this.options);  
  }
  Button.call(this,title,id,options);
  };
 
  NumBtn.prototype = Object.create(Button.prototype);
  NumBtn.prototype.constructor = NumBtn;
