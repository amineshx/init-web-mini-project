(function ($) {

    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });
})(jQuery);

// the el wasmhom
function Obedient() {

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

    var x = document.getElementById("Obedient-Cat").value;

    const flag1 = "picoCTF{s4n1ty_v3r1f13d_b5aeb3dd}";
    if (x == flag1) {
        alert("flag submitted +5pts ");
        foundUser.score = foundUser.score + 5;
        users[j] = foundUser;
        localStorage.setItem('users', JSON.stringify(users));
        var button = document.getElementById("myButton1");
        button.disabled = true;
    } else {
        alert(" no lol  ");
    }


}


function mod() {

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

    var x = document.getElementById("Mod-26").value;

    const flag2 = "picoCTF{next_time_I'll_try_2_rounds_of_rot13_ZNMldSDw}";
    if (x == flag2) {
        alert("flag submitted +10pts ");
        foundUser.score = foundUser.score + 10;
        users[j] = foundUser;
        localStorage.setItem('users', JSON.stringify(users));
        var button = document.getElementById("myButton2");
        button.disabled = true;
    } else {
        alert(" no lol  ");
    }


}

function python() {

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

    var x = document.getElementById("Python-Wrangling").value;

    const flag3 = "picoCTF{4p0110_1n_7h3_h0us3_aa821c16}";
    if (x == flag3) {
        alert("flag submitted +10pts ");
        foundUser.score = foundUser.score + 10;
        users[j] = foundUser;
        localStorage.setItem('users', JSON.stringify(users));
        var button = document.getElementById("myButton3");
        button.disabled = true;
    } else {
        alert(" no lol  ");
    }
}

function wave() {

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

    var x = document.getElementById("Wave-a-flag").value;

    const flag4 = "picoCTF{b1scu1ts_4nd_gr4vy_755f3544}";
    if (x == flag4) {
        alert("flag submitted +10pts ");
        foundUser.score = foundUser.score + 10;
        users[j] = foundUser;
        localStorage.setItem('users', JSON.stringify(users));
        var button = document.getElementById("myButton4");
        button.disabled = true;
    } else {
        alert(" no lol  ");
    }
}


function information() {

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

    var x = document.getElementById("information").value;

    const flag5 = "picoCTF{the_m3tadata_1s_modified}";
    if (x == flag5) {
        alert("flag submitted +10pts ");
        foundUser.score = foundUser.score + 10;
        users[j] = foundUser;
        localStorage.setItem('users', JSON.stringify(users));
        var button = document.getElementById("myButton5");
        button.disabled = true;
    } else {
        alert(" no lol  ");
    }
}

function static() {

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

    var x = document.getElementById("Static").value;

    const flag6 = "picoCTF{d15a5m_t34s3r_1e6a7731}";
    if (x == flag6) {
        alert("flag submitted +20pts ");
        foundUser.score = foundUser.score + 20;
        users[j] = foundUser;
        localStorage.setItem('users', JSON.stringify(users));
        var button = document.getElementById("myButton7");
        button.disabled = true;
    } else {
        alert(" no lol  ");
    }
}

function netact() {

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

    var x = document.getElementById("Nice-Netact").value;

    const flag6 = "picoCTF{g00d_k1tty!_n1c3_k1tty!_7c0821f5}";
    if (x == flag6) {
        alert("flag submitted +15pts ");
        foundUser.score = foundUser.score + 15;
        users[j] = foundUser;
        localStorage.setItem('users', JSON.stringify(users));
        var button = document.getElementById("myButton6");
        button.disabled = true;
    } else {
        alert(" no lol  ");
    }
}

//log out 
function deleteCookie() {
    document.cookie = "loggedInUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "sign-up.html";
}
// changing name 
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
console.log("this is", foundUser)
var divElement = document.querySelector(".ms-3");
var variableValue = foundUser.username;
divElement.innerHTML = `
  <h6 class="mb-0">${variableValue}</h6>
  <span>user</span>
`;
var divElement = document.querySelector(".dropdown");
var variableValue = foundUser.username;
divElement.innerHTML = `
<a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <img
                  class="rounded-circle me-lg-2"
                  src="./img/user.png"
                  alt=""
                  style="width: 40px; height: 40px"
                  id="pic1"
                />
                <span class="d-none d-lg-inline-flex">${variableValue}</span>
              </a>
              <div
                class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0"
              >
                <a href="./profile.html" class="dropdown-item">My Profile</a>
                <a class="dropdown-item" onclick="deleteCookie()">Log Out</a>
              </div>

`;

document.addEventListener("DOMContentLoaded", ()=>{
    const recentImgeDartaUrl = foundUser.img ;
    if(recentImgeDartaUrl){
        document.querySelector("#pic").setAttribute("src",recentImgeDartaUrl);
        document.querySelector("#pic1").setAttribute("src",recentImgeDartaUrl);
    }
});

