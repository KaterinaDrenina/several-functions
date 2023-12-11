// Дано масив з елементами різних типів. 
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const array = [5, 3, 'a', 'b', null, 4, undefined];

function calculateNum(array) {
    let sum = array.filter(item => typeof item === 'number').reduce((acc, num) => acc + num, 0);
    let count = array.filter(item => typeof item === 'number').length;
    
    return count > 0 ? sum / count : 0;
}

const num = calculateNum(array);
console.log(num);

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, znak, y) {
    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            if (y !== 0){
                return x / y;
            } else {
                return 'Division by zero is not allowed';
            }
        case '%':
            return x % y;
        case '^':
            return Math.pow(x, y);
        default:
            return 'Invalid action';
    }
}

console.log(doMath(5, '+', 2));
console.log(doMath(5, '-', 2));
console.log(doMath(5, '*', 2));
console.log(doMath(5, '/', 2));
console.log(doMath(5, '%', 2));
console.log(doMath(5, '^', 2));

// Написати функцію заповнення даними користувача двомірного масиву. 
// Довжину основного масиву і внутрішніх масивів задає користувач. 
// Значення всіх елементів всіх масивів задає користувач.

function fillTwoDimensionalArray() {
    let mainArrayLength = parseInt(prompt("Enter main array length:"));
    let arr = [];

    for (let i = 0; i < mainArrayLength; i++) {
        let innerArrayLength = parseInt(prompt(`Enter inner array length ${i + 1}:`));
        arr[i] = [];

        for (let j = 0; j < innerArrayLength; j++) {
            let userInput = prompt(`Enter value for element [${i}][${j}]:`);
            arr[i][j] = userInput;
        }
    }

    return arr;
}

let twoDimensionalArray = fillTwoDimensionalArray();
console.log(twoDimensionalArray);

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
// Вихідний рядок та символи для видалення задає користувач.

function removeSymbols () {
    let str = prompt("Enter any word:");
    let symbsToRemove = prompt("Enter symbols to remove (separated with comma):").split(',');
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if(!symbsToRemove.includes(str[i])) {
            result += str[i];
        }
    }

    return result;
}

const result = removeSymbols();
console.log(result);