
function displayView() {

    console.log("In display view")
    this.init = function () {
        console.log("In init function")
        this.displayElement = null;
        this.setWidget();
       
    }
    this.getWidget = function () {
        console.log("in getWidget in displayview")
        console.log(this.displayElement)
        return this.displayElement;
    }

   this.setWidget = function () {

        console.log("in setWidget DisplayVeiw")

       this.displayElement = document.createElement('input');
        this.displayElement.className = "displayElement";
        this.displayElement.type = "text";
        console.log(this.displayElement)
    }
    this.init();
}

