/**
 *
 * @authors Your Name (you@example.org)
 * @date    2019-10-12 14:09:53
 * @version $Id$
 */
/**
 * 类
 * 公共，私有与受保护的修饰符
 */
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
var Animal1 = /** @class */ (function () {
    function Animal1(theName) {
        this.name = theName;
    }
    Animal1.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal1;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Animal1));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal1 = new Animal1("gosat");
var rhino = new Rhino();
var employee = new Employee("bob");
console.log(animal1 = rhino);
// console.log(animal1==employee)
// 
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee1.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee1;
}(Person));
var howard = new Employee1("Howard", "Sales");
console.log(howard.getElevatorPitch());
// let howard=new Employee('Howard','Sales')
// console.log(howard.getElevatorPitch());
// console.log(howard.name)
// 
var Person2 = /** @class */ (function () {
    function Person2(theName) {
        this.name = theName;
    }
    return Person2;
}());
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    function Employee2(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee2.prototype.getElevatorPitch = function () {
        return "Hello,my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee2;
}(Person2));
var howard2 = new Employee2("Howard2", "Sales2");
console.log(howard2.getElevatorPitch());
// let john=new Person2("John")
/**
 * 类
 * readonly修饰符
 */
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
console.log(dad.name);
dad.name = "工工工工工工工工工";
console.log(dad.name);
/**
 * 类
 * 存取器
 */
var passcode = "secret passcode";
var Employee3 = /** @class */ (function () {
    function Employee3() {
        this._fullName = '';
    }
    Object.defineProperty(Employee3.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee3;
}());
var employee3 = new Employee3();
employee3.fullName = "Bob Smith";
if (employee3.fullName) {
    console.log(employee3.fullName);
}
/**
 * 类
 * 抽象类
 */
var Anl = /** @class */ (function () {
    function Anl() {
    }
    Anl.prototype.move = function () {
        console.log("roaming the earch..");
    };
    return Anl;
}());
var Dept = /** @class */ (function () {
    function Dept(name) {
        this.name = name;
    }
    Dept.prototype.printName = function () {
        console.log("Department name:" + this.name);
    };
    return Dept;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Dept));
var dept; // 允许创建一个对抽象类型的引用
// dept=new Dept();// 错误: 不能创建一个抽象类的实例
dept = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
dept.printName();
dept.printMeeting();
// dept.generateReports();// 错误: 方法在声明的抽象类中不存在
/**
 * 类
 * 构造函数
 */
var Greeter2 = /** @class */ (function () {
    function Greeter2() {
        this.greeting = "";
    }
    Greeter2.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter2.standardGreeting;
        }
    };
    Greeter2.standardGreeting = "Hello, there";
    return Greeter2;
}());
var greeter1;
greeter1 = new Greeter2();
console.log(greeter1.greet());
var greeterMaker = Greeter2;
greeterMaker.standardGreeting = "Hey there!";
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
// var Greeter3 = (function () {
// 	function Greeter3() {
// 	}
// 	Greeter3.prototype.greet = function () {
// 	if (this.greeting) {
// 	return "Hello, " + this.greeting;
// 	}
// 	else {
// 	return Greeter.standardGreeting;
// 	}
// 	};
// 	Greeter3.standardGreeting = "Hello, there";
// 	return Greeter;
// })();
// var greeter1;
// greeter3 = new Greeter3();
// alert(greeter3.greet());
// var greeterMaker = Greeter3;
// greeterMaker.standardGreeting = "Hey there!";
// var greeter2 = new greeterMaker();
// alert(greeter2.greet());
