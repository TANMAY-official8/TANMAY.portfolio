const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;


// ─────────────────────────────────────────────
// MIDDLEWARE
// ─────────────────────────────────────────────

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// ─────────────────────────────────────────────
// SERVE FRONTEND FILES
// ─────────────────────────────────────────────

// This allows Express to serve:
// HTML, CSS, JavaScript, images, fonts, etc.

app.use(express.static(__dirname));


// ─────────────────────────────────────────────
// HOME PAGE
// ─────────────────────────────────────────────

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


// ─────────────────────────────────────────────
// CONTACT FORM
// ─────────────────────────────────────────────

app.post('/send-message', (req, res) => {

    const { name, email, message } = req.body;

    console.log('--- New Message Received ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log('----------------------------');


    // Check if all fields are filled

    if (!name || !email || !message) {

        return res.status(400).json({
            success: false,
            message: 'All fields are required.'
        });

    }


    // Send successful response

    res.status(200).json({
        success: true,
        message: 'Message received successfully!'
    });

});


// ─────────────────────────────────────────────
// START SERVER
// ─────────────────────────────────────────────

app.listen(port, () => {

    console.log(
        `Backend server is running at http://localhost:${port}`
    );

});