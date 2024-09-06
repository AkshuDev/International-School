# InterNational School

## Authors

* Akshobhya Sasun (Akshobhyasasun@gmail.com, pheonix.community.mail@gmail.com)
* Jenil Pokar

## Project Description

This website is a Bits and Brushes Project. It was created using JavaScript, HTML, CSS, and Firebase for the database.

## Features

* Fully functional Login and Signup pages
* Database integration with Firebase for:
    * Messaging
    * Report cards
    * Subject teachers
    * Etc

## Installation and Setup

**Local Server Necessity:**

This website requires a local server to run due to security restrictions with the `file:///` protocol.

**Local Server Options:**

1. **Command Prompt (CMD):**

   Follow these steps to create a local server using CMD:

   1. Open a command prompt window.
   2. Navigate to the directory containing the website's files.
   3. Run the command `python -m http.server 8080` (replace `8080` with a different port if needed).

   You can find detailed instructions on [https://ryanblunden.com/create-a-http-server-with-one-command-thanks-to-python-29fcfdcd240e].

2. **Visual Studio Code (VS Code):**

   1. If you don't have the Live Server extension installed, open VS Code, go to the Extensions tab, search for "Live Server", and install it.
   2. Open the folder containing the website's files in VS Code.
   3. Right-click on the `index.html` file or the project folder and select "Open with Live Server".

3. **Other Options:**

   You can also use alternative local server tools like XAMPP or MAMP.

## Getting Started

### Signup:

1. Access the Signup Page: Navigate to the signup page on our website.
#### Enter Information: Provide the required details, including:
Username (4 digits for students)
Password
Phone number for verification
Submit: Click the "Signup" button.
Verification: You'll receive a verification code via SMS. Enter this code on the signup page.
Redirect: After successful verification, you might experience a slight delay before being redirected to  account. This is due to a built-in JavaScript timeout.
Important Notes:

Avoid usernames 0001 and 0002: These usernames are reserved for testing purposes.
Teacher signup is not currently available: Due to time constraints, teacher signup functionality is not implemented.
Login:

Access the Login Page: Navigate to the login page on our website.
Enter Credentials: Enter your username and password.
Submit: Click the "Login" button.
Testing Login:

Use saved credentials: If you've previously signed up, use your saved credentials.
Test credentials: For testing purposes, you can use the following credentials:
Username: 0001
Password: Akshu@123

## End-to-End Encryption Considerations:

While implementing end-to-end encryption (E2EE) for all communication within our website would be ideal for enhanced security, it can add complexity depending on our chosen approach

The provided link (https://akshudev.github.io/International-School/International-School/FrontEnd/index.html) would provide end to end encryption.

# NOTE:
Login and SignUp Page and such Pages Would take some time to change window url because of await timeout in JavaScript

# NOTE:
Do not use localhost protocol as it is not valid for recaptcha.

# Credits:
JavaScript and Firebase -> Akshobhya Sasun
UI Design -> Jenil Pokar
HTML and CSS -> Akshobhya Sasun and Jenil Pokar

Pages ->
          Main Page -> Jenil Pokar
          About Page(This Page) -> Akshobhya Sasun
          About US Page(Main Page) -> Jenil Pokar
          Login Page -> Akshobhya Sasun + Jenil Pokar
          SignUp Page -> Akshobhya Sasun + Jenil Pokar
          DashBoard Page -> Akshobhya Sasun + Jenil Pokar
          Messages Page -> Jenil Pokar
          Facilities Page -> Akshobhya Sasun + Jenil Pokar
          Forgot Page -> Akshobhya Sasun + Jenil Pokar
         Change Student Details Page -> Akshobhya Sasun