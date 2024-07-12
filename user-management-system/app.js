require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Veritabanı bağlantısı
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));