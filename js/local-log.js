
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

       window.location.href = "/user.html";
    } else {
      alert('Invalid username or password!');
      
    }
}
  
  



