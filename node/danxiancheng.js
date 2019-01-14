//引入http模板
const http=require("http");
//初始化一个变量
let a=0;
//通过http模块创建node服务器
http.createServer(function(request,response){
    //让a的值进行自增
    a++;
     //写入
     response.write(a.toString());
     //相应结束
     response.end();
    }).listen(8)