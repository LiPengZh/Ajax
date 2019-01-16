//引入fs文件系统模板
const fs =require("fs");
//使用同步方法读取文件
try{
    let data =fs.readFileSync("b.txt","utf-8");
    console.log(data)
}catch(error) {
    throw error.message;

}