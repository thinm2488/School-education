var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ApplicationFormSchema = new Schema(
    {
       
       
        tenHocSinh:{type:String},
        ngayNghi:{type:Number},
        tenPhuHuynh:{type:String},
        trangThai:{type:Boolean, default:false}

    }
);
module.exports = mongoose.model('ApplicationForm',ApplicationFormSchema)

