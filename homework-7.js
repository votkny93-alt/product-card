/*6. Сделать константу экспортируемой, добавив перед "const" ключевое слово "export".
 Таким образом мы сможем внедрить переменную из comments.js в homework-7.js и работать с ней.
  Когда мы введем название переменной, нам предложит импортировать ее - так и делаем.*/

import { postList } from "./comments.js";

console.log('Массив успешно импортирован:', postList);

// 2. Создать массив чисел от 1 до 10.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(number => number > 5);

console.log(filteredNumbers);

/* 3. Создать массив строк, относящихся к любой сущности 
  (название фильмов/книг, кухонные приборы, мебель и т.д.),
  проверить, есть ли в массиве какая-то определенная сущность. */

const kitchenTools = ['ложка', 'вилка', 'нож', 'чайник', 'тостер'];
const kitchenTool = 'вилка';
const hasItem = kitchenTools.includes(kitchenTool);

console.log(kitchenTool);
console.log(hasItem);

/*4. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный
 ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть. */

function reverseArray(arr) {
  return arr.reverse();
};

reverseArray(numbers);
reverseArray(kitchenTools);

console.log(numbers);
console.log(kitchenTools);

//7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const comEmails = postList.filter(comment => {
  return comment.email.includes('.com');
});

console.log(comEmails);

/*8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели
 postId: 2, а те, у кого id больше 5, имели postId: 1 */

const updatedPosts = postList.map(item => ({
  ...item,
  postId: item.id <= 5 ? 2 : 1
}));

console.log(updatedPosts);

//9. Перебрать массив, что бы объекты состояли только из айди и имени

const simplifiedPosts = postList.map(user => ({
  id: user.id,
  name: user.name,
}));

console.log(simplifiedPosts);

/*10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем:
 если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.*/

const validatedPosts = postList.map(item => ({
  ...item, isInvalid: item.body.length > 180
}));

console.log(validatedPosts);

// 11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

const commentMails  = postList.map(item => item.email);

console.log(commentMails );

// 12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const mailsToString = commentMails.toString();

console.log(mailsToString);

const mailsByJoin = commentMails.join('-');

console.log(mailsByJoin);