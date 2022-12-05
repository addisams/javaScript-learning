//higherOrder function 

// const arr=[2,3,6,7,9,8,4,52,64];

//give the odd and even no of array

/* function filterOddEven(arr,callback)
{
    const filteredArr=[];
    for(let i=0;i<arr.length;i++)
    {
        callback(arr[i])?filteredArr.push(arr[i]):null;
    }
    console.log(filteredArr)
}
function isOdd(n)
{
    return n%2!==0;
}
function isEven(n)
{
    return n%2===0;
}

filterOddEven(arr,isEven);
filterOddEven(arr,isOdd); */

/* const arr=[2,3,6,7,9,8,4,52,64,15,60,90,75,105];

function filteredFiveThree(arr,callback)
{
  const newArr=[];
  for(let i=0;i<arr.length;i++)
  {
    if(callback(arr[i]))
    {
        newArr.push(arr[i]);
    }
   
  }
  console.log(newArr);
}
function isDevided(n)
{
    return n%3===0 && n%5===0;
}
filteredFiveThree(arr,isDevided) */

const product=
[
    {name:"product_1",id:4,cost:200},
    {name:"product_2",id:9,cost:300},
    {name:"product_3",id:13,cost:200},
     {name:"product_4",id:11,cost:300}
];
function fetchName(product,fetch)
{
    const name=[];
    /* for(let i=0;i<product.length;i++)
    { */
       for(pro in product)
       {

        // console.log(product[pro].id);
        console.log(product[pro]);
        if(fetch(product[pro].id))
        {
            name.push(product[pro].name)
        }

       }
    /* } */
    console.log(name)
}
function ftch(product)
{
    return product===9
}

// fetchName(product,ftch);


//creating pollyfills means method like filter

const arr=[2,3,6,7,9,8,4,52,64,15,60,90,75,105];

/* Array.prototype.function_name=function(callback_function) */

// Array.prototype.filterFunction=function(callback)
// {
//     const filtArr=[];
//     for(let i=0;i<this.length;i++)
//     {
//         if(callback(this[i]))
//         {
//             filtArr.push(this[i]);
//         }
//     }
//     console.log(filtArr);
//     return filtArr;
// }
// function isEven(x)
// {
//     return x%2===0;
// }

// arr.filterFunction(isEven)



/* Array.prototype.filterFun=function(callback_function)
{
    const oddArr=[];
    for(let i=0;i<this.length;i++)
    {
        if(callback_function(this[i]))
        {
            oddArr.push(this[i]);
        }
    }
    console.log(oddArr)
    return oddArr;
}
function isODd(x)
{
    return x%2!==0;
}
arr.filterFun(isODd) */


/* Array.prototype.filterFunction=function(callback)
{
    const newArray=[];
    for(let i=0;i<this.length;i++)
    {
        if(callback(this[i]))
        {
          newArray.push(this[i]);
        }
    }
    console.log(newArray);
   return newArray;
}
function div(x)
{
    return x%5===0;
}
arr.filterFunction(div) */

function fun(arr,callback)
{
 const newArr=[];
 for(let i=0;i<arr.length;i++)
 {
    if(callback(arr[i]))
    {
        newArr.push(arr[i]);
    }
 }
 console.log(newArr)
 return newArr;
}
function isDivFive(x)
{
    return x%5===0
}

// fun(arr,isDivFive)


//returning a function

function fun()
{
    let rand;
    if(rand>80)
    {
        return function(rand)
        {
            console.log(`${rand} ${rand/2}`)
        }
    }
    else{
        return function(rand)
        {
            console.log(`${rand} ${rand/3}`)
        }
    }

}
//call methods
// const randNum=fun();
// console.log(randNum(10))
const randNum=fun()(90);
console.log(randNum)