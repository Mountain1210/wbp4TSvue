/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-10-09 10:41:25
 * @version $Id$
 */
import "../common/css/indexless.less"
import '../common/media/demo.mp4';
import '../common/js/screenshot.js';

// Relative Import以/, ./或../为开头. 如
// import Entry from "./components/Entry";
// import { DefaultHeaders } from "../constants/http";
// import "/mod";


// 所有其他的都是为non-relative import, 如:
// import * as $ from "jquery";
// import { Component } from "@angular/core";




// ///<reference path="./jquery.d.ts" />
import "jquery-ts"
import zip = require("./ZipCodeValidator");
var a:string = "智能测试 今天表现为7";
console.log($);
// let element=document.createElement('div')

let strings = ["Hello", "98052", "101"];

// Validators to use
let validator = new zip();

strings.forEach(s => {
  console.log(`"${ s }" - ${ validator.isAcceptable(s) ? "matches" : "does not match" }`);
});
import { StringValidator } from "./interface/Validation";
import { ZipCodeValidator } from "./cluss/ZipCodeValidator";
import { LettersOnlyValidator } from "./cluss/LettersOnlyValidator";
// import { Calculator, test } from "./cluss/Calculator";
import { Calculator2, test } from "./cluss/ProgrammerCalculator";

let cd = new Calculator2(2);
test(cd, "001+010="); // prints 3

// let c = new Calculator();
// test(c, "1+2*33/11="); // prints 9
let strings2 = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: StringValidator; } = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();

// Show whether each string passed each validator
strings2.forEach(s => {
    for (let name in validators) {
        console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
    }
});

import tdd from "./cluss/MyClass";
import f from "./cluss/MyFunc";
let xx = new tdd('dd');
console.log(xx.greet())
console.log(f());



$('#vid').html(a)
//添加类
// import * from "./arr";
 
import "./arr" 
// require("./arr");
import "./interface";
import "./clu";
import "./fanxing";
import "./typejianrong";

import "./test-2"

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
function addAge(args: number) {
    return function (target: Function) {
        console.log(target)
        target.prototype.age = args;
    };
}
function method(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('==================target:=================');
   console.log(target);
   console.log('==================prop:=================');
   console.log("prop:" + propertyKey);
   console.log('==================descriptor:=================');
   console.log(descriptor)
   console.log('==================desc=================');
   console.log("desc " + JSON.stringify(descriptor) + "\n\n");
};

@addAge(1000008) 
class Hello {
    name: string="";
    age: number=0;
    constructor() {
        console.log('hello');
        this.name = 'yugo';
    }
     @method
      hello(){   // 这个是实例
        return 'instance method';
      }
    ​
      @method
      static shello(){ //当前Hello的方法
        return 'static method';
      }
}

console.log(Hello.prototype.age);//18
let hello = new Hello();

console.log(hello.age);//18




function log(target: any, propertyKey: string) {
  console.log(target)
  console.log(propertyKey)
  console.log(target[propertyKey])
    let value = target[propertyKey];
    // 用来替换的getter
    const getter = function () {
        console.log(`Getter for ${propertyKey} returned ${value}`);
        return value;
    }
    // 用来替换的setter
    const setter = function (newVal) {
        console.log(`Set ${propertyKey} to ${newVal}`);
        value = newVal;
    };
    console.log(getter)
    console.log(setter)
    // 替换属性，先删除原先的属性，再重新定义属性
    if (delete target[propertyKey]) {
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}



class Calculator {
    @log
    public num: number;
    constructor(subnum) {
      this.num=subnum;
    }
    square() {
        return this.num * this.num;
    }
}
let cal = new Calculator(2);
console.log(cal.num)
// cal.num = 2;
console.log(cal.square());







const parseConf:any = [];
class Modal {
    @parseFunc
    public addOne(@parse('number') num) {
        console.log('num:', num);
        return num + 1;
    }
}

// 在函数调用前执行格式化操作
function parseFunc(target, name, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        for (let index = 0; index < parseConf.length; index++) {
            const type = parseConf[index];
            console.log(type);
            switch (type) {
                case 'number':
                    args[index] = Number(args[index]);
                    break;
                case 'string':
                    args[index] = String(args[index]);
                    break;
                case 'boolean':
                    args[index] = String(args[index]) === 'true';
                    break;
            }
            return originalMethod.apply(this, args);
        }
    };
    return descriptor;
}

// 向全局对象中添加对应的格式化信息
function parse(type) {
    return function (target, name, index) {
        parseConf[index] = type;
        console.log('parseConf[index]:', type);
    };
}
let modal = new Modal();
console.log(modal.addOne('10')); // 11



 class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    @configurable(false)
    get y() { return this._y; }
}

function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
        console.log(target);
        console.log(propertyKey)
        console.log(descriptor)
        descriptor.configurable = value;
    };
}


function helloWord(target: any) {
    console.log(target)
    console.log('hello Word!');
}

@helloWord
class HelloWordClass {

}


console.log('装饰器部分结束');


interface Named {
named: string;
}
var x: Named;
//判断这个 y 的类型是{ name: string; location: string; }
var y = { named: 'Alice', name: 'Alice', location: 'Seattle' };
x = y;
console.log(x)


var items = [1, 2, 3];

items.forEach((item,index,array)=>console.log(item+'==='+index+'---'+array))


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
