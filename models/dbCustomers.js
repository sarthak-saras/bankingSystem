const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true
    },accountnumber:{
        type:Number,
        required:true
    },bankBalance:{
        type:Number,
        required:true
    }

});




const Customers = mongoose.model('Customers',customerSchema);
// const Customerarray =[
//
//  { name :  "Sarthak"  ,       email : "sarthak@yahoo.com"   , accountnumber : 588378619  ,bankBalance :  250000 },
//     { name :  "Krishna"   ,       email :  "krishna@gmail.com"    ,accountnumber : 588378620 , bankBalance : 260900   },
//     { name :   "Neelabh"    ,    email : "neelabh@gmail.com"     ,accountnumber : 588378621   ,   bankBalance : 270000 },
//     { name :  "Anurag"     ,   email : "anurag@gmail.com"     ,accountnumber:  588378622    , bankBalance : 550000 },
//     { name :  "Ayush"   ,   email : "ayush@gmail.com"        ,accountnumber:  588378623     , bankBalance : 280000 },
//     { name :  "Nikhil"   ,   email : "nikhil@gmail.com"          ,accountnumber:  588378624     , bankBalance : 1120000 },
//   { name :  "Amit"     ,   email : "amit@gmail.com"    ,accountnumber:  588378625    , bankBalance :  898000 },
//    { name :  "Rahul"     ,   email : "rahul@gmail.com"   , accountnumber:   588378626     , bankBalance :456000 },
//   { name :  "Rohit"    ,   email : "rohit@gmail.com"      ,   accountnumber:  588378627    ,bankBalance :690000  },
//  {name :  "Mohit"    ,   email : "mohit1@gmail.com"       ,   accountnumber:  588378628      , bankBalance :   232000 }
//
// ];
//
//
//
// Customers.insertMany(Customerarray,function(err){
//   if(!err){
//        console.log("Items added Successfully to database");
//     }
// });

module.exports = Customers;
