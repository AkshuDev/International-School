import {initializeApp} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import {signInWithEmailAndPassword, sendPasswordResetEmail, RecaptchaVerifier, createUserWithEmailAndPassword, getAuth, signInWithPhoneNumber, updatePassword} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js"

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

export function getCurrentDate() {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();


    return `${day}-${month}-${year}`;

};

export function updatePassword_(username, password, addSufix=true) {
    var email = username;
    if (addSufix == true){
        email = username + "@InterNationalSchool.com"
    }

    if (password != null && username != null){
        updatePassword(email, password);
    }
};

export function SignUp(username, password, errorElement="", transferPage="", addSufix=true, phone="", recaptcha_tok="", callback=""){
    var email = username
    var addPhone = false;

    if (phone != ""){
        console.log("Phone number found!")
        addPhone = true;
    }

    if (addSufix == true){
        email = username + "@InterNationalSchool.com"
    }

    if (addPhone){
        signInWithPhoneNumber(auth, phone, recaptcha_tok)
        .then((confirmationResult) => {
            // Prompt user for verification code
            const code = prompt("Enter the verification code:");

            // Confirm verification code
            confirmationResult.confirm(code)
            .then(() => {
                // Handle success
                createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                    const user = userCredential.user;
                    console.log('User created successfully:', user);
                    // Show success message
                    if (errorElement != ""){
                        errorElement.style.display = "none";
                    }

                    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                        const user = userCredential.user;
                        console.log('User signed in successfully:', user);
                        // Redirect to dashboard or show success message
                        localStorage.setItem('user', JSON.stringify(user));
                        if (errorElement != ""){
                            errorElement.style.display = "none";
                        }
                        if (callback != ""){
                            callback();
                        }
                        if (transferPage != ""){
                            window.location.href = transferPage;
                        }
                        return Promise.resolve('User signed in successfully:' + user);
                    }).catch((error) => {
                        console.error('Error signing in:', error);
                        if (errorElement != ""){
                            errorElement.textContent = "SignUp Failed!";
                            errorElement.style.display = "block";
                        };
                        return Promise.reject(error);
                    });
                }).catch((error) => {
                    console.error('Error creating user:', error);
                    if (errorElement != ""){
                        errorElement.textContent = "SignUp Failed!";
                        errorElement.style.display = "block";
                    };
                    return Promise.reject(error);
                });
            })
            .catch((error) => {
                // Handle error confirming code
                console.error("Error confirming code:", error);
                if (errorElement != ""){
                    errorElement.textContent = "SignUp Failed!";
                    errorElement.style.display = "block";
                };
            });
        })
        .catch((error) => {
            // Handle error sending verification code
            console.error("Error sending verification code:", error);
            if (errorElement != ""){
                errorElement.textContent = "SignUp Failed!";
                errorElement.style.display = "block";
            };
        });
    } else {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            console.log('User created successfully:', user);
            // Show success message
            if (errorElement != ""){
                errorElement.style.display = "none";
            }

            signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                const user = userCredential.user;
                console.log('User signed in successfully:', user);
                // Redirect to dashboard or show success message
                localStorage.setItem('user', JSON.stringify(user));
                if (errorElement != ""){
                    errorElement.style.display = "none";
                }
                if (callback != ""){
                    callback();
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
        }).catch((error) => {
            console.error('Error creating user:', error);
            if (errorElement != ""){
                errorElement.style.display = "block";
            }
            return Promise.reject(error);
        });
    }
};

export function Login(username, password, errorElement="", transferPage="", addSufix=true, callback=""){
    // Sign in
    var email = username

    if (addSufix == true){
        email = username + "@InterNationalSchool.com"
    }

    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        console.log('User signed in successfully:', user);
        // Redirect to dashboard or show success message
        localStorage.setItem('user', JSON.stringify(user));
        if (errorElement != ""){
            errorElement.style.display = "none";
        }
        if (callback != ""){
            callback();
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

export function ResetPassword(email, errorElement = "", addSufix=false, callback=""){
    var email = email

    if (addSufix == true){
        email = email + "@InterNationalSchool.com"
    }
    // Password reset
    sendPasswordResetEmail(auth, email).then(() => {
        console.log('Password reset email sent');
        if (errorElement != ""){
            errorElement.style.display = "none";
        }
        if (callback != ""){
            callback();
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
