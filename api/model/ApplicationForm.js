var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ApplicationFormSchema = new Schema(
    {
       
        idHocSinh:{type:String},
        tenHocSinh:{type:String},
        lyDo:{type:String},
        ngayBatDau:{type:Number},
        ngayKethuc:{type:Number},
        tenPhuHuynh:{type:String},
        trangThai:{type:Boolean, default:false},
        ngayGui:{type:Number},
        emailGiaoVien:{type:String}
    }
);
module.exports = mongoose.model('ApplicationForm',ApplicationFormSchema)

