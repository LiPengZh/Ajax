//引入模板
const http=require("http");
//通过http模板创建node服务器
http.createServer(function(request,response){
    let num=parseInt(Math.random()*9999);

    if(num == 6666){
        console.log("中奖用户"+request.connection.remoteAddress)
        throw new Errow("错误");
    }
    //输出数字
    response.write(num.toString()+"【ip】"+request.connection.remoteAddress);
    response.end();

  //设置字符编码
  response.setHeader("Content-type","text/plain;charset=utf-8")
   
}).listen(7);