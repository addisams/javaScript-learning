const obj={name:"adarsh",class:"graduation",fathersName:"dinesh chand srivastav"};
console.log(obj.name);
console.log(obj["name"]);

const arrObj=[{product:"mewa",id:1,qty:5},
{rpoduct:"kismis",id:2,qty:3}

];
console.log(arrObj[0]["id"]);

const objarr={
    product:"bread",
    id:1,
    nameOfprod:{
        normal:"good",
        multiGrain:"best"
    },
    qlty:[1,3,5,"best"]
};
console.log(`${objarr["nameOfprod"]["multiGrain"]}    ${objarr["qlty"][2]}`)