const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const authRoutes = require('./routes/authRoutes');
const errorHandler = require("./middelwares/errorMiddleware");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(errorHandler);

// API routes
app.use('/api/v1/auth', authRoutes);
app.use("/api/v1/openai" ,require("./routes/openaiRoutes")); 


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.DEV_MODE} on port ${PORT}`.bgCyan.white);
});
