// child 2
 numBtn = function() {
   
};


numBtn.prototype = Object.create(Button.prototype)
numBtn.prototype.constructor = numBtn

console.log("numBtn.prototype.constructor ",numBtn.prototype.constructor)
console.log("numBtn.prototype ",numBtn.prototype)

