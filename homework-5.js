// Задание №1: Создал функцию, которая принимает 2 параметра: город и температуру и выводит сообщение в консоль.

function showWeather(city, temperature) {
console.log(`Сейчас в ${city} температура - ${temperature} градусов по Цельсию`);
}
showWeather("Москва", 20);

// Задание №2: Создал переменную, которая хранит внутри себя скорость света; Добавил функцию сравнения скорости со скоростью света.

const speedLight = 299792458;
function checkSpeed(speed) {
  if (speed > speedLight) {
    console.log( "Сверхсветовая скорость");
  }
  else if (speed < speedLight) {
    console.log("Субсветовая скорость");
  }
  else {
    console.log("Скорость света");
  }
}
 checkSpeed(1000000000);
 checkSpeed(300000);
 checkSpeed(299792458);

 // Задание №3: Создал переменную №1, которая содержит продукт и переменную №2, которая содержит его цену;

const fruit = 'apple';
const price = 20;
function calculate(budget) {
  if (budget >= price) {
    console.log(`${fruit} приобретен.Спасибо за покупку!`); 
  } 
  else {
    console.log(`Вам не хватает ${price - budget}$, пополните баланс`);
  }
}
calculate(50);
calculate(20);
calculate(10);


// Задание №4: Создал функцию

function flyAnotherCity(name) {
  console.log(`Приветствую, ${name}! Добро пожаловать`);
}
flyAnotherCity('Мавлид');

const firstFlight = 'Москва';
const transFerAnotherPlane = 'Dubai';
const flyToMedina = 'Медину';
let timeFromMoscow = "23:00";
let boardingTimeMedina = "7:00";
console.log(`Вылет из ${firstFlight} в ${timeFromMoscow}`);
console.log(`Пересадка в аэропорту ${transFerAnotherPlane}`);
console.log(`Посадка в аэропорту ${flyToMedina}! Время посадки ${boardingTimeMedina}. Спасибо что были с нами!`);