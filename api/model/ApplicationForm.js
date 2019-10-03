var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ApplicationFormSchema = new Schema(
    {
       
        idHocSinh:{type:String},
        tenHocSinh:{type:String},
        ngayNghi:{type:Number},
        tenPhuHuynh:{type:String},
        trangThai:{type:Boolean, default:false},
        ngayGui:{type:Number}

    }
);
module.exports = mongoose.model('ApplicationForm',ApplicationFormSchema)

