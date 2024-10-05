let myArray = [60, "penguin", 21, "frogs", 7];
console.log("My arrary is [ " + myArray + " ]");

let firstElem = myArray[0];
console.log("The first element in my array is " + firstElem);

let lastElem = myArray[myArray.length - 1];
console.log("The last element in my array is " + lastElem);

let middleIndex = Math.floor(myArray.length / 2);
let middleElem = myArray[middleIndex];
console.log("The element in the middle of my array is " + middleElem);

let arrayLength = myArray.length;
console.log("My array has " + arrayLength + " elements");

myArray.push("49ers");
myArray.push("football");
console.log("My array after adding new elements is [ " + myArray + " ]");

let newArray = myArray.pop();
console.log("The element that was removed was ' " + newArray + " ' ");
console.log("The new array is [ " + myArray + " ]");

myArray.splice(0, 1, "mango");
console.log("After replacing the first element, this is my new array [ " + myArray + " ]");

console.log("Below is my array itterated twice: ")
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

myArray.map(function(val) {
    console.log(val);
});

const[first, second, ...rest] = myArray;
console.log("The first variable is ' " + first + " ' ");
console.log("The second variable is ' " + second + " ' ");
console.log("The remaining elements in my array are [ " + rest + " ]");



