//引入文件系统模块
const fs =require("fs");
//使用异步方法读取文件
//异步  fs.readFile("文件的路径","字符编码"，回调函数)
fs.readFile("./b.txt","utf-8",function(error,data){
    //如果存在错误，则在控制台输出错误
    if(error){
        console.log(error.message);
    }
    //输入读取文件 

    console.log(data);
})