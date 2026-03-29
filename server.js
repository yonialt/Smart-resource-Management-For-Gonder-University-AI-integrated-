const express = require('express')
const dotenv = require('dotenv')
require('dotenv').config();
dotenv.config()
const UserRoutes = require('./routes/UserRoutes')
const cors =require('cors')
const app = express()
app.use(cors());
app.use(express.json());
app.use('/users', UserRoutes); 
const PORT = process.env.PORT||5000;
app.listen(PORT);

