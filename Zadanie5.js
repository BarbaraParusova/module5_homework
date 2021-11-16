const arr = [1, 2, 3, 4, 5, 6, 7];
let lengthArr = arr.length;
console.log(lengthArr);
arr.map(function (item, index) {
    console.log(`value: ${item}, index: ${index}`);
});
