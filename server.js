const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Set up MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',  // Replace with your MySQL password
    database: 'disaster_management'  // Replace with your database name
});

// Connect to MySQL
db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// API Route: Send Emergency Alert with Location
app.post('/api/send-alert', (req, res) => {
    const { lat, long } = req.body;

    const sql = `INSERT INTO Alerts (Location, AlertTime) VALUES (?, NOW())`;
    const values = [`${lat}, ${long}`];

    db.query(sql, values, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        // Logic to notify the rescue team goes here (e.g., email, SMS)
        console.log('Rescue team notified!', result);
        res.status(200).json({ success: true, message: 'Rescue team notified!' });
    });
});

// API Route: Get Disaster Infographics
app.get('/api/get-infographics', (req, res) => {
    const sql = 'SELECT DisasterType, ImgUrl FROM Disaster_Info';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json(results);
    });
});

// API Route: Get Disaster Predictions
app.get('/api/get-predictions', (req, res) => {
    // Example static data; replace this with actual prediction logic
    const predictions = {
        dates: ['2024-10-01', '2024-10-02', '2024-10-03'],
        probabilities: [0.3, 0.5, 0.7]
    };
    res.status(200).json(predictions);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
