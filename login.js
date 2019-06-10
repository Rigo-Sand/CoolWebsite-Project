var users = [
    {"email": "armadillo@gmail.com", "password": "pass"},
    {"email": "sloth@gmail.com", "password": "pass"},
    {"email": "pangolin@gmail.com", "password": "pass"},
];

function login(){
    event.preventDefault();
    var un = document.getElementById("email").value;
    var pw = document.getElementById("password").value;
    var validate = true;
    console.log(un + pw)
    for(var i=0; i<users.length; i++){
        if(un == users[i].email && pw == users[i].password){
            validate = true;
            console.log('right');
            break;
        }
        else{
            validate = false;
            console.log('wrong');
        }
    }
    if(validate == true){
        alert("It works!");
        window.location.href = "coolwebsite.html";
    }
    else{
        alert("Wrong!");
    }

}