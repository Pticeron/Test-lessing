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

console.log(true && 3);
console.log(true || 3);
console.log(true && 4 && 'kiwi');
console.log(true && 0 && 'kiwi');
console.log(true || 3 || 4);
console.log(true || false || 7);
console.log(null || 2 || undefined);
console.log(1 || null || 2);
console.log(1 || (2 && 3) || 2);