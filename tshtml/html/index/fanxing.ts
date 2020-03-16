/*
 * ts中泛型
 *    泛型就是在编译期间不确定方法的类型(广泛之意思)，在方法调用时，由程序员指定泛型具体指向什么类型
 */
 /**
 *  interface GenericIdentityFn {
 *     <T>(arg: T): T; //这是一个需要实现方法
 *   }

 *   function identity<T>(arg: T): T { //尖括号的T是指传入值的类型，而后面冒号的T是指返回值是T
 *     return arg;
 *   }

 *   let myIdentity: GenericIdentityFn = identity;
 *
 * 
 */

//1 泛型函数
 
/**
 * 获取数组中最小值 （数字）
 * @param {number[]} arr
 * @returns {number}
 */
function  getMinNumber(arr:number[]):number{
    var min=arr[0];
    arr.forEach((value)=>{
        if(value<min){
            min=value;
        }
    });
    return min;
}
 
/**
 * 获取数组中最小值 （字符串）
 * @param {number[]} arr
 * @returns {number}
 */
function  getMinStr(arr:string[]):string{
    var min=arr[0];
    arr.forEach((value)=>{
      console.log(value)
      console.log(min)
      console.log(value<min)
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>")
        if(value<min){
            min=value;
        }
    });


    console.log(min)
    return min;
}
 
console.log(getMinNumber([1, 3, 5, 7, 8]));//1

 console.log("================================================")
console.log(getMinStr(["tom","jerry","jack","sunny"]));//jack



/**
 * 获取数组中最小值 (T泛型通用)
 * @param {T[]} arr
 * @returns {T}
 */
function getMin<T>(arr:T[]):T{
   var min=arr[0];
   arr.forEach((value)=>{
      if(value<min){
          min=value;
      }
   });
    return min;
}
 
console.log(getMin([1, 3, 5, 7, 8]));
console.log(getMin(["tom","jerry","jack","sunny"]));



//2 泛型类
class GetMin<T>{
     arr:T[]=[];
     add(ele:T){
         this.arr.push(ele);
     }
    min():T{
       var min=this.arr[0];
       this.arr.forEach(function (value) {
          if(value<min){
              min=value;
          }
       });
       return min;
    }
}
  var gm1= new  GetMin<number>();
   gm1.add(5);
   gm1.add(3);
   gm1.add(2);
   gm1.add(9);
console.log(gm1.min());
 
var gm2= new  GetMin<string>();
gm2.add("tom");
gm2.add("jerry");
gm2.add("jack");
gm2.add("sunny");
console.log(gm2.min());
