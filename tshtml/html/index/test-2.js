"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jquery-ts");
var VU = require("./ValidationUtils");
var strs = ["13697811800", "jilongliang@126.com"];
console.log(VU.ValidationUtils);
// var uv=VU.ValidationUtils;
var validators1 = {};
console.log(typeof (validators1));
validators1['Tel'] = new VU.ValidationUtils.TelValidator;
validators1['Email'] = new VU.ValidationUtils.EmailValidator;
function showMsg1() {
    strs.forEach(function (s) {
        for (var name in validators1) {
            console.log('"' + s + '"' + (validators1[name].isAcceptable(s) ? '匹配' : '不匹配') + name);
        }
    });
}
function showMsg2() {
    var telObj;
    telObj = new VU.ValidationUtils.TelValidator;
    var tel = "13212345678";
    var flag = telObj.isAcceptable(tel);
    console.log(flag ? tel + " 匹配 " : tel + "\t 不匹配 ");
    console.log(flag ? tel + " 匹配 " : tel + "\t 不匹配 ");
    $("#msg2").html(flag ? "<span style='color:red;'>" + tel + " 匹配</span> " :
        "<span>" + tel + "\t 不匹配</span>");
}
$(function () {
    showMsg1();
    showMsg2();
});
