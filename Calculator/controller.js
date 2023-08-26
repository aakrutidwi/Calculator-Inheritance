/**
 * 
 * @param {calc-1} id 
 * @param {calc} elementId 
 * @param {null} options 
 */

function Calculator(id,elementId,options) {

  console.log("In Calc controller");
  this.init = function (id,elementId,options) {
    console.log("In init Calc controller");
    this.model = new CalcModel(id,options);

    console.log(document);

    this.view = new CalVeiw(id,elementId,options);
    this.widgetElement = this.view.getWidget();
    console.log("=========>" + this.widgetElement);

    this.setWidget(id,elementId,options);
  };

  this.setWidget = function (id,elementId,options) {
    console.log("In setWidget Calc controller");
    console.log("oooooo",options)

    // set display
    this.options=options;
    this.options ={
      className :"display-"+id
    }
    this.displayCtrl = new display(id,this.options);
    this.displayElement = this.displayCtrl.getWidget();
    this.view.setdisplayWidget(this.displayElement);

    // set function buttons
    this.options =options;
    for (var k = 0; k < this.model.funcArray.length; k++) {
      console.log("iiiiiiiii", this.model.funcArray[k]);
      this.options ={
        className : "function-"+ id,
        btnId : "funBtn-"+k
      }
      var funCtrl = new FuncBtn(this.model.funcArray[k],id,this.options);
      var functionBtn = funCtrl.getWidget();
      this.view.setFuncWidget(functionBtn);
      console.log("functionBtn==>",functionBtn)
      this.addEvent(functionBtn, this.model.funcArray[k]);
    }

    // set numeric buttons
    this.options =options;
    for (var i = 0; i < this.model.numArray.length; i++) {
      console.log("jjjjjjjjjjjjjj", this.model.numArray[i]);
      this.options ={
        className : "number-"+ id,
        btnId : "numBtn-"+i
      }
      var NumCtrl = new NumBtn(this.model.numArray[i],id,this.options);
      var numberBtn = NumCtrl.getWidget();
      this.view.setNumWidget(numberBtn);
      console.log("NumericBtn==>",numberBtn)
      this.addEvent(numberBtn, this.model.numArray[i]);
    }

    // set operation buttons
    for (var j = 0; j < this.model.operationArray.length; j++) {
      console.log("kkkkkkkkkkkkkkkkk", this.model.operationArray[j]);
      this.options ={
        className : "operation-"+ id,
        btnId  : "operationBtn-"+j
      }
      var OperationCtrl = new OperationBtn(this.model.operationArray[j],id,this.options);
      var operationBtn = OperationCtrl.getWidget();
      this.view.setOperationWidget(operationBtn);
      console.log("OperationBtn==>",operationBtn)
      this.addEvent(operationBtn, this.model.operationArray[j]);
    }
  };

  this.addEvent = function (btn, title) {
    btn.addEventListener("click", () => {
      if (this.model.numArray.includes(title)) {
        this.onNumButtonClick(title);
      } else if (this.model.funcArray.includes(title)) {
        this.onFunctionclick(title);
      } else if (this.model.operationArray.includes(title)) {
        this.onOperationclick(title);
      }
    });
  };
 
  this.onNumButtonClick= function(key) {
    document.querySelector("input").value += key;
  }

 this.onFunctionclick= function(key2) {
    console.log("In functionClick .......")
    if (key2 == "AC") {
      displayValue = " ";
      document.querySelector("input").value = displayValue;
    } else if (key2 == "DEL") {
      console.log("deleted" , key2)
      var disp = document.querySelector("input").value;
      var newstring = disp.slice(0, -1);
      disp = newstring;
      document.querySelector("input").value = disp;
      console.log(disp);
    }
  }

 this.onOperationclick= function(key1) {
    console.log("In onOperationClick .......")
    if (key1 == "=") {
      calculate(document.querySelector("input").value);
      console.log("equal to btn called ");
    } else {
      document.querySelector("input").value += key1;
    }
  }
    
  function calculate(displayValue) {
    var calval = eval(displayValue);
    console.log(calval);
    document.querySelector("input").value = calval;
  }
  this.init(id,elementId,options);
}
