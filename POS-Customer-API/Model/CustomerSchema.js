const mongoose =require('mongoose');

const customerSchema =new mongoose.Schema({
    customerId:{
        type:String,
        required:true
    },
    customerName:{
        type:String,
        required:true
    },
    customerEmail:{
        type:String,
        required:true
    },
    customerAddress:{
        type:String,
        required:true
    },
    customerSalary:{
        type:Number,
        required:true
    }
});

module.exports=mongoose.model('Customer',customerSchema);
