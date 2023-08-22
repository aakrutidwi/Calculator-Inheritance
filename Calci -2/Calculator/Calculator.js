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

    this.setWidget();
  };

  this.setWidget = function () {
    console.log("In setWidget Calc controller");

    // set display
    this.displayCtrl = new display();
    this.displayElement = this.displayCtrl.getWidget();
    this.view.setdisplayWidget(this.displayElement);

    // set function buttons
    for (var k = 0; k < this.model.funcArray.length; k++) {
      console.log("iiiiiiiii", this.model.funcArray[k]);
      var funCtrl = new FuncBtn(this.model.funcArray[k]);
      var functionBtn = funCtrl.getWidget();
      this.view.setFuncWidget(functionBtn);
      console.log("functionBtn==>",functionBtn)
      /////Add Event Listener
      this.addEvent(functionBtn, this.model.funcArray[k]);
    }

    // set numeric buttons
    for (var i = 0; i < this.model.numArray.length; i++) {
      console.log("jjjjjjjjjjjjjj", this.model.numArray[i]);
      var NumCtrl = new NumBtn(this.model.numArray[i]);
      var numberBtn = NumCtrl.getWidget();
      this.view.setNumWidget(numberBtn);
      console.log("NumericBtn==>",numberBtn)
      this.addEvent(numberBtn, this.model.numArray[i]);
    }

    // set operation buttons
    // this.operationCtrl = new OperationBtn();
    for (var j = 0; j < this.model.operationArray.length; j++) {
      console.log("kkkkkkkkkkkkkkkkk", this.model.operationArray[j]);
      var OperationCtrl = new OperationBtn(this.model.operationArray[j]);
      var operationBtn = OperationCtrl.getWidget();
      this.view.setOperationWidget(operationBtn);
      console.log("OperationBtn==>",operationBtn)

      this.addEvent(operationBtn, this.model.operationArray[j]);
    }
  };
 
  function onNumButtonClick(key) {
    document.querySelector("input").value +=key;
  }

  function onFunctionclick(key2) {
    console.log("In functionClick .......")
    if (key2 == "AC") {
      display = " ";
      document.querySelector("input").value = display;
    } else if (key2 == "DEL") {
      console.log("deleted" , key2)
      var disp = document.querySelector("input").value;
      var newstring = disp.slice(0, -1);
      disp = newstring;
      document.querySelector("input").value = disp;
      console.log(disp);
    }
  }

  function onOperationclick(key1) {
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

  this.addEvent = function (btn, title) {
    this.title = title;
    console.log("btn=====",btn)
    btn.addEventListener("click", () => {
        
      if (this.model.numArray.includes(title)) {
        onNumButtonClick(title);
      } else if (this.model.funcArray.includes(title)) {
        onFunctionclick(title);
      } else if (this.model.operationArray.includes(title)) {
        onOperationclick(title);
      }
    });
  };


  this.init(id,elementId,options);
}
