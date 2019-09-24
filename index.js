const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dot =require('dotenv');
const apiRoutes = require('./api-routes')

var app = express();
dot.config();

var password = process.env.PASSWORD
mongoose.connect(`mongodb+srv://root:${password}@cluster0-tecvg.mongodb.net/test?retryWrites=true&w=majority`)

var db = mongoose.connection;

if(!db){
    console.log("Error connecting DB");
}

else{
    console.log("DB is connecting successfully ");
}
app.set('views',__dirname +'/veiws');
app.set('view engine', 'ejs');
app.set('html',require('ejs').renderFile)

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())
app.get('/',(req, res)=>{
    res.send("Hello Express world !!")
})

app.use('/api', apiRoutes);

var port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log(`Server is Running at:http://localhost:${port}`)
})