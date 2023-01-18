// const content = document.querySelector('.content')

// let markup = '';
// let player = 'x' ;
// for (let i = 0; i < 9; i+=1) {
//     markup += `
//     <div class="item"></div>`
    
// }

// content.insertAdjacentHTML('beforeend', markup );
// console.log(content)

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   // Change code below this line
  
//   for (const A in apartment) {
//     keys.push(A);
//     values.push (apartment[A]);
  
//     // console.log(keys)
//   }
//   console.log(values)

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
  
//   for (const color of colors){
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb)

//     console.log(rgbColors)
//   }


// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
 

//   console.log(getProductPrice('Radar'))

//    function getProductPrice(productName) {
//     // Change code below this line

//     for(const product of products){
// if(Object.keys(product)){
//     // console.log(product)
//     return product.price
// }
//     }

//     return null;

//   }


// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//   const AllArray = [];
  
//     for (let product of products){

//       if(Object.keys(product).includes(propName)){
//         AllArray.push(product[propName])
        
//       }
//     }
//     return AllArray
// }

// getAllPropValues(prpName)



// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//     // Change code below this line
  
//     const newObject ={
//       ...completed,
//        category : "General",
//        priority : "Normal",
//     }
  
//     // Change code above this line
//     console.log(newObject)

//   }


// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//      const A = this.books.indexOf(oldName)
// this.books.splice(A, 1, newName)

          
//         }

//   };


// ======================================================


// const users = ['vlad', 'masa', 'petia'];
// const userName = prompt ('enter name');

// function creatUser (users, name){
//     if(!name){
//         userName.toLocaleLowerCase();
//         console.log(' спробуй ще');
//     }return;

//     if(users.includes(userName)){
//  users.push(userName)
//         console.log(' все ок', users);
       
//     } else{
//         users.push(userName)
//         console.log(' все ок', users);
//     }


// }

// creatUser(users, userName)

// ===================================================

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
  
//     const totalPrice =  pricePerDroid *orderedQuantity;
//     if(totalPrice > customerCredits){
//       message = 'Insufficient funds!'}
//     else if(customerCredits - totalPrice) {
//       message = `You ordered ${customerCredits} droids, you have ${totalPrice} credits left`
//     }
//     // Change code above this line
//     return message;
//   }
//   console.log(message)

//   makeTransaction(500, 10, 5000)

// ================================================================

// function makeStringFromArray(array, delimeter) {

//     console.log(array)
//     console.log(delimeter)

//     let string = array.join(delimeter);
//     // Change code below this line
  
// //   let  a = array;
// //     let b = delimeter;
  
// //     string = a.join(b);
  
//     // Change code above this line
//     console.log(string)

//     return string;
//   }

//   makeStringFromArray(["JavaScript", "is", "amazing"],' ')


// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2) ;
// const nonExtremeEls = fruits.slice(1, fruits.length-1);
// const lastThreeEls = fruits.slice( -3);

// console.log(firstTwoEls)
// console.log(nonExtremeEls)
// console.log(lastThreeEls)

// ===================================================
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruits);
// }

// ============================================

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//     for (let i = 0; i < order.length; i+=1) {
//       total += order[i];
//     }
//     console.log(order)
//     console.log(total)

//     // Change code above this line
//     return total;
    
//   }


//   calculateTotalPrice([1, 2 ])

// =========================================================

// function findLongestWord(string) {
//     // Change code below this line
//    const A = string.split(' ');
//     //    console.log(A)

//        let B = A[0];
  
//   for (let i= 0; i < A.length; i+=1) {
//     // console.log(A[i].length)


// if( B.length < A[i].length){
//     B = A[i];
//     // console.log(A[i].length)

// }
//   }
//   console.log(B)
//   return B

// }

//   findLongestWord("The quick brown fox jumped over the lazy dog")

// =======================================================

// function filterArray(numbers, value) {
//     // Change code below this line
//  let newArray = [];
 
