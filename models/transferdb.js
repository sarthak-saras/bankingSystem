const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const transferSchema = new Schema({
    acnumber:{
        type:Number,
        required:true
    },name:{
      type:String,
      required:true
    },money:{
        type:Number,
        required:true
    }
},{timestamps:true});

const Transfer = mongoose.model('Transfer',transferSchema);
module.exports = Transfer;
