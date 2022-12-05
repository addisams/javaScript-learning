const http=require("http");
const fs=require("fs");
const { resourceLimits } = require("worker_threads");
const hostName="127.0.0.1";
const port=3000;
const home=fs.readFileSync("index.html");
const about=fs.readFileSync("about.html");
const contact=fs.readFileSync("contact.html");
const server=http.createServer((req,res)=>{

     console.log(req.url);
     url=req.url;

      res.statusCode=200;
      res.setHeader("content-type","text/html");
      //res.end(home);
      if(url="/")
      {
        res.end(home);
      }
      else if(url="/about")
      {
        res.end(about);
      }
      else if(url="/contact")
      {
        res.end(contact);
      }
      else{
        res.statusCode=404;
        res.end("404 not found");
      }

});
server.listen(port,hostName,()=>{
console.log(`server is running at  http://${hostName}:${port}/`);
});