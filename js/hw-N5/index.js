// Задание 1 
// function numberReturns(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }  
// }
// console.log(numberReturns (8, 4));
// console.log(numberReturns (2, 6));

// Задание 2 
// function enteringNumber() {
//     let incomingData = prompt('Введите число');
//     const CALCULATION = incomingData  % 2 === 0 ? 'Число чётное' : 'Число нечётное';
//     console.log(CALCULATION);
// }

// enteringNumber();

// Задание 3 
// function numbersQuare (numb) {
//     console.log(numb**2);  
// }

// let enteringNumber = +prompt('Введите число');
// numbersQuare(enteringNumber);

// Задание 4
// function  yourAge(age) {
//     if  (age > 0 && age <= 12) {
//         console.log('Привет друг');
//     } else if(age >= 13){
//         console.log('Добро пожаловать!');
//     }
//     else {
//         console.log('Вы ввели неправильное значение');
//     }
// }

// yourAge (prompt('Введите ваш возраст'));

// Задание 5 
// function num(a, b) {
//     if (isNaN(a) || isNaN(b)) {
//         return (`Одно или оба значения не являются числом`);
       
//     } else {
//         return a * b;
//     }
// }
// console.log(num(4 , 's'));

// Задание 6 
// function num() {
//     num = prompt('Введите любое число');
//     if (isNaN(num)) {
//         console.log('Переданный параметр не является числом');
//     } else {
//         console.log(`${num} в кубе равняется ${num**3}`);
//     }
// }

// num();

// Задание 7
function getRectangleRadius() {
       return this.radius **2 * 3.14 
}
function getRectangleCircles(){
    return this.radius * 3.14 ;
}

    const circle1 = {
        radius: 100,
        getArea: getRectangleRadius,
        getPerimeter: getRectangleCircles,
    };
    
    const circle2 ={
        radius: 500,
        getArea: getRectangleRadius,
        getPerimeter: getRectangleCircles,
    }; 

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());


