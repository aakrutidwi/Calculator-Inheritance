
function displayView(id,elementId,options) {

this.options =options;
    console.log("In display view")
    this.init = function (id,options) {
        console.log("In init function")
        this.displayElement = null;
        this.setWidget(id,elementId,options);
       
    }
    this.getWidget = function () {
        console.log("in getWidget in displayview")
        console.log(this.displayElement)
        return this.displayElement;
    }

   this.setWidget = function (id,options) {

        console.log("in setWidget DisplayVeiw")
        console.log("rrrr",options.className)

       this.displayElement = document.createElement('input');
        this.displayElement.className = options.className;
        this.displayElement.type = "text";
        console.log(this.displayElement)
    }

    this.getDisplayValue = function () {
        return this.displayElement.value;
    }

    this.init(id,elementId,options);
}

