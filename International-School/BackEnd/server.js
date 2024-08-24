import {initializeApp} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import {signInWithEmailAndPassword, sendPasswordResetEmail, createUserWithEmailAndPassword, getAuth} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyAT08qUZxvau0g2qIL7wC3d14r9Q8vyuRc",
    authDomain: "international-school-f8cd0.firebaseapp.com",
    databaseURL: "https://international-school-f8cd0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "international-school-f8cd0",
    storageBucket: "international-school-f8cd0.appspot.com",
    messagingSenderId: "478948302270",
    appId: "1:478948302270:web:66a027800a1342107e6def",
    measurementId: "G-Q0LFLRM7ZK"
  };

initializeApp(firebaseConfig);

const auth = getAuth();

export function SignUp(username, password, errorElement="", transferPage="", addSufix=true){
    var email = username

    if (addSufix == true){
        email = username + "@InterNationalSchool"
    }

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
    console.log('User created successfully:', user);
        // Show success message
        if (errorElement != ""){
            errorElement.style.display = "none";
        }
        if (transferPage != ""){
            window.location.href = transferPage;
        }
        return Promise.resolve('User created successfully:' + user);
    }).catch((error) => {
        console.error('Error creating user:', error);
        if (errorElement != ""){
            errorElement.style.display = "block";
        }
        return Promise.reject(error);
    });
};

export function Login(username, password, errorElement="", transferPage="", addSufix=true){
    // Sign in
    var email = username

    if (addSufix == true){
        email = username + "@InterNationalSchool"
    }

    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        console.log('User signed in successfully:', user);
        // Redirect to dashboard or show success message
        localStorage.setItem('user', JSON.stringify(user));
        if (errorElement != ""){
            errorElement.style.display = "none";
        }
        if (transferPage != ""){
            window.location.href = transferPage;
        }
        return Promise.resolve('User signed in successfully:' + user);
    }).catch((error) => {
        console.error('Error signing in:', error);
        if (errorElement != ""){
            errorElement.style.display = "block";
        }
        return Promise.reject(error);
    });
};

export function ResetPassword(email, errorElement = "", addSufix=false){
    var email = email

    if (addSufix == true){
        email = email + "@InterNationalSchool"
    }
    // Password reset
    sendPasswordResetEmail(auth, email).then(() => {
        console.log('Password reset email sent');
        if (errorElement != ""){
            errorElement.style.display = "none";
        }
        return Promise.resolve("Success");
    }).catch((error) => {
        console.error('Error sending password reset email:', error);
        if (errorElement != ""){
            errorElement.style.display = "block";
        }
        return Promise.reject(error);
    });
};