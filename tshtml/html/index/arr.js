console.log($);
/******************************************/
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
var c = Color.Green;
console.log(colorName);
/******************************************/
var list = [1, true, "free"];
list[1] = 100;
console.log(list[1]);
function sumMatrix(matrix) {
    // console.log($)
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
            sum += currentRow[i_1];
        }
    }
    console.log(sum);
    return sum;
}
sumMatrix([[1, 3], [9, 10]]);
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    console.log(wholeObject.a);
    console.log(wholeObject.b);
}
// keepWholeObject({'aaa',2000});
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
