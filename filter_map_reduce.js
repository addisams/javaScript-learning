//different callbacks and array methods
//1--- forEach
//accepts a callback function and call the function once per element in the array

// const arr=[2,3,6,7,9,8,4,52,64,15,60,90,75,105];

// arr.forEach(function(el){
//     if(el%2!==0)
//     {
//         console.log(el);
//     }
// })


//using arrow function
/* arr.forEach((el)=>{
    if(el%2!==0)
    {
        console.log(el);
    }
}) */

//2----map
/* it will accept a call back function
it will create a new array with the result of
calling callback on every element on array */
/* it is same as forEach, only difference is it will
create new array by using the return value of that callback */

/* var new_array = arr.map(function callback(element, index, array) {
    // Return value for new_array
}[, thisArg]) */

const arrMap=[2,3,6,7,9,8,4,52,64,15,60,90,75,105];
const newElm=arrMap.map(function(el){
    return el*2;
})

//3-----filter
/* it will return new array of all element which pass the test.
it will give the new array or subset of that array.
it is used when we want to filter out some data in new array. */

/* Syntax
var new_array = arr.filter(function callback(element, index, array) {
    // Return true or false
}[, thisArg]) */

/* const arrfltr=[2,3,6,7,9,8,4,52,64,15,60,90,75,105];

const flter=arrfltr.filter(function(el){
    return el%2===0;
})
console.log(flter) */

const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];

  const neAr=students.filter(function(el){
    return el.grade>=90;
  })

//4------reduce

/* The reduce() method reduces an array of values down to just one value.
 To get the output value, it runs a reducer function on each element of the array. */

 /* 
 syntax:

 arr.reduce(callback[, initialValue]) 
 */

 /* 
 The callback argument is a function that will be called once for every item in the array. 
 This function takes four arguments, but often only the first two are used.

 currentValue - the current item in the array
 index - the index of the current item
 array - the original array on which reduce was called
 The initialValue argument is optional. 
 If provided, it will be used as the initial accumulator 
 value in the first call to the callback function.
 accumulator - the returned value of the previous iteration

 */
 
 const numbers = [1, 2, 3, 4];
 const addVal=numbers.reduce(function(prev,curr){
    return prev+curr;
 })


 /* 
 Notice in this below call to reduce passes an empty object {} as the initialValue parameter. 
 This will be used as the initial value of the accumulator (the first argument)
  passed to the callback function.
 
 */

 const pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

 const petCounts = pets.reduce(function(obj, pet){
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
 }, {});
 /* console.log(petCounts) */

 // ----some method

 /* it will return true if any array element passes the test function */

 /* 
  syntax
  array.some(callback)
 */

  /* const animal = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
  const wrdLng=animal.some(function(word){
    return word.length>5;
  })
  console.log(wrdLng) */

  // ----every method

 /* it will return true if every array element passes the test function */

 /* 
  syntax
  array.every(callback)
 */


  const animal = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
  const wrdLng=animal.every(function(word){
    return word.length>4;
  })
  console.log(wrdLng)

  // ---spread
/* 
 3 dot use for this.
  if you are passing any array variable name in function directly then it
  will give error
  const num=[9,3,4,5,12,2,5];
  Math.max(num)--------NaN
  so in this use spread
  Math.max(...num)-----> Math.max(9,3,4,5,12,2,5)
*/

  /* 
   syntax
   function(...variable_name)
  */
  const num=[9,3,4,5,12,2,5];
  const max=Math.max(...num);
  /* console.log(max); */

  // spread with array literal
  //combine two array using spread

  const cat=['blue','scout','rocket'];
  const dog=['rusty','huskey','pomerian'];
  const allAnimal=[...cat,...dog];
  /* console.log(allAnimal) */

  //spread with object
  //copy the obj

  const canine={family:'canine',furry:true};
  const newCanine={...canine};
  console.log(newCanine)

  const arrt=[1,3,4,5,6,7,3];
  const newObj={...arrt};
  console.log(newObj);

 /*  Rest params */

 /* 
  its look like spread but its not spread
  --avilable inside every function
  --its an array like object
     ---has length property
     ---does not have array methods

  --it contains all the argument passes to the function
  --it is not avilable inside the arrow function
 */


  function sumAll(...num)
  {
    let total=0;
    for(let el of num)
    {
        total+=el;
    }
    return total;
  }
  const addAll=sumAll(1,2,3,4,5,6,7,8,9,10);
  console.log(addAll)