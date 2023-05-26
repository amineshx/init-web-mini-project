var table = document.querySelector(".table");


var users = JSON.parse(localStorage.getItem("users")) || [];

// Sort users 
users.sort(function (a, b) {
    return b.score - a.score;
});

// Display users in the table
users.forEach(function (user, index) {

    var row = document.createElement("tr");


    var usernameCell = document.createElement("td");
    usernameCell.textContent = user.username;

    var emailCell = document.createElement("td");
    emailCell.textContent = user.email;

    var passwordCell = document.createElement("td");
    passwordCell.textContent = user.password;

    var scoreCell = document.createElement("td");
    scoreCell.textContent = user.score;

    var rankingCell = document.createElement("td");
    rankingCell.textContent = index + 1;

    // Create delete button
    var deleteCell = document.createElement("td");
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn");
    deleteButton.addEventListener("click", function () {
        deleteUser(index);
    });
    deleteCell.appendChild(deleteButton);

    // Append cells to the row
    row.appendChild(usernameCell);
    row.appendChild(emailCell);
    row.appendChild(passwordCell);
    row.appendChild(scoreCell);
    row.appendChild(rankingCell);
    row.appendChild(deleteCell);

    // Append the row to the table
    table.appendChild(row);
});

// Function to delete a user
function deleteUser(index) {
    // Remove the user from the users array
    users.splice(index, 1);

    // Update the users in the local storage
    localStorage.setItem("users", JSON.stringify(users));

    // Refresh the page to reflect the changes
    location.reload();
}