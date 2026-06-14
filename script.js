function togglePassword(){

    let password =
    document.getElementById("Login_Password");

    if(password.type === "password"){

        password.type = "text";

    }else{

        password.type = "password";

    }

}

function checkPassword(){
   
    let name =document.getElementById("name").value;
    let email =document.getElementById("email").value;

    let password =document.getElementById("password").value;

    let confirmPassword =document.getElementById("ConfirmPassword").value;

    let message =document.getElementById("message");

    if(name === "" ||
       email === "" ||
       password === "" ||
       confirmPassword === ""){

        message.innerHTML ="All fields are required";

        message.style.color = "red";

        return;
    }


    if(password === confirmPassword){

    message.innerHTML ="Registration Successful";

    message.style.color ="green";

}
    
    else{

        message.innerHTML ="Passwords Do Not Match";

        message.style.color ="red";

    }

}

function checkEmail(){

    let email =
    document.getElementById("email").value;

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){

        if(xhr.readyState == 4 &&
           xhr.status == 200){

            document.getElementById(
            "emailMessage").innerHTML =
            xhr.responseText;
        }

    };

    xhr.open(
    "GET",
    "ajax.php?email=" + email,
    true);

    xhr.send();

}