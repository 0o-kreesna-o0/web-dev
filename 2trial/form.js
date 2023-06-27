function validate() {
    event.preventDefault();
    // var name = document.getElementById("username").value;
    var name = document.querySelector(".name").value;
    var text1 = document.getElementById("nameerror");
    var password = document.querySelector(".password").value;
    var text2 = document.getElementById("passworderror");
    // console.log(name);
    if (name=="") {
        text1.innerHTML="Enter Username";
    }
    else{
        console.log("your name is " + name);
        text1.innerHTML="";
    }
    if (password=="") {
        text2.innerHTML="Enter Password";
    }
    else if(password.length>=6){
        text2.innerHTML="less than 7 characters";
    }
    else{
        console.log("your password is " + password);
        text2.innerHTML="";
    }
}
