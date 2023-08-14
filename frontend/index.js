const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 80;
const BACKEND_URL = process.env.BACKEND_URL || "http://backend:8080";  // Fallback to default if env variable is not set

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(BACKEND_URL);
        res.send(`Frontend got: ${response.data}`);
    } catch (error) {
        res.send('Failed to fetch from backend.');
    }
});

app.listen(PORT, () => {
    console.log(`Frontend service running on port ${PORT}`);
});
