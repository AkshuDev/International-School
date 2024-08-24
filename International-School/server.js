const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const session = require("express-session")
require('dotenv').config();

const app = express();
const port = 3000;

const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error('Error connecting to MongoDB:', error));

// User Schema and Model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Serve static files from the 'FrontEnd' folder
app.use(express.static('FrontEnd'));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.post('/register', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        // Find if user already exists
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(409).json({ message: 'Username already exists' });
        }

        // Hash the password
        const saltRounds = 10;
        bcrypt.hash(password, saltRounds, async (err, hash) => {
            if (err) {
                console.error('Error hashing password:', err);
                return res.status(500).json({ error: 'Error creating user' });
            }

            // Create a new user
            const newUser = new User({
                username,
                password: hash
            });

            // Save the user to the database
            try {
                await newUser.save();
                res.json({ message: 'User created successfully' });
            } catch (error) {
                console.error('Error saving user:', error);
                return res.status(500).json({ error: 'Error creating user' });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        // Find the user by username
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const storedPassword = user.password;
        bcrypt.compare(password, storedPassword, (err, result) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                return res.status(500).json({ error: 'Internal server error' });
            }
            if (result) {
                // Password matches
                console.log("Password Matched!");
                req.session.user = user; // Store user information in the session
                res.json({ message: 'Login successful!' }); // Response for Login
            } else {
                // Invalid password
                console.log("Invalid Password!");
                res.status(500).json({message: "Password is invalid for USER"});
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});