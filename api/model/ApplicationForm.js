var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ApplicationFormSchema = new Schema(
    {
       
       
        tenHocSinh:{type:String},
        ngayNghi:{type:String},
        tenPhuHuynh:{type:String},
        trangThai:{type:String}

    }
);
module.exports = mongoose.model('ApplicationForm',ApplicationFormSchema)

