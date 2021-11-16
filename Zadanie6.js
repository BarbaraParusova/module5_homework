let array = [1, 1, 1, 1, 1];
let lengthArr = array.length;
let k = 1;
for (let i = 1; i < lengthArr; i++) {
    if (array[0] !== array[i]) {
        console.log("False");
        break;
    } else {
        if (k === lengthArr - 1) {
            console.log("True");
        }
        k++;
    }
}
