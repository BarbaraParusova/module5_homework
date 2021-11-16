let array = [1, 2, "hello", NaN, 0, 4, 10, 99];
let kol_ch = 0;
let kol_nch = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
        console.log("В массиве есть значение 0");
    } else if (typeof array[i] === "number" && Number.isNaN(array[i]) === false) {
        let ost = array[i] % 2;
        if (ost === 1) {
            kol_nch++;
        } else {
            kol_ch++;
        }
    }
}
console.log(kol_nch, kol_ch);
