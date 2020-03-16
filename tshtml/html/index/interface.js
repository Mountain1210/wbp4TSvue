// 接口部分
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
function createSquare(config) {
    var newSquare = { color: "white", area: 1000 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
console.log(mySquare);
var p1 = { x: 10, y: 20 };
var mySquare1 = createSquare({ colour: "red", width: 100 });
console.log(mySquare1);
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
console.log(mySearch('abcd', 'c'));
var mySearch1;
mySearch1 = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
console.log(mySearch1('abcd', 'e'));
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
console.log(myStr);
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var ck = new Clock(2, 3);
var date = new Date(1222233);
console.log(ck.setTime(date));
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigtalClick = /** @class */ (function () {
    function DigtalClick(h, m) {
    }
    DigtalClick.prototype.tick = function () {
        console.log('beep beep');
    };
    return DigtalClick;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log('tick tock');
    };
    return AnalogClock;
}());
var digital = createClock(DigtalClick, 50, 1000);
var analog = createClock(AnalogClock, 50, 1000);
console.log(digital.tick());
console.log(analog.tick());
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
function getCounter() {
    var counter = function (start) { console.log(start); };
    counter.interval = 123;
    counter.reset = function (str) { console.log(str); };
    return counter;
}
var cd = getCounter();
console.log(cd(10));
console.log(cd.reset("AI"));
cd.interval = 5.0;
console.log(cd.interval);
/**
 * 接口部分
 * 接口继承类
 * 接口继承了类，那么子类也必有继承接口继承的类
 */
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TextBox;
}(Control));
var Div = /** @class */ (function (_super) {
    __extends(Div, _super);
    function Div() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Div.prototype.select = function () { };
    return Div;
}(Control));
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
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello," + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
console.log(greeter.greet());
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
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log('Slithering...');
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log('Galloping...');
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse('Tommy thie Palomino');
sam.move();
tom.move(34);
