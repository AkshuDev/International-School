import {Login} from "../BackEnd/server.js";
import { getData } from "../BackEnd/RTDB.js";
// Get the form element
const loginForm = document.getElementById('Login');
const errorMessage = document.getElementById('errorMessage');

const errorText = errorMessage.innerHTML;

errorMessage.style.color = 'red';
errorMessage.style.display = 'none';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let data_;

// Add event listener to the submit button
async function DoJob(){
    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const AdmissionRegex = /^\d{4}$/;
    if (!AdmissionRegex.test(username)) {
        errorMessage.textContent = "Invalid Username";
        errorMessage.style.display = "block";
        return;
    } else{
        errorMessage.innerHTML = errorText;
        errorMessage.style.display = "none";
    }

    Login(username, password, errorMessage);

    await sleep(2000);

    getData("Students/"+username).then((data) => {
        if (data != null){
            data_ = data;
        };
    });

    await sleep(1000);

    console.log(data_);

    if (data_ != null){
        console.log(data_);

        localStorage.setItem("UserDetails", JSON.stringify(data_));
        await sleep(1000);

        // Do something with the username and password
        console.log('Username:', username);
        console.log('Password:', password);

        window.location.href = "./index.html";
    };
};

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    DoJob();
});
