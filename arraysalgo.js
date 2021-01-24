var testArr = [6,3,5,1,2,4]
for(var j = 0; j < testArr.length; j++){
    if (j == 0) {
        var sum1 = testArr[j];
    } 
    else if (j > 0) {
        sum1 = testArr[j] + sum1;
    }
    console.log("Num: " + testArr[j] + " Sum: " + sum1);
}

var newArr = [];
for(var j = 0; j < testArr.length; j++){
    newArr.push(j * testArr[j]);
}
console.log(newArr);