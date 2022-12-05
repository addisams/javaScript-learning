/* setTimeout(()=>{
    document.body.style.backgroundColor="blue";
},1000)
setTimeout(()=>{
    document.body.style.backgroundColor="red";
},2000)
setTimeout(()=>{
    document.body.style.backgroundColor="green";
},3000)
setTimeout(()=>{
    document.body.style.backgroundColor="orange";
},4000) */


// instad of above we can write
/* setTimeout(()=>{
    document.body.style.backgroundColor="blue";
    setTimeout(()=>{
        document.body.style.backgroundColor="red";
        setTimeout(()=>{
            document.body.style.backgroundColor="green";
            setTimeout(()=>{
                document.body.style.backgroundColor="orange";
            },1000)
        },1000)
    },1000)
},1000) */

//instead of above we can write a call back function
const delayColorChange=(newColor,delay,callback_function)=>{
    setTimeout(()=>{
             document.body.style.backgroundColor=newColor;
             callback_function();
    },delay)
}
//call the callback
/* delayColorChange("green",1000,()=>{
    delayColorChange("red",1000,()=>{
        delayColorChange("blue",1000,()=>{
            delayColorChange("orange",1000,()=>{

            })
        })
    })
}) */


//fake request using ccccccallback
const fakeRequest=(url,success,failure)=>
{
  const delay=Math.floor(Math.random()*4500)+500;
  setTimeout(()=>{
    if(delay>4000)
    {
        failure("connection TimeOut")
    }
    else{
        success(`here is your fake data from ${url}`);
    }
  },delay)
}
//call above
/* fakeRequest("book.com",(res)=>{
    console.log("it worked")
    console.log(res)
},(err)=>{
    console.log("error"+err);

}) */


/* promises */
/* 
 --it is used at the place of call back.
 --JavaScript is single threaded, 
 meaning that two bits of script 
 cannot run at the same time; 
 they have to run one after another. 
 --A Promise is an object that represents the eventual 
 completion (or failure) of an asynchronous operation, 
 and its resulting value.
*/

//creating fake request using promise
const createPromiseFakeRequest=(url)=>
{
    return new Promise((Response,reject)=>{
        const delaay_2=Math.floor(Math.random()*4500)+500;
        setTimeout(()=>{
            if(delaay_2>4000)
            {
                reject('your request is rejected');
            }
            else
            {
                Response(`successful from ${url}`);
            }

        },delaay_2)
    })
}
/* const req=createPromiseFakeRequest("adarsh.com");
req.then(()=>{
    console.log("your code worked");
}).catch(()=>{
    console.log("got the error")
}) */

// or we can nest multiple then

createPromiseFakeRequest("sammrat.com/page_1")
.then((res)=>{
     console.log("success page_1"+res)
     return createPromiseFakeRequest("sammrat.com/page_2");
})
.then((res)=>{
    console.log("success page_2"+res)
    return createPromiseFakeRequest("sammrat.com/page_3")
}).then((res)=>{
    console.log("success page_3"+ res)
})
.catch((err)=>{
    console.log("fails");
})