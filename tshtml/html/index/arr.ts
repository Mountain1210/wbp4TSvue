// console.log($)

/******************************************/
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

let c:Color=Color.Green;

console.log(colorName)


/******************************************/
let list: any[] = [1, true, "free"];

list[1] = 100;

console.log(list[1])


function sumMatrix(matrix: number[][]) {
    // console.log($)
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    console.log(sum)
    return sum;
}
sumMatrix([[1,3],[9,10]])

function keepWholeObject(wholeObject:{a:string,b?:number}){
	let {a,b=1001}=wholeObject;
	console.log(wholeObject.a)
	console.log(wholeObject.b)
}
// keepWholeObject({'aaa',2000});
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);