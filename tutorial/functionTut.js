/* function repte(str,num)
{
  let res="";
  for(let i=0;i<num;i++)
  {
    res+=str;
  }

  console.log(res);

}
repte("ma",5); */

//laxical scope

/* function outer(){
    const bankJob=["spdr","agni","anna"];
    function inner(){
        for(let bnk of bankJob)
        {
            console.log(`help ${bnk.toUpperCase()}`);
        }

    }
    inner();

}
outer(); */


//function expression

/* you can store a function in an variable.
 the value of that variable will be return value of the function
   */
/* const multiply=function(x,y,z)
{
    return x*y*z;
}
console.log(multiply(2,3,5)); */


