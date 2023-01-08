const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const { mongoConnect } = require('./app/Services/mongo_connector')
// const cookieParser = require('cookie-parser');
const parentRouter = require('./app/Routers/familyRouter');
const studentRouter = require('./app/Routers/studentRouter');
const userRouter = require('./app/Routers/userRouter');


const app = express();
dotenv.config()
const port = process.env.PORT
mongoConnect()

// app.use(cookieParser())

app.use(express.json())
app.use(cors())

app.use('/user', userRouter)
app.use('/parent', parentRouter)
app.use('/student', studentRouter)

app.listen(port, () => console.log(`server started at http://localhost:${port}`))
