"use strict";
/**
 *
 * @authors Your Name (you@example.org)
 * @date    2019-10-09 10:41:25
 * @version $Id$
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Relative Import以/, ./或../为开头. 如
// import Entry from "./components/Entry";
// import { DefaultHeaders } from "../constants/http";
// import "/mod";
// 所有其他的都是为non-relative import, 如:
// import * as $ from "jquery";
// import { Component } from "@angular/core";
// ///<reference path="./jquery.d.ts" />
require("jquery-ts");
var zip = require("./ZipCodeValidator");
var a = "智能测试 今天表现为7";
console.log(a);
// let element=document.createElement('div')
var strings = ["Hello", "98052", "101"];
// Validators to use
var validator = new zip();
strings.forEach(function (s) {
    console.log("\"" + s + "\" - " + (validator.isAcceptable(s) ? "matches" : "does not match"));
});
var ZipCodeValidator_1 = require("./cluss/ZipCodeValidator");
var LettersOnlyValidator_1 = require("./cluss/LettersOnlyValidator");
// import { Calculator, test } from "./cluss/Calculator";
var ProgrammerCalculator_1 = require("./cluss/ProgrammerCalculator");
var cd = new ProgrammerCalculator_1.Calculator2(2);
ProgrammerCalculator_1.test(cd, "001+010="); // prints 3
// let c = new Calculator();
// test(c, "1+2*33/11="); // prints 9
var strings2 = ["Hello", "98052", "101"];
// Validators to use
var validators = {};
validators["ZIP code"] = new ZipCodeValidator_1.ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator_1.LettersOnlyValidator();
// Show whether each string passed each validator
strings2.forEach(function (s) {
    for (var name_1 in validators) {
        console.log("\"" + s + "\" - " + (validators[name_1].isAcceptable(s) ? "matches" : "does not match") + " " + name_1);
    }
});
var MyClass_1 = require("./cluss/MyClass");
var MyFunc_1 = require("./cluss/MyFunc");
var xx = new MyClass_1.default('dd');
console.log(xx.greet());
console.log(MyFunc_1.default());
$('#vid').html(a);
//添加类
// import * from "./arr";
require("./arr");
// require("./arr");
require("./interface");
require("./clu");
require("./fanxing");
require("./typejianrong");
require("./test-2");
// $('#vid').html(a);
// function logClass(target:any){
// 	//保存原构造函数的引用
// 	var original=target;
// 	//用来生成类的实例的工具方法
// 	function construct(constructor,args){
// 		var c:any=function(){
// 			return constructor.apply(this,args)
// 		}
// 		c.prototype=constructor.prototype;
// 		return new c();
// 	}
// 	//新的构造函数行为
// 	var f:any=function(...args){
// 		console.log("New"+original.name);
// 		return construct(original,args);
// 	}
// 	//复制原型，使用instanceof操作能正常使用
// 	f.prototype=original.prototype;
// 	//返回新的构造函数（将会覆盖原构造函数）
// 	return f;
// }
// @logClass
// class Ps{
// 	public name:string;
// 	public surname:string;
// 	constructor(name:string,surname:string){
// 		this.name=name;
// 		this.surname=surname;
// 	}
// 	public saySomething(something:string):string{
// 		return this.name+" "+this.surname+" says:"+something;
// 	}
// }
// function helloWord(target: any) {
//     console.log('hello Word!11111111111111111111');
// }
// @helloWord
// class HelloWordClass {
// }
/*装饰器部分*/
console.log('装饰器部分开始');
function addAge(args) {
    return function (target) {
        target.prototype.age = args;
    };
}
function method(target, propertyKey, descriptor) {
    console.log('==================target:=================');
    console.log(target);
    console.log('==================prop:=================');
    console.log("prop:" + propertyKey);
    console.log('==================descriptor:=================');
    console.log(descriptor);
    console.log('==================desc=================');
    console.log("desc " + JSON.stringify(descriptor) + "\n\n");
}
;
var Hello = /** @class */ (function () {
    function Hello() {
        this.name = "";
        this.age = 0;
        console.log('hello');
        this.name = 'yugo';
    }
    Hello.prototype.hello = function () {
        return 'instance method';
    };
    Hello.shello = function () {
        return 'static method';
    };
    __decorate([
        method
    ], Hello.prototype, "hello", null);
    __decorate([
        method
    ], Hello, "shello", null);
    Hello = __decorate([
        addAge(18)
    ], Hello);
    return Hello;
}());
console.log(Hello.prototype.age); //18
var hello = new Hello();
console.log(hello.age); //18
function log(target, propertyKey) {
    var value = implicitly, has, typeimplicitly, has, type, propertyKey = (void 0)[0];
    // 用来替换的getter
    var getter = function () {
        console.log("Getter for " + propertyKey + " returned " + value);
        return value;
    };
    // 用来替换的setter
    var setter = function (newVal) {
        console.log("Set " + propertyKey + " to " + newVal);
        value = newVal;
    };
    // 替换属性，先删除原先的属性，再重新定义属性
    if (delete this[propertyKey]) {
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}
var Calculator = /** @class */ (function () {
    function Calculator(subnum) {
        this.num = subnum;
    }
    Calculator.prototype.square = function () {
        return this.num * this.num;
    };
    __decorate([
        log
    ], Calculator.prototype, "num", void 0);
    return Calculator;
}());
var cal = new Calculator(2);
// cal.num = 2;
console.log(cal.square());
console.log('装饰器部分结束');
var x;
//判断这个 y 的类型是{ name: string; location: string; }
var y = { named: 'Alice', name: 'Alice', location: 'Seattle' };
x = y;
console.log(x);
var items = [1, 2, 3];
items.forEach(function (item, index, array) { return console.log(item + '===' + index + '---' + array); });
//养蜂人
// class BeeKeeper {
// hasMask: boolean;
// }
// //动物管理人.
// class ZooKeeper {
// nametag: string;
// }
// //动物
// class Animals {
// numLegs: number;
// }
// //蜜蜂
// class Bee extends Animals {
// keeper: BeeKeeper;
// }
// //狮子
// class Lion extends Animals {
// keeper: ZooKeeper;
// }
// //管理人.
// function findKeeper<A extends Animals, K> (a: {new(): A; prototype: {keeper: K}}): K {
// return a.prototype.keeper;
// }
// //findKeeper(Lion).nametag; // 检查类型!
// console.log(findKeeper(Lion).nametag)
