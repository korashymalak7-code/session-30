// parameter properties
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var User = /** @class */ (function () {
        // initialization to class properties  inside the  constructor parameters 
        function User(name, age) {
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
        return User;
    }());
    var u1 = new User("malak", 19);
    console.log(u1.name);
    console.log(u1.age);
    var u2 = new User("ahmed", 19);
    console.log(u2.name);
    console.log(u2.age);
}
// Encapsulation : hiding the internal details of class
{
    var Student = /** @class */ (function () {
        function Student() {
            this.name = "";
            this.age = NaN;
        }
        Student.prototype.setValue = function (value) {
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
        };
        Student.prototype.getValue = function (value) {
            if (value == "name") {
                console.log("in class", this.name);
                return this.name;
            }
            else {
                console.log("in class", this.age);
                return this.age;
            }
        };
        return Student;
    }());
    var s1 = new Student();
    s1.setValue("malak");
    s1.setValue(19);
    console.log("in object : " + s1.getValue("name"));
    console.log("in object : " + s1.getValue("age"));
    var s2 = new Student();
    s2.setValue("manar");
    s2.setValue(-5);
    s2.getValue("name");
    s2.getValue("age");
    var s3 = new Student();
    s3.setValue("nada");
    s3.setValue(6);
    s3.getValue("name");
    s3.getValue("age");
}
// getter and setter are special keywords in typescript
{
    var Element = /** @class */ (function () {
        function Element(name) {
            this.name = name;
            this.x = ""; // typescript is strongly and loosely datatype
            this.name = name;
            console.log(this.name);
        }
        Object.defineProperty(Element.prototype, "setName", {
            set: function (name) {
                this.name = name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Element.prototype, "getName", {
            get: function () {
                return this.name;
            },
            enumerable: false,
            configurable: true
        });
        return Element;
    }());
    var ele = new Element("malak");
    console.log("before", ele.getName);
    ele.setName = "ahmed";
    console.log("after", ele.getName);
}
// Static
{
    //static method and property 
    {
        var Circuit_1 = /** @class */ (function () {
            function Circuit(radios) {
                this.radios = radios;
                this.radios = radios;
            }
            Circuit.prototype.circuitArea = function () {
                return Circuit.PI * this.radios * this.radios;
            };
            Circuit.circuit = function (r) {
                return 2 * Circuit.PI * this.PI * r;
                // this in static method refer to class
                // this.radios  : static method can't be read a non static property in class
            };
            Circuit.PI = 3.14;
            return Circuit;
        }());
        var r1 = new Circuit_1(10);
        console.log(r1.circuitArea());
        console.log(Circuit_1.circuit(10).toFixed(2));
    }
    //static factory method
    {
        var U_1 = /** @class */ (function () {
            function U(name, age, role) {
                this.name = name;
                this.age = age;
                this.role = role;
            }
            U.adminRole = function (name, age) {
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
            };
            U.clientRole = function (name, age) {
                if (age > 18) {
                    return new U(name, age, "client");
                }
                else {
                    console.log(" too young");
                }
            };
            U.prototype.getData = function () {
                return "Name : " + this.name + " , Age : " + this.age + " , Role : " + this.role;
            };
            return U;
        }());
        var u1 = U_1.adminRole("mohamed", 30);
        console.log(u1.getData());
        var u2 = U_1.adminRole("ahmed", 25);
        console.log(u2.getData());
        var u3 = U_1.adminRole("malak", 19);
        console.log(u3.getData());
        var u4 = U_1.clientRole("manar", 25);
        console.log(u4 === null || u4 === void 0 ? void 0 : u4.getData());
        var u5 = U_1.clientRole("nada", 12);
        console.log(u5 === null || u5 === void 0 ? void 0 : u5.getData());
    }
}
// Inheritance
{
    var Human = /** @class */ (function () {
        function Human(name, age) {
            this.name = "";
            this.age = NaN;
            console.log(name, age);
        }
        return Human;
    }());
    var Person = /** @class */ (function (_super) {
        __extends(Person, _super);
        function Person(name, age) {
            var _this = _super.call(this, "ahmed", 20) || this;
            _this.name = name;
            _this.age = age;
            console.log(name, age);
            return _this;
        }
        return Person;
    }(Human));
    var Child = /** @class */ (function (_super) {
        __extends(Child, _super);
        function Child() {
            var _this = _super.call(this, "", NaN) || this;
            _this.name = "malak";
            return _this;
        }
        return Child;
    }(Person));
    var object1 = new Person("manar", 25);
    console.log(object1);
    var object2 = new Child();
    console.log(object2);
}
// Generic 
{
    function fun(value) {
        return "Hello " + value;
    }
    console.log(fun(10));
    console.log(fun("malak"));
}
