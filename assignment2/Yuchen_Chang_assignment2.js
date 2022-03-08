const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// ● Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
// const doubleItems = itemsObject.map((item) => {
//   const doubleItemsQty = item.quantity * 2;
//   const doubleItemsPrice = item.price * 2;
//   return { quantity: doubleItemsQty, price: doubleItemsPrice };
// });

//or destructure
const doubleItems = itemsObject.map(({ quantity, price }) => {
  return { quantity: quantity * 2, price: price * 2 };
});

console.log(doubleItems);

console.log("---------------------------------");
// ● Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
const filteredItems = itemsObject.filter((item) => {
  return item.quantity > 2 && item.price > 300;
});
console.log(filteredItems);

console.log("---------------------------------");
// ● Given the array, implement a function to calculate the total value of the items.
const itemsTotal = itemsObject.reduce((curTotal, item) => {
  return curTotal + item.price * item.quantity;
}, 0);
console.log(itemsTotal);

console.log("---------------------------------");
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

//  ● Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
const newString = string.toLowerCase().trim().split(/[ -]+/).join(" ");
console.log(newString);
