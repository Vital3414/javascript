// // 4. Исправьте ошибки, чтобы код работал
// const product = {
//     price: 5000,
//     showPrice() {
//         console.log(this.price);
//     },
// };
// product.showPrice();

//6. Напишите функцию each(array, callback), которая
//первым параметром принимает массив, а вторым - функцию,
//которая применится к каждому элементу массива.
//Функция each должна вернуть новый массив, элементами
//которого будут результаты вызова callback
//callback функци должна умножать элементы на 2

// const mainArray = [3, 5, 6, 34, 8, 83, 12, 34];

// function each(array, callback) {
//     return newArray = array.map(callback)
//     // return newArray = array.map(value => value * 2) // те саме
// }

// function multiply(value) {
//     return value * 2;
// }

// console.log(mainArray)
// console.log(each(mainArray, multiply))

// function each(array, callback) {  //інший спосіб
//     const newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(callback(array[i]));
//     }

//     return newArray;
// }

// class User {
//     #login;
//     #email;
//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get getClientData() {
//         return {
//             login: this.#login,
//             email: this.#email,
//         }
//     }

//     set changeLogin(newLogin) {
//         this.#login = newLogin;
//     }

//     set changeEmail(newEmail) {
//         this.#email = newEmail;
//     }

// }


// const client = new User('Yurii', 'hffhfh@ukr.net')
// // console.log(client);

// client.changeLogin = 'Liubov';
// // console.log(client);

// console.log(client.getClientData.login);

// // console.log(client.#login);

// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, players) => total + (players.playtime / players.gamesPlayed), 0);

// console.log(totalAveragePlaytimePerGame)

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));

// const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);

// const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);

// console.log(sortedByAuthorName)
// console.log(sortedByReversedAuthorName)
// console.log(sortedByAscendingRating)
// console.log(sortedByDescentingRating)

//? КАЛЬКУЛЯТОР

// read(a, b) - приймає два значення
// add() - повертає суму збережених значень
// mult() - перемножує збереженні значення та повертає результат

// const calculator = {
//     a: 0,
//     b: 0,
//     read(a, b) {
//         this.a = a;
//         this.b = b;
//     },
//     add() {
//         return this.a + this.b;
//     },
//     mult() {
//         return this.a * this.b;
//     },
// }
// calculator.read(5, 10);
// console.log(calculator)

////////////////////////////////////////////////////////////////////

// Example 1 - Блогер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер
// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок: User ${ пошта } is ${ вік } years old and has ${кількість постів } posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// class Blogger {
//     constructor({ name, age, numberOfPosts, topics }) {
//         this.name = name;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }
//     getInfo() {
//         return `Blogger ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`
//     }
//     updatePostCount(value) {
//         this.numberOfPosts += value
//     }
// }

// const mango = new Blogger({
//     name: 'mango@mail.com',
//     age: 24,
//     numberOfPosts: 20,
//     topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//     name: 'poly@mail.com',
//     age: 19,
//     numberOfPosts: 17,
//     topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

//! ====================================================

// class User {
//     static sta = {
//         admin: "ADMIN",
//         user: "USER",
//     };

//     #private;

//     constructor({ name, status }) {
//         this.name = name;
//         this.status = status;
//         this.#private = "This is a private field";
//     }
// }

// const admin = new User({ name: "Alex", status: User.sta.admin });
// const user = new User({ name: "Oleg", status: User.sta.user });
// console.log(admin)
// console.log(user)

// const output = document.querySelector(".output");
// let scrollEventCounter = 0;

// document.addEventListener("scroll", () => {
//   scrollEventCounter += 1;
//   output.textContent = scrollEventCounter;
// });