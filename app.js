const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
const connectDb=async()=>{
    await mongoose.connect("mongodb+srv://rupan:rupan@cluster0.95mli12.mongodb.net/");
    console.log("connected to db");
}
connectDb();
// Load routes
// const userRoutes = ;
// const adminRoutes = require('./routes/adminRoutes');

app.use('/user', require('./routes/userRoutes'));
app.use('/admin', require('./routes/adminRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
