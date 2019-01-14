//引入http模板
const http=require("http");
//引入文件系统模板
const fs=require("fs");
//通过http模板创建服务器
http.createServer(function(request,response){

    
  //设置字符编码
  response.setHeader("Content-type","text/plain;charset=utf-8")
console.log("欢迎"+request.connection.remotAddress+"客观")
  //读取文件的内容（异步
  fs.readFile("./file.txt","utf-8",function(error,data){
      if(error){
          console.log(error.message);
      };
      console.log(data);
      response.write(data); 
  })
  
}).listen(666)