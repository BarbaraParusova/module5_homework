//Если использовать методы, котрые описаны в разделе 5.4
const myString = "Varvara";
let myNewString = myString.substr(6);
myNewString += myString.substr(5, 1);
myNewString += myString.substr(4, 1);
myNewString += myString.substr(3, 1);
myNewString += myString.substr(2, 1);
myNewString += myString.substr(1, 1);
myNewString += myString.substr(0, 1);
console.log(myNewString);