//    for (let i = 0; i< numbers.length; i+=1) {
//      if( numbers[i]> value){

//         // console.log(numbers[i])
//        newArray.push(numbers[i])
//        console.log(newArray)

//      }
//    }
//  return;
 
//    // Change code above this line
//  }

//  filterArray([1, 2, 3, 4, 5], 3)
//  filterArray([1, 2, 3, 4, 5], 4)

// ==========================================================
// function getEvenNumbers(start, end) {
//     // Change code below this line
 
//    let parNumb = [];
 
//  for (let i = start; i <= end; i+=1) {

//    if( i % 2 === 0){
//      parNumb.push(i)
//      console.log(parNumb)

//    }
//  }
 
//      // Change code above this line
//    }

//    getEvenNumbers(6, 12)

// =========================================================
// function includes(array, value) {
//     // Change code below this line
//    let message = false;

//    for (let i = 0; i < array.length; i +=1) {
//     if (array[i] === value){
//         message = true;
        
//        }
//     //    message = false;
//     //    console.log(message)

    
//    }
//    console.log(message)

//    return message

    
//     // Change code above this line
//   }
//   includes([1, 2, 3, 4, 5], 3)
//   includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')
//   includes(['apple', 'plum', 'pear', 'orange'], 'kiwi')

// ==========================================================

// const filter = function (array, callback1){

//     let filterArray = [];
//     for ( let el of array){
//         // console.log(callback1(el))

//         if(callback1(el)){
//             filterArray.push(el);

//         }
//     }
//     console.log(filterArray)
//     return filterArray;
// }



// const callback1 = value => value > 3;


// const callback2 = value => value < 5;
    
// // filter([1, 2, 3]);
// filter([1, 2, 3, 4, 5, 6], callback1);
// filter([1, 2, 3, 4, 5, 6, 21, 0, -12], callback2);

// ==============================================================

// const makeF = function(F){


//     const makeB = function(B){
//         console.dir(`${B} визов внутрішню функці`)
    
//     }
//     return makeB;
// }

// // const F = makeF('F');
// // F(1)

// const V = makeF('внешняя функція makeF')
// V('визивает внутренюю')

// console.dir(V)

// =========================================================

// let val = 7
//  function createAdder() {
//     function addNumbers(a, b) {
//      let ret = a + b
//      return ret
//    }
//    return addNumbers
//   }
//   let adder = createAdder()
//  let sum = adder(val, 8)
// console.log(sum)
// // console.log('example of function returning a function: ', sum)

// ==============================================

// function createCounter (){
//    let counter = 0;
//    function myFunction () {
//     counter = counter + 1
//    return counter;


//    }
//    return myFunction;
// }

// const increment = createCounter()

// const c1 = increment()
// const c2 = increment()

// console.log(increment)
// console.log(c2)

// ==================================================

// const pizzaPalace = {
//    pizzas: ["Ultracheese", "Smoked", "Four meats"],
//    order(pizzaName, onSuccess, onError ) {

//          if(this.pizzas.includes(pizzaName)){

//            console.log (onSuccess(pizzaName));
//           }
//           console.log(onError(pizzaName));
//       }
//    };
//  // Change code above this line
 
//  // Callback for onSuccess
//  function makePizza(pizzaName) {
//    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//  }
 
//  // Callback for onError
//  function onOrderError(error) {
//    return `Error! ${error}`;
//  }
 
//  // Method calls with callbacks
//  pizzaPalace.order("Smoked", makePizza, onOrderError);
//  pizzaPalace.order("Four meats", makePizza, onOrderError);
//  pizzaPalace.order("Big Mike", makePizza, onOrderError);
//  pizzaPalace.order("Vienna", makePizza, onOrderError);

// ===============================================================
 


// const calculateTotalPrice = (quantity, pricePerItem) =>  quantity * pricePerItem;

// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
  
