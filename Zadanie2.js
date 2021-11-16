let x;
switch (typeof x) {
    case "number":
        console.log("X — число");
        break;
    case "boolean":
        console.log("X - логический тип");
        break;
    case "string":
        console.log("X - строка");
        break;
    default:
        console.log("X - непонятный тип данных");
}
