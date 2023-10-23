// Задание 1
// const numb = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < numb.length;  i++) {
//     
//   console.log(numb[i]); 
    //  if (numb[i] === 10) break;  
// }

// Задание 2
// const arrNumder =[1, 5, 4, 10, 0, 3];
// let result = -1;
// for (let i= 0;  i < arrNumder.length; i ++){
//    if (arrNumder[i] === 4) {
//     result =i;
//     break;
//    }
// }
// console.log(result);


// Задание 3
// let num = [1, 3, 5, 10, 20];
// num = num.join(' ');
// console.log(num);

// Задание 4
// const result = [];
// for(let i = 0; i < 3; i++) {
//     result[i] = [];
//     for(let j = 0; j < 3; j++){
//         result[i] [j] = 1;
//     }
// }
// console.log(result);

// Задание 5
// const numb = [1, 1, 1, 1];
// const newNumb = numb.push (2, 2, 2, 2);
// console.log(numb);
// console.log(newNumb);

// Задание 6
// let numbSorting = [9, 8, 7, 'a', 6, 5];
// numbSorting.sort();
// console.log(numbSorting.pop('a'));
// console.log(numbSorting);

// Задание 7
// const arr =[9, 8, 7, 6, 5];
// if (arr.includes(+(prompt('Угадайте число')))) {
//     alert('Угaдал');
// } else {
//     alert('Не угадал');
// }

// Задание 8
// const alphabet = 'abcdef';

// arrString = alphabet.split('');
// arrString.reverse();
// console.log(arrString.join(''));

//Задание 9 
// const arrTotal = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];
// // console.log(arrTotal[0].concat(arrTotal[1]));
// console.log(arrTotal.flat());

// //Задание 10
// const arrNumb5 = [1, 6, 4, 8];

// for (i = 0; i < arrNumb5.length; i++) {
//     if (i + 1 === arrNumb5.length) {
//         console.log(arrNumb5[i]);
//         break;
//     }
//     console.log(arrNumb5[i] + arrNumb5[i + 1]);
// }

// //Задание 11
// const arrNumb6 = [1, 6, 4, 8];
// const arrNumb6Square = arrNumb6.map(el => el ** 2);

// console.log(arrNumb6Square);

// //Задание 12
// const arrWords = ['слово', '', 'слог', 'длинное предложение', 'буква'];

// function getLengthWords(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] = array[i].length;
//     }
//     return array;
// }
// console.log(getLengthWords(arrWords));

// //Задание 13
// const arrMixNumber1 = [-1, 0, 5, -10, 56];
// const arrMixNumber2 = [-25, 25, 0, -1000, -2];

// function filterPositive(array) {
//     const arrResult = [];
//     let el = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < 0) {
//             arrResult[el] = array[i];
//             el++;
//         }        
//     }
//     return arrResult;
// }
// console.log(filterPositive(arrMixNumber2));