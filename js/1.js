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

