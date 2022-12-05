const http=require("http");
const fs=require("fs");
const { resourceLimits } = require("worker_threads");
const hostName="127.0.0.1";
const port=3000;
const server=http.createServer((req,res)=>{
      res.statusCode=200;
      res.setHeader("content-type","text/html");
      res.end(`<h1>hello world<h1>`);

});
server.listen(port,hostName,()=>{
console.log(`server is running at  http://${hostName}:${port}/`);
});