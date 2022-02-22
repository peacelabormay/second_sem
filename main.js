// Задача 1
console.log("Задача 1");

console.log(typeof(9));
// Предположение: number
// Фактический:

console.log(typeof(1.2));
// Предположение: number
// Фактический: number

console.log(typeof(NaN));
// Предположение: number
// Фактический: number

console.log(typeof("Hello World"));
// Предположение: string
// Фактический: string

console.log(typeof(true));
// Предположение: boolean
// Фактический: boolean

console.log(typeof(2 != 1));
// Предположение: true
// Фактический: boolean


console.log("сыр" + "ы");
// Предположение: сыры
// Фактический: сыры

console.log("сыр" - "ы");
// Предположение: сыр
// Фактический: NaN

console.log("2" + "4");
// Предположение: 24
// Фактический: 24

console.log("2" - "4");
// Предположение: 2
// Фактический: -2

console.log("Сэм" + 5);
// Предположение: Сэм5
// Фактический: Сэм5

console.log("Сэм" - 5);
// Предположение: Сэм
// Фактический: NaN

console.log(99 * "шары");
// Предположение: NaN
// Фактический: NaN

//Задача 2
console.log("Задача 2");

let a = 2;
let b = 3;

let P = 2*(a+b);
let S = a*b;

console.log("Длины сторон: ", a, b );
console.log("Периметр: ", P);
console.log("Площадь: ", S);
console.log("Отношение: ", P/S);

//Задача 3
console.log("Задача 3");

let Cels = 25;
let F = 451;
console.log(`${Cels}\xB0C соответствует ${Cels*33.8}\xB0F`);
console.log(`${F}\xB0F соответствует ${F/33.8}\xB0C`);

//Задача 4
console.log("Задача 4");

let year = prompt('Введите любой год цифрами');
alert(year%4 == 0 ? (year%100 != 0 ? "False" : "True") : "False");

//Задача 5
console.log("Задача 5");


let first = +prompt("Введите первое число");
let second = +prompt("Введите второе число");

alert("Проверим равно ли одно из чисел 10 или сумма чисел равна 10");

if (first == 10 || second == 10 || first + second == 10) {
    alert("Истина");
}
else alert("Ложь");

//Задача 6
let numSheet = prompt("Введите любое натуральное число");

let str = "";
for (let i = 1; i <= numSheet; i++){
    str += i + " овечка..."
}
console.log(str);

//Задача 7
console.log("Задача 7");

let ch = 0;
while (ch<=15) {
  if (ch%2 == 0) {
      console.log(`${ch} четное`)
    }
  else console.log(`${ch} нечетное`)
  ch++;
}

//Задача 8
console.log("Задача 8");

let star = "*";
let grid = "##";
let g = 1;
do {
    console.log(star);
    console.log(grid);
    star+= "**";
    grid+= "##";
    g++;
}
while (g<=6);

//Задача 9
console.log("Задача 9");

let d = 5;
let e = 8;
let f = -4;
let t;

if (d > f) {
    t = d;
    d = f;
    f = t;
}

if (d > e) {
    t = d;
    d = e;
    e = t;
}

if (e > f) {
    t = e;
    e = f;
    f = t;
}

console.log(d, e, f);

//задача 10 
console.log("Задача 10");

let A =-5;
let B =-1;
let C = 0;
let D = 6;
let E =-4;

if (A>B && A>C && A>D & A>E) {
    console.log(A);
}
else if (B>A && B>C && B>D & B>E){
    console.log(B);
}
else if (C>A && C>B && C>D & C>E){
    console.log(C);
}
else if (D>A && D>B && D>C & D>E){
    console.log(D);
}
else if (E>A && E>B && E>C & E>D){
    console.log(E);
}
