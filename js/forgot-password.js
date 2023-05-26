alert("use the same email that u signed up with");
function recovery(){

const verfemail = document.getElementById("verfemail").value;
var users = JSON.parse(localStorage.getItem("users")) || [];
var foundUser = null;
    var j = -1; // userindex in the users array objects
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === verfemail) {
            foundUser = users[i];
            j = i;
            break;
        }
    }
    console.log(foundUser.password);
    if (foundUser==null) {
        alert("Email not found admin may deleted u");
    }else{
        const verfusername = prompt("how many scores that u got so far ?");
        if (foundUser.score == verfusername){
            const newpass = prompt("its not that professional and secure website but put your new password here ");
            foundUser.password = newpass ; 
            users[j] = foundUser;
            localStorage.setItem('users', JSON.stringify(users));
            alert("your password has changed ");
            window.location.href= "sign-up.html";
        }
    } 

}

