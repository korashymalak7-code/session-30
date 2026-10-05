"use strict";
// parameter properties
{
    class User {
        name;
        age;
        // initialization to class properties  inside the  constructor parameters 
        constructor(name, age) {
            this.name = name;
            this.age = age;
            console.log(this.name); //property of class
            console.log(name); // argument of object
            this.name = name;
            if (name == "malak") {
                console.log("ok");
            }
            else {
                console.log("no");
            }
        }
    }
    let u1 = new User("malak", 19);
    console.log(u1.name);
    console.log(u1.age);
    let u2 = new User("ahmed", 19);
    console.log(u2.name);
    console.log(u2.age);
}
// Encapsulation : hiding the internal details of class
{
    class Student {
        name = "";
        age = NaN;
        setValue(value) {
            if (typeof (value) == "string") {
                this.name = value;
            }
            else if (typeof (value) == "number") {
                if (value <= 0) {
                    console.log("error 1");
                }
                else if (value < 18 && value > 0) {
                    console.log("error2");
                }
                else {
                    this.age = value;
                }
            }
        }
        getValue(value) {
            if (value == "name") {
                console.log("in class", this.name);
                return this.name;
            }
            else {
                console.log("in class", this.age);
                return this.age;
            }
        }
    }
    let s1 = new Student();
    s1.setValue("malak");
    s1.setValue(19);
    console.log(`in object : ${s1.getValue("name")}`);
    console.log(`in object : ${s1.getValue("age")}`);
    let s2 = new Student();
    s2.setValue("manar");
    s2.setValue(-5);
    s2.getValue("name");
    s2.getValue("age");
    let s3 = new Student();
    s3.setValue("nada");
    s3.setValue(6);
    s3.getValue("name");
    s3.getValue("age");
}
// getter and setter are special keywords in typescript
{
    class Element {
        name;
        x = ""; // typescript is strongly and loosely datatype
        constructor(name) {
            this.name = name;
            this.name = name;
            console.log(this.name);
        }
        set setName(name) {
            this.name = name;
        }
        get getName() {
            return this.name;
        }
    }
    let ele = new Element("malak");
    console.log("before", ele.getName);
    ele.setName = "ahmed";
    console.log("after", ele.getName);
}
// Static
{
    //static method and property 
    {
        class Circuit {
            radios;
            static PI = 3.14;
            constructor(radios) {
                this.radios = radios;
                this.radios = radios;
            }
            circuitArea() {
                return Circuit.PI * this.radios * this.radios;
            }
            static circuit(r) {
                return 2 * Circuit.PI * this.PI * r;
                // this in static method refer to class
                // this.radios  : static method can't be read a non static property in class
            }
        }
        let r1 = new Circuit(10);
        console.log(r1.circuitArea());
        console.log(Circuit.circuit(10).toFixed(2));
    }
    //static factory method
    {
        class U {
            name;
            age;
            role;
            constructor(name, age, role) {
                this.name = name;
                this.age = age;
                this.role = role;
            }
            static adminRole(name, age) {
                if (name == "mohamed") {
                    console.log("welcome Bis");
                    return new U(name, age, "admin");
                }
                else if (name == "ahmed") {
                    console.log("welcome Manger");
                    return new U(name, age, "admin");
                }
                else {
                    console.log("welcome to new admin");
                    return new U(name, age, "admin");
                }
            }
            static clientRole(name, age) {
                if (age > 18) {
                    return new U(name, age, "client");
                }
                else {
                    console.log(" too young");
                }
            }
            getData() {
                return `Name : ${this.name} , Age : ${this.age} , Role : ${this.role}`;
            }
        }
        let u1 = U.adminRole("mohamed", 30);
        console.log(u1.getData());
        let u2 = U.adminRole("ahmed", 25);
        console.log(u2.getData());
        let u3 = U.adminRole("malak", 19);
        console.log(u3.getData());
        let u4 = U.clientRole("manar", 25);
        console.log(u4?.getData());
        let u5 = U.clientRole("nada", 12);
        console.log(u5?.getData());
    }
}
// Inheritance
{
    class Human {
        name = "";
        age = NaN;
        constructor(name, age) {
            console.log(name, age);
        }
    }
    class Person extends Human {
        name;
        age;
        constructor(name, age) {
            super("ahmed", 20);
            this.name = name;
            this.age = age;
            console.log(name, age);
        }
    }
    class Child extends Person {
        name = "malak";
        constructor() {
            super("", NaN);
        }
    }
    let object1 = new Person("manar", 25);
    console.log(object1);
    let object2 = new Child();
    console.log(object2);
}
// Generic 
{
    function fun(value) {
        return `Hello ${value}`;
    }
    console.log(fun(10));
    console.log(fun("malak"));
}
//# sourceMappingURL=index.js.map