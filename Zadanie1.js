let chislo = prompt("Введите число");
let chisloToNumb = +chislo;
console.log(chisloToNumb);
if (typeof chisloToNumb === "number") {
    if (chisloToNumb === 0) {
        console.log("Число равно 0");
    } else if (Number.isNaN(chisloToNumb) === true) {
        console.log("Это NaN");
    } else if (chisloToNumb > 0) {
        let ost = chisloToNumb % 2;
        if (ost === 0) {
            console.log("Число четное");
        } else {
            console.log("Число нечетное");
        }
    } else if (chisloToNumb < 0) {
        let modul = Math.abs(chisloToNumb);
        let ost = modul % 2;
        if (ost === 0) {
            console.log("Число четное");
        } else {
            console.log("Число нечетное");
        }
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}
