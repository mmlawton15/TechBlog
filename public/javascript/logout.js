// WHEN I click on the logout option in the navigation
// THEN I am signed out of the site
   
async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
}
  
document.querySelector('#logout').addEventListener('click', logout);