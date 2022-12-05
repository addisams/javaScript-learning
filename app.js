/* const btn=document.querySelector('#btn');
const hdng=document.querySelector("h1");
btn.addEventListener('click',()=>{
    //color should be random color so generate random no b/w 0-255
    //document.body.style.backgroundColor="green";

    // const r=Math.floor(Math.random()*255);
    // const g=Math.floor(Math.random()*255);
    // const b=Math.floor(Math.random()*255);
    // //now set rgb
    // const newColor=`rgb(${r},${g},${b})`;

    const newColor=makeRandomColor();

    document.body.style.backgroundColor=newColor;
    hdng.innerText=newColor;
}) */

const makeRandomColor=()=>{
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    //now set rgb
    return`rgb(${r},${g},${b})`;
}

const buttons=document.querySelectorAll("button");

for(button of buttons)
{
    /* button.addEventListener('click',function(){
        // this.style.backgroundColor=makeRandomColor();
    }) */
    button.addEventListener('click',colorize)
}

function colorize(){
    this.style.backgroundColor=makeRandomColor();
    this.style.color=makeRandomColor();
}

