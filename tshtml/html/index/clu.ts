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

class Animal1{
	private name:string;
	public constructor(theName:string){
		this.name=theName;
	}
	public move(distanceInMeters:number){
		console.log(`${this.name} moved ${distanceInMeters}m.`)
	}
}

class Rhino extends Animal1{
	constructor(){
		super("Rhino")
	}
}

class Employee{
	private name:string;
	constructor(theName:string){
		this.name=theName;
	}
}

let animal1=new Animal1("gosat");
let rhino=new Rhino();
let employee=new Employee("bob")

console.log(animal1=rhino);
// console.log(animal1==employee)
// 
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee1 extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee1("Howard", "Sales");
console.log(howard.getElevatorPitch());
// let howard=new Employee('Howard','Sales')
// console.log(howard.getElevatorPitch());
// console.log(howard.name)
// 
class Person2{
	protected name:string;
	protected constructor(theName:string){
		this.name=theName
	}
}

class Employee2 extends Person2{
	private department:string;

	constructor(name:string,department:string){
		super(name);
		this.department=department;
	}
	public getElevatorPitch(){
		return `Hello,my name is ${this.name} and I work in ${this.department}.`
	}

}
let howard2=new Employee2("Howard2","Sales2");
console.log(howard2.getElevatorPitch());
// let john=new Person2("John")

/**
 * 类
 * readonly修饰符
 */

class Octopus{
	name:string;
	readonly numberOfLegs:number=8;
	constructor (theName:string){
		this.name=theName;
	}
}

let dad =new Octopus("Man with the 8 strong legs");
console.log(dad.name)
dad.name="工工工工工工工工工";
console.log(dad.name)

/**
 * 类
 * 存取器
 */
let passcode = "secret passcode";

class Employee3 {
    private _fullName: string='';

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee3 = new Employee3();
employee3.fullName = "Bob Smith";
if (employee3.fullName) {
    console.log(employee3.fullName);
}

/**
 * 类
 * 抽象类
 */

abstract class Anl{
	abstract makeSound():void;

	move():void{
		console.log("roaming the earch..");
	}
}

abstract class Dept{
	constructor(public name:string){

	}

	printName():void{
		console.log("Department name:"+this.name);
	}

	abstract printMeeting():void;
}

class AccountingDepartment extends Dept {
	
	constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
	

}

let dept: Dept;// 允许创建一个对抽象类型的引用

// dept=new Dept();// 错误: 不能创建一个抽象类的实例
dept=new AccountingDepartment();// 允许对一个抽象子类进行实例化和赋值

dept.printName();
dept.printMeeting();
// dept.generateReports();// 错误: 方法在声明的抽象类中不存在



/**
 * 类
 * 构造函数
 */


class Greeter2 {
    static standardGreeting = "Hello, there";
    greeting: string="";
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter2.standardGreeting;
        }
    }
}

let greeter1: Greeter2;
greeter1 = new Greeter2();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter2 = Greeter2;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter2 = new greeterMaker();
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