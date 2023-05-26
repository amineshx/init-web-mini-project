function CreateUser() {
    var username = document.getElementById('signname').value;
    var email = document.getElementById('signmail').value;
    var password = document.getElementById('signpass').value;

   
  var users = JSON.parse(localStorage.getItem('users')) || [];
  var existingUser = users.find(function(user) {
    return user.username === username || user.email === email;
  });

  if (existingUser) {
    
    alert('User already exists!');
    
  } else {
    
    var newUser = {
      username: username,
      email: email,
      password: password,
      score : 0 , 
      img : "umpty"
    };

    
    users.push(newUser);
    console.log(users[1]);
    localStorage.setItem('users', JSON.stringify(users));

    
    alert('User created successfully!');
  }
}

