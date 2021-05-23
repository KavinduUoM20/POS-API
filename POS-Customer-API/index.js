//import framework
const express= require('express');
const mongoose= require('mongoose');
const cors= require('cors');
const bodyParser = require('body-parser');

const customerRoute=require('./Routes/CustomerRoute');

//initialize app
const app=express();
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


mongoose.connect(
    'mongodb://localhost:27017/pos',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
    }
).then(()=>{
    app.listen(3000,()=>{
        console.log('Customer Service Up and Running on Port 3000');
    })
}).catch(error=>{
    console.log(error);
});

app.use('/api/v1/customerRoute',customerRoute);
