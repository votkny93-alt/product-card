// gfg
import { comments } from "./comments.js";

// 2.Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(number => number >= 5);
const remainingNumbers = numbers.slice(5, 10);

// console.log(remainingNumbers);
// console.log(filteredNumbers); 

// 3.Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.

const kitchenUtensils = ["Сковорода", "Нож", "Блендер", "Кастрюля", "Чайник"];
const hasKnife = kitchenUtensils.includes("Нож");

// console.log(hasKnife);

// 4.Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.
function reverseArray(arr) {
    return [...arr].reverse();}

const reversedNumbers = reverseArray(numbers)

// console.log(reversedNumbers);

const reversedKitchenUtensils = reverseArray(kitchenUtensils)

// console.log(reversedKitchenUtensils);

// 7.Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const filteredComments = comments.filter(comment => comment.email.includes(".com"));

// console.log(filteredComments);

// 8.Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const updatedComments = comments.map(comment => {
  if (comment.id <= 5) {
    return {...comment, postId: 2};
  } else {
     return {...comment, postId: 1};
  }
});

// console.log(updatedComments);

// 9.Перебрать массив, что бы объекты состояли только из айди и имени

const shortData = comments.map(comment => ({ id: comment.id, name: comment.name }));

// console.log(shortData);

// 10.Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

// Используем красивое и понятное имя validatedComments
const validatedComments = comments.map(comment => ({
    ...comment,
    isInvalid: comment.body.length > 180
}));

// console.log(validatedComments);

// 11.Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map
const reducedEmails = comments.reduce((accumulator, comment) => {
    accumulator.push(comment.email);
    return accumulator;
}, []);

// console.log(reducedEmails);

const mappedEmails = comments.map(comment => comment.email);

// console.log(mappedEmails);

// 12.Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const emailsStringByDefault = mappedEmails.toString();

// console.log(emailsStringByDefault);

const emailsStringWithSpaces = mappedEmails.join("  ");

// console.log(emailsStringWithSpaces);

