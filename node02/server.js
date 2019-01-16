//引入http模板
const http=require("http");
//引入文件系统模块
const fs=require("fs");
//创建http服务器
http.createServer(function(request,response){
    //设置相应的字符编码
    response.writeHead(200,{"Content-type":"text/plain;charset=utf-8"});
    //使用异步方法读取文件内容
    fs.readFile("b.txt","utf-8",function(error,data){
        if(error){
            throw error.message;
        }
        //数据返回给前台
        response.end(data);
    })
}).listen(444);