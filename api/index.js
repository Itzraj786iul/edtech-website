import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// import Routes


// Connect to MongoDB


// Create an Express App
const app = express();
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}!`);
});

// Middleware
app.use(express.json());   // Middleware to parse JSON data

app.use((err, req, res, next) => {
    const statusCode = 500 || err.statusCode;
    return res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: err.message,
    });
});