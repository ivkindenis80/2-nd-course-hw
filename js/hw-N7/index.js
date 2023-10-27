// Задание 1
// let str = 'Строка';
// console.log(str.toUpperCase());

// Задание 2
// const products = ['яблоко', 'груша', 'гриб', 'огурец'];
// let search = prompt('Введите названия продукта');
// products.forEach((product) => {
//     if (product.toLowerCase().includes(search.toLowerCase())){
//         console.log(product);
//     }
// });

// Задание 3
// const num =  32.58884;
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));

// Задание 4
// const arrNumbs = [52, 53, 49, 77, 21, 32];
// const max = Math.max(...arrNumbs);
// const min = Math.min(...arrNumbs);
// console.log(max);
// console.log(min);

// Задание 5
// function rondomNumber(minValue, maxValue) {
//     return Math.round(Math.random() * (maxValue - minValue) + minValue);
// }
// console.log(rondomNumber(1, 10));

// Задание 6
// function getRandomArrNumbers(maxValue) {
//     const arrRandom = [6, 2, 7];
//     for (let i = 0; i < Math.floor(maxValue / 2); i++) {
//         arrRandom.push(Math.round(Math.random() * maxValue));
//     }
//     return arrRandom;
// }

// console.log(getRandomArrNumbers(7));

// Задание 7
// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
//   }

//   getRandomArbitrary(5, 35)

// Задание 8
// let nowDate = new Date();
// console.log(nowDate);

// Задание 9
// let currentDate = new Date();
// let days = 73 * 24 * 60 * 60 * 1000;
// let searchDate = +currentDate + days;
// let daysLate73 = new Date(searchDate);

// console.log(daysLate73);

// Задание 10
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// const nowDate = new Date();
// let fullDate = "Сегодня: " + nowDate.getDate() + 
// " " + months[nowDate.getMonth()] + 
// " " + nowDate.getFullYear() + 
// ", " + days[nowDate.getDay()]  + 
// nowDate.getHours() + " " + nowDate.getMinutes() + " " + nowDate.getSeconds();
// console.log(fullDate);
