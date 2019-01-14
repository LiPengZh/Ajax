//引入http模块
const http =require("http");
// const http1=require("http");
//通过http模块创建服务器       请求     相应
const server = http.createServer(function (request,response) {
    response.setHeader("Content-type","text/plain;charset=utf-8")
    response.write("我是李彭真");
    response.end();
});
server.listen(999);
