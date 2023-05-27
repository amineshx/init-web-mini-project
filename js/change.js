function change() {
    function getCookie(name) {
        const cDecoded = decodeURIComponent(document.cookie);
        const cArray = cDecoded.split("; ");
        console.log(cArray);
        let Username = cArray[0].split("=");
        Username = Username[1];
        return Username
    }
    let usernameToFind = getCookie("loggedInUser");

    var users = JSON.parse(localStorage.getItem('users'));
    var foundUser = null;
    var j = -1; // userindex in the users array objects
    for (var i = 0; i < users.length; i++) {
        if (users[i].username === usernameToFind) {
            foundUser = users[i];
            j = i;
            break;
        }
    }
    let newusername = document.getElementById("newname").value;
    let newemail = document.getElementById("newemail").value;
    foundUser.username = newusername;
    foundUser.email = newemail;
    users[j] = foundUser;
    localStorage.setItem('users', JSON.stringify(users));
    alert("your data has changed ");
    document.cookie = "loggedInUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = 'loggedInUser=' + encodeURIComponent(foundUser.username) + '; SameSite=None; Secure';
    window.location.href= "profile.html";
}
