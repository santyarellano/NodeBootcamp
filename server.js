

const express = require('express');
const app = express();


// Define how we handle GET
app.get('/', (req, res) => {
    res.send('Hello World!')
});

// Start server
app.listen(3000, () => console.log('Server is running on port 3000'));