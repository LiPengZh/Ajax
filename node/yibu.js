//引入http模板
const http=require("http");
//使用http模板搭建node服务器
const server =http.createServer(function(request,response){
    response.setHeader("Content-type","text/plain;charset=utf-8")
    response.write("高兴");
    response.end();
    console.log("A");
});

console.log("B")
server.listen(9999)