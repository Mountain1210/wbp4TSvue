// 接口部分

/*可选属性*/
interface SquareConfig {
	color?:string;
	width?:number;
	// [propName: string]: any;
}

function createSquare(config:SquareConfig):{color:string; area:number}{
	let newSquare={color:"white",area:1000};
	if(config.color){
		newSquare.color=config.color
	}
	if(config.width){
		newSquare.area=config.width*config.width;
	}
	return newSquare;
}

let mySquare=createSquare({color:'black'})

console.log(mySquare)

/*只读属性*/
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

interface SquareConfig {
	color?:string;
	width?:number;
	[propName: string]: any;
}
let mySquare1 = createSquare({ colour: "red", width: 100 });

console.log(mySquare1)

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}
console.log(mySearch('abcd','c'));

let mySearch1: SearchFunc;
mySearch1 = function(src, sub): boolean {
  let result = src.search(sub);
  return result > -1;
}

console.log(mySearch1('abcd','e'));
	
/*接口---可索引的类型*/

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

console.log(myStr)

/*接口----类类型 */
interface ClockInterface {
    currentTime: Date;
     setTime(tm:Date):void;
     // eat(str:string):void;
}

class Clock implements ClockInterface {
    currentTime: Date=new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
var ck=new Clock(2,3);
var date=new Date(1222233);
console.log(ck.setTime(date))

/*接口----类静态部分与实例部分*/

interface ClockConstructor{
	new (hour:number,minute:number):ClockInterface1;
}

interface ClockInterface1{
	tick():void; //这里必须有返回类型
}

function createClock(ctor:ClockConstructor,hour:number,minute:number):ClockInterface1{
	return new ctor(hour,minute);
}

class DigtalClick implements ClockInterface1{
	constructor(h:number,m:number){}
	tick(){
		console.log('beep beep')
	}
}

class AnalogClock implements ClockInterface1{
	constructor(h:number,m:number){}
	tick(){
		console.log('tick tock')
	}
}

let digital=createClock(DigtalClick,50,1000)
let analog=createClock(AnalogClock,50,1000)
console.log(digital.tick())
console.log(analog.tick())


/*接口-----继承接口**/

interface Shape{
	color:string;
}

interface PenStroke{
	penWidth:number;
}

interface Square extends Shape,PenStroke{
	sideLength:number;
}

// let square=<Square>{};
// square.color="blue";
// square.sideLength=10;
// square.penWidth=5.0;

/*接口---------混合类型*/
interface Counter{
	(start:number):string;
	interval:number;
	reset(s:string):void;
}

function getCounter():Counter{
	let counter=<Counter> function(start:number){console.log(start)};
	counter.interval=123;
	counter.reset=function(str:string){console.log(str)};
	return counter;
}

let cd=getCounter();
console.log(cd(10));
console.log(cd.reset("AI"));
cd.interval=5.0

console.log(cd.interval)

/**
 * 接口部分
 * 接口继承类
 * 接口继承了类，那么子类也必有继承接口继承的类
 */

class Control{
	private state:any;
}

interface SelectableControl extends Control{
	select():void;
}

class Button extends Control implements SelectableControl{
	select(){}
}

class TextBox extends Control {

}
class Div extends Control implements SelectableControl {
    select() { }
}


// class Control {
//     private state: any;
// }

// interface SelectableControl extends Control {
//     select(): void;
// }

// class Button extends Control implements SelectableControl {
//     select() { }
// }
// class TextBox extends control{

// }

// class Image implements SelectableControl{
// 	select(){}
// }

// class Location{

// }
// 

/**************************************************************/

//类

class Greeter{
	greeting:string;
	constructor(message:string){
		this.greeting=message;
	}
	greet(){
		return "Hello,"+this.greeting;
	}
}

let greeter=new Greeter("world")
console.log(greeter.greet())

/**
 * 类
 * －－－－继承
 */

// class Animal{
// 	move(distanceInMeters:number=0){
// 		console.log(`Animal moved ${distanceInMeters}m.`)
// 	}
// }

// class Dog extends Animal{
// 	bark(){
// 		console.log('woof! woof!')
// 	}
// }

// const dog=new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();
class Animal{
	name:string;
	constructor(theName:string){
		this.name=theName
	}
	move(distanceInMeters:number=0){
		console.log(`${this.name} moved ${distanceInMeters}m.`)
	}
}

class Snake extends Animal{
	constructor(name:string){
		super(name);
	}
	move(distanceInMeters=5){
		console.log('Slithering...');
		super.move(distanceInMeters)
	}
}

class Horse extends Animal{
	constructor(name:string){
		super(name)
	}
	move(distanceInMeters=45){
		console.log('Galloping...');
		super.move(distanceInMeters);
	}
}

let sam=new Snake("Sammy the Python");
let tom:Animal=new Horse('Tommy thie Palomino')
sam.move();
tom.move(34)