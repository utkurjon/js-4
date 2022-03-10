let name = prompt('Как Вас зовут?');
let curentYear = +prompt('Введите текущий год');
let dob = +prompt('Введите год Вашего рождения');
let age;

age = curentYear - dob
console.log(name+','+' Ваш возраст '+age); 






var a = +prompt('Введите количество примеров');
function rand(max){
    return Math.floor(Math.random() * max + 1);
}
var max = 20;
 
for (i = 0; i < a; i++) {
    var b = rand(max);
    var c = rand(max);
    var e = Math.floor(Math.random() * 4 + 1)
 
    if (e == 1) {
        var sum = b + c;
        var d = prompt("Дайте правильный ответ:" + b + "+" + c + "=");
    } else if (e == 2) {
        var sum = b - c;
        var d = prompt("Дайте правильный ответ:" + b + "-" + c + "=");
    } else if (e == 3) {
        var sum = b * c;
        var d = prompt("Дайте правильный ответ:" + b + "*" + c + "=");
    } else if (e == 4) {
        var sum = b / c;
        var d = prompt("Дайте правильный ответ:" + b + "/" + c + "=");
    }
 
    if (sum == d){
        console.log("Ваш ответ верный - " + sum);
    } else {
        console.log("Ваш ответ не верный - " + d + "!" + " Верный ответ - " + sum + "!");
    }
}