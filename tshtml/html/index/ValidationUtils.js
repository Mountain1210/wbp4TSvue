"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//module ValidationUtils ＝＝＝＝＝＝　module已经被　namespace代替
var ValidationUtils;
(function (ValidationUtils) {
    /*验证email*/
    var emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    var EmailValidator = /** @class */ (function () {
        function EmailValidator() {
        }
        EmailValidator.prototype.isAcceptable = function (s) {
            return emailReg.test(s);
        };
        return EmailValidator;
    }());
    ValidationUtils.EmailValidator = EmailValidator;
    /*匹配移动电话号码*/
    var telReg = /^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
    var TelValidator = /** @class */ (function () {
        function TelValidator() {
        }
        TelValidator.prototype.isAcceptable = function (s) {
            return telReg.test(s);
        };
        return TelValidator;
    }());
    ValidationUtils.TelValidator = TelValidator;
})(ValidationUtils = exports.ValidationUtils || (exports.ValidationUtils = {}));
// export ValidationUtils;
