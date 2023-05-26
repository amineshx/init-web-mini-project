
function LoginUser() {
    var username = document.getElementById('logname').value;
    var password = document.getElementById('logpass').value;
  
    // Retrieve users from local storage
    var users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Find the user with matching username and password
    var foundUser = users.find(function(user) {
      return user.username === username && user.password === password;
    });

    if(username == "amineshx" && password == "212131040802"){
        window.location.href= "/dashboard.html"
        document.cookie = 'loggedInUser=' + encodeURIComponent(username) + '; SameSite=None; Secure';
    }else if (foundUser) {
      // User found, proceed with login logic
      alert('Login successful!');
  
      // Set a cookie for the session
      document.cookie = 'loggedInUser=' + encodeURIComponent(username) + '; SameSite=None; Secure';

    
      // Redirect to another page
       window.location.href = "/user.html";
    } else {
      // User not found or invalid credentials, handle the error
      alert('Invalid username or password!');
      // You can choose to perform any other actions here, such as displaying an error message or clearing the input fields.
    }
}
  



