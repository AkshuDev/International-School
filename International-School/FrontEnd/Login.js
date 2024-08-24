import {Login} from "../BackEnd/server.js";
// Get the form element
const loginForm = document.getElementById('Login');
const errorMessage = document.getElementById('errorMessage');

// Add event listener to the submit button
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    Login(username, password, errorMessage, "./index.html");

    // Do something with the username and password
    console.log('Username:', username);
    console.log('Password:', password);

    // You can perform further validation or send the data to a server for authentication
});

