const form=document.querySelector("#frm");
const dta=document.querySelector("#inptData");

const list=document.querySelector("#data")

form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log("submited");
    const inptVal=dta.value;
    const newLi=document.createElement("li");
    newLi.innerText=inptVal;


    list.append(newLi);
    dta.value="";
    //so here we use e.preventDefault()
    
})