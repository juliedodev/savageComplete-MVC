const express = require('express')
const app = express()
const connectDB = require('./config/database')
const messageRoutes = require('./routes/messages')

require('dotenv').config({ path: './config/.env' });
connectDB()    

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', messageRoutes)


app.listen(process.env.PORT, ()=>{
  console.log('Server is running, you better catch it!')
})