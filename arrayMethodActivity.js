// Concatenating two arrays
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let concatenatedArr = arr1.concat(arr2);
console.log(concatenatedArr);

// Adding 'Kiwi' to fruits array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);

// Adding numbers 4 and 5 to the beginning of array1
let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1);

// Removing the last element from the fruits array
fruits.pop();
console.log(fruits);

// Removing the first element from array2
arr2.shift();
console.log(arr2);

// Sorting fruits array alphabetically
fruits.sort();
console.log(fruits);

// Using slice to create a new array
let months = ["Jan", "Feb", "Mar", "Apr", "May"];
let slicedMonths = months.slice(1, 4);
console.log(slicedMonths);

// Using splice to modify the months array
months.splice(2, 1, "June", "July");
console.log(months);
