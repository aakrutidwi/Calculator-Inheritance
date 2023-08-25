/**
 * 
 * @param {id} id 
 * @param {elementId} elementId 
 * @param {options} options 
 */

function CalVeiw(id,elementId,options) {
  this.init = function (id,elementId,options) {
    this.id = id;
    this.options = options;
    this.elementId=elementId;
    console.log("in  init CalVeiw ");
    this.container = null;
    console.log("In calci view");
    this.setWidget(this.id,this.elementId,this.options);
  };

  this.getWidget = function () {
    console.log("in getWidget in calc view");
    console.log(this.container);
    return this.container;
  };

  this.setWidget = function (id,parentElementId,options) {
    console.log("pppppppp",options)
    console.log("in setWidget CalVeiw");
    console.log("parentElementId --- ",parentElementId)
    this.container = document.getElementById(parentElementId);   // this is hardcoded
    console.log("this.container",this.container);

    this.btnContainer = document.createElement("div");
    this.btnContainer.className = "button-"+id+"container";

    this.funcContainer = document.createElement("div");
    this.funcContainer.className = "function-"+id+"container";

    this.operationContainer = document.createElement("div");
    this.operationContainer.className ="operation-"+id+"container";
    
    this.numContainer = document.createElement("div");
    this.numContainer.className = "number-"+id+"container";
    console.log("&&&&&&&&&",id);

    this.displayContainer = document.createElement("div");
    this.displayContainer.className ="display-"+id+"container";

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

  this.init(id,elementId,options);
}
