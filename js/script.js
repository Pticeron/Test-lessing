// const apples = 47;
// const grapes = 136;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff);

// let students = 100;
// students += 50;
// console.log(students);

// const result = 108 + 223 - 2 * 5;
// console.log(result);

    // Math

// const value = 27.9;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

// Шаблонні рядки

// const companyName = "Cyberdyne Systems";
// const repairBots = 100;
// const defenceBots = 50;
// const message = `Cyberdyne Systems has ${repairBots + defenceBots} bots in stock`;
// console.log(message);

// Методи рядків та чейнінг

// let weight = `88,3`;
// let height = `1.75`;
// const indexOfComa = weight.indexOf(`,`);
// const firstPartOfWeight = weight.slice(0, indexOfComa);
// const lastPartOfWeight = weight.slice(indexOfComa + 1);
// weight = `${firstPartOfWeight}.${lastPartOfWeight}`;
// console.log(weight);

// console.log(indexOfComa);
// console.log(weight.slice(0, indexOfComa));
// console.log(weight.slice(indexOfComa + 1));

// weight =weight.replace(`,`, `.`);
// weight = Number.parseFloat(weight);
// height = Number.parseFloat(height);
// console.log(weight);
// console.log(height);

// const bmi = weight / height ** 2;
// console.log(Number(bmi.toFixed(1)));

// console.log(true && 3);
// console.log(true || 3);
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && 'kiwi');
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log(1 || null || 2);
// console.log(1 || (2 && 3) || 2);

            // МАСИВИ

// const friends = ['Mango', 'Kiwi', 'Polly', 'Ajax'];
// console.table(friends);

// friends[1] = 'Ronny';
// console.log(friends);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// const friends = ['Mango', 'Kiwi', 'Polly', 'Ajax'];
// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i+=1) {
//     // console.log(friends[i]);
//     friends[i] += '-1';
// }
// console.table(friends);

// for(const variable of iterable) {};

// for(const friend of friends) {
//     console.log(friend);
// }

// Порахувати загальну суму покупок в корзині

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;
// 1 -перебрати масив
// for(let i = 0; i < cart.length; i +=1){
//     console.log(cart[i]);

//     total += cart[i];
// }
// 2 - створити змінну total до початку цикла
//  3 - кожен елемент додати до total
// console.log('Total :', total);

// додати податок
// for(let i = 0; i < cart.length; i +=1) {
//     cart[i] = Math.round(cart[i] * 1.1);
// }
// console.log(cart);

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// сума всіх парних чисел в масиві

// змінна total
// let total = 0;
// перебрати масив
// for(let i = 0; i < numbers.length; i += 1) {
// console.log(numbers[i]);
// на кожній інерації перевірити, чи елемент парний
// if(numbers[i] % 2 ===0) {
//     console.log('парне');
    //  якщо парний, плюсуємо до total
//     total += numbers[i];
// }
// }
// console.log(`Total:`, total);

// Variable: const number = numbers[i]; замініти numbers[i] на змінну для кращої читабельності
// Варіант через for of 

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;
// for(const number of numbers) {
//     console.log(number);

// if(number % 2 === 0) {
//     console.log('парне');
        
//     total += number;
//     }
// }
// console.log(`Total:`, total);

// Скрипт пошуку логіна
// Якщо логіна немає, вивести повідомлення "Користувач (логін) не знайдено"
// Якщо знайдено логін, вивести повідомлення "Користувач (логін) знайдено"
// Через for
// for of
// тернарний оператор

// const logins = ['m4ngonDoge', 'kiwidab3s', 'poly1scute', 'aj4dg3adm'];
// const loginToFind = 'poly1scute';
// let message = '';

// for(let i = 0; i < logins.length; i +=1) {
//     const login = logins[i];

//     if (login === loginToFind) {
//     message = `Користувач ${loginToFind} знайдено`;
//     break;
//     }
//     message = `Користувач ${loginToFind} не знайдено`; 
    
// }
// console.log(message);

// const logins = ['m4ngonDoge', 'kiwidab3s', 'poly1scute', 'aj4dg3adm'];
// const loginToFind = 'poly1scute';
// let message = `Користувач ${loginToFind} не знайдено`;

// for(let i = 0; i < logins.length; i +=1) {
//     const login = logins[i];

//     console.log('Login:', login);
//     console.log('${login} === ${loginToFind}:', login === loginToFind);

    // if (login === loginToFind) {
    // message = `Користувач ${loginToFind} знайдено`;
    // break;
    // }
// }
// console.log(message);

// const logins = ['m4ngonDoge', 'kiwidab3s', 'poly1scute', 'aj4dg3adm'];
// const loginToFind = 'poly1scute';

//     for(let login of logins) {

//     console.log('Login :', login);
//     console.log(`${login} === ${loginToFind} :`, login === loginToFind);

    
//     if (login === loginToFind) {
//     console.log(`Ура. равны!`);
//     message = `Користувач ${loginToFind} знайдено`;
//     }
//     }
    

//     console.log(message);

// const logins = ['m4ngonDoge', 'kiwidab3s', 'poly1scute', 'aj4dg3adm'];
// const loginToFind = 'poly1scute';
// let message = `Користувач ${loginToFind} не знайдено`;

// console.log(logins.includes(loginToFind));

// const logins = ['m4ngonDoge', 'kiwidab3s', 'poly1scute', 'aj4dg3adm'];
// const loginToFind = 'poly1scute';

// const message = logins.includes(loginToFind)
// ? `Користувач ${loginToFind} знайдено`
// : `Користувач ${loginToFind} не знайдено`;

// console.log(message);

// Пошук самого маленького числа

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallesNumber = numbers[0];

// for (const number of numbers) {

//     if(number < smallesNumber){
//         smallesNumber = number;
//     }
// }

// console.log(`smallesNumber:`, smallesNumber);

// Написати скрипт, який об'єднує всі елементи масива в одне строкове значення

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (const friend of friends) {
//     string += friend + ',';
// }
// string = string.slice(0, string.length -1);

// console.log(string);


// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// const string = friends.join(', ')

// console.log(string);







