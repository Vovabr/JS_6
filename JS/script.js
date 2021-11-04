/*1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены.*/

let str = 'aaa@bbb@ccc';

console.log(str.replace(/@/g, '!'));



/*2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025.*/

let date = '2025-12-31';

let date1 = date.replace(/(2025)(-12-)(31)/, '$3$2$1');

console.log(date1.replace(/-/g, '/'));



/*3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice).*/

let str1 = "Я учу javascript!";

console.log(str1.substr(2, 4));
console.log(str1.substring(6, 16));
console.log(str1.slice(2, 16));



/*4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.*/

let arr = [4, 2, 5, 19 ,13, 0, 10];

let sum = 0;

for (i = 0; i < arr.length; i++) {
    
    let cube = Math.pow(arr[i], 3);

    sum += cube;  
} 
let sqrt = Math.sqrt(sum);

console.log(sqrt);



/*5. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.*/

function num(a, b) {

    let c = a - b;

    return Math.abs(c);

}

console.log(num(3, 5));
    

    
/*6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).*/

let dateNow = new Date();

function add(num) {
    
    if (num <= 9) {

    return '0' + num;

    } else {

        return num;

    }
}

let strTime = dateNow.getHours() + ':' + dateNow.getMinutes() + ':' + dateNow.getSeconds() + ' ' + add(dateNow.getDate()) + '.' + add(dateNow.getMonth()) + '.' + dateNow.getFullYear();

console.log(strTime);



/*7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.*/

let str2 = 'aa aba abba abbba abca abea';

console.log(str2.match(/ab+a/g));



/*8. Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код страны> <код города или сети> <номер телефона>). Функция должна возвращать true или false. Используйте регулярные выражения.*/

let numPhone = prompt('Введите номер телефона в формате: +375 (11) 1111111');

function chek(phone) {

    let regexp = /^\+375\ \(17|25|29|33|44\) \d{7}$/gi;
    
    return regexp.test(phone);
}

console.log(chek(numPhone));



/*9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя может содержать только буквы, цифры, но не быть первыми и единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не может быть длиной менее 2 и более 11 символов.

Функция должна возвращать true или false. Используйте регулярные
выражения.*/

function validEmail(email) {
    let trueChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '@', '.', '-', '_'];

    let trueSpChars = ['@', '.', '-', '_'];

    let error = false;

    if (!isNaN(email[0])) error = true;

    if (email.indexOf('@') <= 1) error = true;

    if (email.indexOf('@') == -1 || 
        email.indexOf('@') != email.lastIndexOf('@')
    ) {
        error = true;
    }

    if (email.lastIndexOf('.') < email.indexOf('@')) {
        error = true;
    }

    let diff = email.length-1 - email.lastIndexOf('.');
    
    if (diff < 2 || diff > 11) {
        error = true;
    }

    for (let i = 0; i < email.length-1; i++) {
        if (trueChars.indexOf(email[i]) == -1) {
            error = true;
            break;
        }

        if (trueSpChars.indexOf(email[i]) != -1 && (
            i == 0 || i == email.length-1 ||
            trueSpChars.indexOf(email[i+1]) != -1 ||
            trueSpChars.indexOf(email[i-1]) != -1
        )) {
            error = true;
            break;
        }
    }
    return !error;
}

console.log(validEmail('name@gmail.com'));
console.log(validEmail('name@gmail.c'));



/*10. Напишите ф-цию, которая из полного адреса с параметрами и без, например: https://tech.onliner.by/2018/04/26/smart-do-200/? utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес доменного имени (https://tech.onliner.by), остальную часть адреса без параметров (/2018/04/26/smart-do-200/), параметры (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе может и не быть каких-либо составляющих. Ф-ция должна возвращать массив.*/

let adressBar = 'https://tech.onliner.by/2018/04/26/smart-do-200/? utm_source=main_tile&utm_medium=smartdo200#zag3';

function addAdress() {

    let array = [];

    let domain = adressBar.substr(0,23),
        adress = adressBar.substr(23,25),
        parameters = adressBar.substr(50,42),
        hach = adressBar.substr(92);

    array.push(domain, adress, parameters, hach);
    
    return array;

}

console.log(addAdress());