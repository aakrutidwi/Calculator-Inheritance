function CalVeiw() {
  this.init = function () {
    console.log("in  init CalVeiw ");
    this.container = null;
    console.log("In calci view");
    this.setWidget();
  };

  this.getWidget = function () {
    console.log("in getWidget in calc view");
    console.log(this.container);
    return this.container;
  };

  this.setWidget = function () {
    console.log("in setWidget CalVeiw");
    this.container = document.getElementById("calc-2");
    console.log(this.container);

    this.btnContainer = document.createElement("div");
    this.btnContainer.className = " btnscontainer";

    this.funcContainer = document.createElement("div");
    this.funcContainer.className = "funcContainer";

    this.operationContainer = document.createElement("div");
    this.operationContainer.className = "operationContainer";
    
    this.numContainer = document.createElement("div");
    this.numContainer.className = "numContainer";

    this.displayContainer = document.createElement("div");
    this.displayContainer.className = "displayContainer";

    this.btnContainer.append(this.funcContainer);
    this.btnContainer.append(this.operationContainer);
   this.btnContainer.append(this.numContainer);
    console.log("000" + this.container);
    this.container.append(this.displayContainer);
    this.container.append(this.btnContainer);

    console.log("9999999" + this.container);
  };

  this.setdisplayWidget = function (displayElement) {
  console.log("in setdisplaywidget " + displayElement)
  this.displayContainer.append(displayElement);
    }

  this.setFuncWidget = function (functionBtn) {
    this.funcContainer.append(functionBtn);
  }

  this.setNumWidget = function (numberBtn) {
    this.numContainer.append(numberBtn);
  }

  this.setOperationWidget = function (operationBtn) {
   this.operationContainer.append(operationBtn);
  }






  this.init();
}
