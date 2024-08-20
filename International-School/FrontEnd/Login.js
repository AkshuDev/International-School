// Get the form element
const loginForm = document.getElementById('Login');
const errorMessage = document.getElementById('errorMessage');

// Add event listener to the submit button
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        errorMessage.style.display = 'none';
    })
    .catch(err => {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.display = 'block';
        console.log(err);
    });

    // Do something with the username and password
    console.log('Username:', username);
    console.log('Password:', password);

    // You can perform further validation or send the data to a server for authentication
});