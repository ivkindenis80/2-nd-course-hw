// Игра 1

function guessTheRiddle() {
    let monthNumber = Number(prompt('Введите номер месяца'));
    if (monthNumber === 12 || monthNumber === 1 || monthNumber ===2) {
        alert ('Зима');
    } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5 ){
        alert ('Весна');
    } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8){
        alert ('Лето');
    } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
        alert ('Осень');
    } else{
        alert ('Такого месяца нет!');
    }
}

alert(guessTheRiddle(monthNumber));

// Игра 2
function rememberWords(initial) {
    let fruitBox = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruitBox = fruitBox.sort(() => Math.random() - 0.5);
    alert(fruitBox);

    let outgoingData = prompt('Чему равняется первый эллемент?');
    let outgoingData2 = prompt('Чему равняется последний эллемент?');
    
        if (fruitBox[0].toLowerCase() === outgoingData.toLowerCase() && arr[fruitBox.length-1].toLowerCase() === outgoingData2.toLowerCase()) {
          alert('Молодец,вы угадали, запомнили все слова!');
          return gameStop();
        }
        else if (fruitBox[0].toLowerCase() === outgoingData.toLowerCase() || outgoingData2.toLowerCase() === fruitBox[fruitBox.length - 1].toLowerCase()) {
          alert ('Вы были близки к победе!');
          return gameStop();
        }
    
        else {
          alert ('Вы не угадали!');
          return gameStop();
        }
      }
    
      function gameStop() {
        let a = confirm('Хочешь продолжить игру?');
        if (a === true) {
          return (words());
        }
        else {
          alert('Спасибо за внимание');
        }
      }