//     orderedItems.forEach( item => totalPrice += item){
//         return totalPrice
//     }
//   console.log(totalPrice)
//   }

//   calculateTotalPrice([12, 85, 37, 4])

// ===========================================================

// const  filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach(number =>
//     { if(number > value) {
//             filteredNumbers.push(number)
//           }
//      })
    

//       console.log(filteredNumbers)
  
//     // Change code above this line
//     return filteredNumbers;
//   }
//   filterArray([1, 2, 3, 4, 5], 3)

// ==============================================

// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Полі", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Ківі", score: 94 },
//     { name: "Х'юстон", score: 64 },
//   ];
  
//   const names = students.map(student => student.name);
//   console.log(names);// ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']

//   const scores = students.map(student => student.score);
//   console.log(scores)

//   const uptadetStudent = students.map(student =>({
//         ...student,
//         score: student.score + 10
//     })

//   )
//   console.table(uptadetStudent)

//   const namesA = 'Манго';

//   const studentToUptadet = students.map(student => {
//     if(namesA === student.name){
//         return `this is`;
//     }
//     return  `this is not`;

//   })

//   const studentToUptadet = students.map(student => {
// return namesA === student.name ?
// `this is ${namesA}`
// :student.name;
//   })

// const studentToUptadet = students.map(student => namesA === student.name
//     ?`this is ${namesA}`
//     :student.name,
//     );

//   console.table(studentToUptadet)

