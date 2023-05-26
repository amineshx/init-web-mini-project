var table = document.querySelector(".center");
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

//declearing html elements

const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

//if user hover on img div 

imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
});

//if we hover out from img div

imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
});

//lets work for image showing functionality when we choose an image to upload

//when we choose a foto to upload

file.addEventListener('change', function(){
    //this refers to file
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader(); 
        reader.addEventListener('load', function(){
            foundUser.img = reader.result ;
            users[j] = foundUser;
            localStorage.setItem('users', JSON.stringify(users));
        
        });

        reader.readAsDataURL(choosedFile);

    }
});
    document.addEventListener("DOMContentLoaded", ()=>{
        const recentImgeDartaUrl = foundUser.img ;
        if(recentImgeDartaUrl){
            document.querySelector("#photo").setAttribute("src",recentImgeDartaUrl);
        }
    });

// lwasamo creat the table

console.log(foundUser);

var row = document.createElement("tr");
var usernameCell = document.createElement("td");
usernameCell.textContent = foundUser.username;
var emailCell = document.createElement("td");
emailCell.textContent = foundUser.email;
var passwordCell = document.createElement("td");
passwordCell.textContent = foundUser.password;
var scoreCell = document.createElement("td");
scoreCell.textContent = foundUser.score;

row.appendChild(usernameCell);
row.appendChild(emailCell);
row.appendChild(passwordCell);
row.appendChild(scoreCell);
table.appendChild(row);


var colorInput = document.querySelector("input[type='color']");
var div = document.querySelector(".head");


colorInput.addEventListener("change", function() {

  var color = colorInput.value;


  div.style.backgroundColor = color;
});
