class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello my name is: ${this.name} and my age is: ${this.age}`);
    }
}

var ppl = new Person("Atal", 30);
var firstcall = ppl.sayHello();

console.log(firstcall);



///Inheritance 

class Person1 {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

class Student extends Person1 {

}

let student1 = new Student('Jack');
student1.greet();

console.log(student1);

// Polymorphism 

class Firstclass {
    add() {
        console.log("First Method");
    }

}

class Secondclass extends Firstclass {
    add() {
        console.log(20 + 40);
    }
}

class Thirdclass extends Secondclass {
    add() {
        console.log("Last Method");
    }
}


var obj = new Firstclass();
var obj1 = new Secondclass();
var obj2 = new Thirdclass();

obj.add();
obj1.add();
obj2.add();

console.log(obj + obj1 + obj2);

