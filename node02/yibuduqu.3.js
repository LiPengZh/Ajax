//引入http模块
const http =require("http");
//引入fs文件系统模块
const fs=require("fs");
//创建服务器
http.createServer(function(request,response){
    //设置字符编码
    response.setHeader("Content-type","text/plain;charset=utf-8 ")
    response.writeHead(200,{"Context-type":"text/plain;charset=utf-8"})
    //使用异步方法读取文件的内容
    fs.readFile("fs.html","utf-8",function(error,data){
        if(error){
            console.log(error.message);
        }
        response.end(data);
    })
}).listen(333)