<?php

$email = $_GET['email'];

if($email == "admin@gmail.com"){

    echo "Email Already Exists";

}else{

    echo "Email Available";

}

?>