// =============================================================

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positivValues = values.filter(value => value > 5)
// console.log(positivValues)

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const filter = students.filter(
//     ({score}) => {
//     return score > 40})
// console.log(filter)

// ==============================================================

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// // const colorFind = colorPickerOptions.find(({label}) => label === 'red' )
// // console.log(colorFind)

// const colorFind = colorPickerOptions.findIndex(({ label }) => label === 'white')
// console.log(colorFind)


// ================================================================

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// });

// console.log(total); // 32

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const totalLike = tweets.reduce((total, tweet) =>
//   total + tweet.likes, 0);
//   // console.log(totalLike);

// const totalTags = tweets.reduce((AllTags, tweet) => {
//   AllTags.push(...tweet.tags);

//   return AllTags
// }, [])
  
// console.log(totalTags);


// ---------------------------------------------------------
  
// const tagStatus = totalTags.reduce((acc, tag) => {
// console.log(tag);
// console.log(acc);


//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {})
// ----------------------------------------------------------

// const tagStatus = totalTags.reduce((acc, tag) => {
//   console.log(acc);

  
//   return {
//     ...acc,
//     [tag]: acc[tag]
//       ? acc[tag] += 1
//       : 1
//   }
//     }, {})
  


// console.log(tagStatus);

// -------------------------------------------------------------

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((acc, tweet) => {
//     acc.push(...tweet.tags);

//     return acc;
//   }, []);

// const tags = getTags(tweets);

// // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// // Це стандартна практика, якщо callback-функція досить велика.

// // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// // то створюємо її і записуємо їй значення 0.
// // В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//   // if (!acc.hasOwnProperty(tag)) {
//   //   acc[tag] = 0;
//   // }

//   // acc[tag] += 1;

//   // return acc;

//   return {
//     // ...acc,
//     // [tag]: acc[tag]
//     //   ? acc[tag] += 1
//     //   : 0
//     ...acc,
//     [tag]: acc[tag]
//       ? acc[tag] += 1
//       : 1
//   }
// };

// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// ======================================================

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(books => books.genres);
// console.log(genres)

// ================================================================

// [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         skills: ["ipsum", "lorem"],
//         gender: "male",
//         age: 37,
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//         gender: "female",
//         age: 34,
//     }]

//         const getUserNames = users => {
//             return users.map(user => user.name)

//   };

// console.log(getUserNames)


// ===================================================

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2);

// console.log(evenNumbers)
// console.log(oddNumbers)

// ===========================================================

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((allGenres, i, array) =>
//     array.indexOf(allGenres) === i);

// // console.log(allGenres)
// console.log(uniqueGenres)

// ===================================================================

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks)
// console.log(booksByAuthor)


// ======================================================

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// const getTotalBalanceByGender = (users, gender) => users
//     .filter(user => user.gender === gender)
//     .reduce((total, user) =>
// total + user.balance
//     , 0)


// console.log(getTotalBalanceByGender(users , 'male'))


// -----------------------------------------------------------

// const getSortedFriends = users =>
//     users.flatMap(user => user.friends)
//         .reduce((nameAllFriends, nameFriend ) => {
//             if (!nameAllFriends.includes(nameFriend)) {
//                 nameAllFriends.push(nameFriend)
                
//                 return nameAllFriends
//             } else {
//                 return nameAllFriends
//         }
//         }, [])
//     .sort((a, b)=> a.localeCompare(b) )

    
// ;

// console.log(getSortedFriends(users))

// ----------------------------------------------------------

// const getNamesSortedByFriendCount = users => {
//     return [...users]
//         .sort((a, b) => a.friends.length - b.friends.length)
//         .reduce((nameAll, user) => {
//             nameAll.push(user.name)
            
//             console.log(nameAll);
//                         console.table([...users].sort((a, b) => a.friends.length - b.friends.length));

//             return nameAll;

//         }, [])


// };

// console.log(getNamesSortedByFriendCount(users))

// ------------------------------------------------------------

// const sortByName = users => {
//     return [...users]
//     .sort((a, b) => a.name.localeCompare(b.name))

// };

// console.log(sortByName(users))

// // --------------------------------------------------------/ const sortByDescendingFriendCount = users => [...users].sort((a,b) => b.friends.length - a.friends.length)

// // const sortByDescendingFriendCount = users => users.flatMap(user => user.friends)
// //     .sort((a, b) => b.length - a.length)

//     console.log(sortByDescendingFriendCount(users))

// ----------------------------------------------------------

// const getFriends = (users) => {

//     return users
//           .flatMap(user => user.friends)
//               .filter((friend, index, array) => array
//                   .indexOf(friend) === index);
//    };


// // const getFriends = (users) => {
// //     return users
// //         .flatMap(user => user.friends)
// //         .filter((el, i, arr) => arr
// //             .indexOf(el) === i
// //         );
// // }
//       console.table(getFriends)

// ==========================================================

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(item => item % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(item => item % 2 !== 0);

// const eachElementInSecondIsEven = secondArray;
// const eachElementInSecondIsOdd = secondArray;

// const eachElementInThirdIsEven = thirdArray;
// const eachElementInThirdIsOdd = thirdArray;

//       console.table(eachElementInFirstIsOdd)

// ========================================================

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// Change code below this line

// const totalAveragePlaytimePerGame =
//     players.reduce((total, player ) => {
//         return total + (player.playtime / player.gamesPlayed)
//     }, 0)
//     console.log(totalAveragePlaytimePerGame)

// =============================================================

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a,b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a,b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// ============================================================

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books].filter(book => book.rating > MIN_BOOK_RATING)
//     .sort((a, b) => a.author.localeCompare(b.author))
    

// console.table(names)

// const names2 = [...books].filter(book => book.rating > MIN_BOOK_RATING)
//     .map(book => book.author)
//     .sort((a, b) => a.localeCompare(b))

//     console.table(names2)

// ========================================================

// const arr = [1, 2, 3, 4, 5]
// let arrSum = [];
// const getSumm = arr.reduce((acc, el, i) => {
//     //             console.log(acc)
//     // console.log(el)
//     //             console.log(arrSum)


//     return arrSum[i] = acc + el
// }, 0);
//             console.log(arrSum)

// // const arr = [1,2,3,4,5];
// // const arrSum = [];
// // const arrLength = arr.reduce((start, value, index) => {
// // return arrSum[index] = start + value;
// // },0);

// // console.log(arrSum)

// ===============================================

// const camelize = str =>
//   str.split('-')
//     // .map((word, index) => index ? word.toUpperCase() : word)


//     .map((el, i) => {
//       if (i !== 0) {
//         return (el[0].toUpperCase() + el.slice(1))
//       } else
//         return el
//     })
      
  
//   .join('')


// console.log(camelize( 'my-short-string'))

// ========================================================

// let arr = [5, 3, 8, 15, 43,52];
// const filterRange = (array, a, b) =>
//   array.filter(numb => (a <= numb && numb <= b))

//   console.log(filterRange(arr, 9, 22))

// =======================================================

// function copySorted(arr) {
//   return [...arr].sort((a,b) => a.localeCompare(b));
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log( sorted );
// // console.log( arr );

// =======================================================

// let ivan = { name: "Іван", age: 25 };
// let petro = { name: "Петро", age: 30 };
// let mariya = { name: "Марія", age: 28 };

// // let names = [];
// // names.push(ivan.name, petro.name, mariya.name)

// -------------------------------------------------------


// let usersA = [
//   { name: "Іван", age: 25 },
//   { name: "Петро", age: 30 },
//   { name: "Марія", age: 28 },
// ];

// let names = usersA.map(item => item.name);

// console.log( names );

// ================================================

// let students = [
//   { name: "Іван", surname: "Іванко", age: 25 },
//   { name: "Петро",surname: "Петренко", age: 30 },
//   { name: "Марія",surname: "Мрійко", age: 28 },
// ];

// const usersMapped = students.map(student => ({
//       userFullName: `${student.name} ${student.surname}`,
//       age: student.age
// }))
    
// console.table( usersMapped );

// ===============================================


// let students = [
//   { name: "Іван", surname: "Іванко", age: 25 },
//   { name: "Петро",surname: "Петренко", age: 30 },
//   { name: "Марія",surname: "Мрійко", age: 28 },
// ];

// const sortByAge = [...students].sort((a, b) => a.age - b.age)

// console.table(sortByAge);

// ===========================================================

// let students = [
//   { name: "Іван", surname: "Іванко", age: 25 },
//   { name: "Петро",surname: "Петренко", age: 30 },
//   { name: "Марія",surname: "Мрійко", age: 28 },
// ];

// const getAverageAge = arr => arr.reduce((acc, student) => {
//   return acc + student.age
// }, 0) / students.length

// console.log(getAverageAge(students));

// =====================================================

// function unique(arr) {
//    return arr.filter(( el, i, array) => array.indexOf(el) === i)
 
// }

// let strings = ["Привіт", "Світ", "Привіт", "Світ",
//   "Привіт", "Привіт", "Світ", "Світ", ":-O"
// ];

// console.log( unique(strings) );

// ========================================================
// let students = [
//   {id: 'іван', name: "Іван Іванко", age: 20},
//   {id: 'ганна', name: "Ганна Іванко", age: 24},
//   {id: 'петро', name: "Петро Петренко", age: 31},
// ];

// const groupById = students => students.reduce((ob, student) => {
//   ob[student.id] = student;
//   return ob;
// }, {})

// console.log(groupById(students));

// =====================================================

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);
// console.log(tags)

// // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// // Це стандартна практика, якщо callback-функція досить велика.

// // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// // то створюємо її і записуємо їй значення 0.
// // В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// =======================================================
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//      this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// ========================================================

class Storage { 
  constructor( items ) {
    this.items = items;
  }

  getItems(){
    return this.items;
  }

  addItem(newItem){
    this.items.push(newItem)
    return;
  }

  removeItem(itemToRemove){
    this.items.indexOf(itemToRemove);
      this.items.splice(1, 1);
    return ;

  }
}

  


// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage)
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.removeItem("Prolonger"))
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
 myFish.splice(3, 1);

console.log(myFish)


// myFish равен ["angel", "clown", "trumpet", "sturgeon"]
// removed равен ["drum"]
