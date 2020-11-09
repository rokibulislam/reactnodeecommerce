const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors =  require('cors')
// const expressValidator = require('express-validator')
require('dotenv').config();

// import routes

const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const productRoutes = require('./routes/product')

const app = express();

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
// app.use(expressValidator())
app.use(cors())

app.use('/api', authRoutes)
app.use('/api', userRoutes)
app.use('/api', categoryRoutes)
app.use('/api', orderRoutes)
app.use('/api', productRoutes)

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('hello world') 
});

app.listen( port, () => {
    console.log(`Server is runing on port ${port}`);
});
