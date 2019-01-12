<?php
//第一步链接数据库服务器
    $servername="localhost";
    $username="root";
    $password="lpz199911181018";
    $dbname="user";//指定的数据库

    //创建链接
    $conn=mysqli_connect($servername,$username,$password,$dbname);

    //检测链接
    if(!$conn){
        die("Connection failed:".mysqli_connect_error());
    }
    echo "链接成功";

    

    // //使用sql创建数据表
    // $sql = "CREATE TABLE aaa (
    //     id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    //     userName VARCHAR(30) NOT NULL,
    //     userPass VARCHAR(30) NOT NULL,
    //     userEmail VARCHAR(50),
    //     userSex VARCHAR(50)
    //     )";
        
  
    //     if (mysqli_query($conn, $sql)) {
    //         echo "数据表 aaa 创建成功";
    //     } else {
    //         echo "创建数据表错误: " . mysqli_error($conn);
    //     }


  
    
        //接受前台传递的数据
        $user=$_POST["userName"];
        $pass=$_POST["userPass"];
        $sex=$_POST["userSex"];
        $email=$_POST["userEmail"];
       //插入数据
        $sql = "INSERT INTO aaa (userName, userPass,userEmail, userSex)VALUES ('$user', '$pass', '$sex','$email')";
        if (mysqli_query($conn, $sql)) {
            echo "新记录插入成功";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
        
    mysqli_close($conn)
?>