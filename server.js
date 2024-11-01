const express = require('express');
const connectDB = require('./config/db');
const app = express();

app.use(express.json());

require('dotenv').config();
const port = process.env.PORT || 4000

const blog = require('./routes/blog');
app.use('/api/v1', blog);

connectDB();

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})
app.get('/', (req, res) => {
    res.send('Hello World');
})