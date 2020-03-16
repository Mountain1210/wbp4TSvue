
//module ValidationUtils ＝＝＝＝＝＝　module已经被　namespace代替
export namespace ValidationUtils{
	export interface StringValidator{
		isAcceptable(str:string):boolean;
	}


	/*验证email*/
	var emailReg=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	export class EmailValidator implements StringValidator{
		isAcceptable(s:string){
			return emailReg.test(s)
		}
	}

	/*匹配移动电话号码*/
	var telReg=/^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
	export class TelValidator implements StringValidator {
		isAcceptable(s:string){
			return telReg.test(s)
		}
	}

}

// export ValidationUtils;