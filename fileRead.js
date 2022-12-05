
const fs=require("fs");
const { text } = require("stream/consumers");
//reading content from the read.txt file
let txt=fs.readFileSync("read.txt","utf-8");
console.log(txt);
//writting content to the read .txt file
txt=txt.replace("srivastav","dinesh chand srivastav");
console.log(txt);
//creating new file
fs.writeFileSync("adarsh.txt","text");