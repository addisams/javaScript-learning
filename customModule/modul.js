//write a module that calculate the avg of an array
function avarage(arr)
{
    let sum=0;
    arr.forEach(element => {
        sum+=element;

    });
    return sum/arr.length;
}
//module.exports=avarage;
module.exports={
    avg:avarage,
    name:"adarsh",
    age:24
}