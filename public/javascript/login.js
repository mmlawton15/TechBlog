//needs to require user to log in or sign up when they visit the site and click on any links
// WHEN I click on any other links in the navigation
// THEN I am prompted to either sign up or sign in
// WHEN I choose to sign up
// THEN I am prompted to create a username and password
// WHEN I click on the sign-up button
// THEN my user credentials are saved and I am logged into the site
// WHEN I revisit the site at a later time and choose to sign in
// THEN I am prompted to enter my username and password
// WHEN I am signed in to the site
// THEN I see navigation links for the homepage, the dashboard, and the option to log out

async function signupFormHandler(event) {
    event.preventDefault();
    //extract data i need from this object then verift if the username meets the username and pw in the api
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
            username,
            email,
            password
        }),
        headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok){
        console.log('success');
        } else {
            alert(response.statusText);
        }
    }
}

async function loginFormHandler(event) {
    event.preventDefault();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: {'Content-Type': 'application/json'}
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);