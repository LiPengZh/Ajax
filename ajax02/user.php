<?php
    $servername="localhost";
    $useraname="root";
    $password="lpz199911181018";
    $Database="user";
    //创建链接
    $conn=mysqli_connect($servername,$useraname,$password,$Database);

    //检测链接
    if($conn){
        die("Connection failed:" .mysqli_connect_error());
    }
    echo "连接成功";
?>