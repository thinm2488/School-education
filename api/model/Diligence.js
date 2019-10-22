var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DiligenceSchema = new Schema(
    {
     
        idHocSinh:{type:String},
       
        thang9:{
            soLuong:{type:Number},
            danhSachNgayNghi:[]
        },
        thang10:{
            soLuong:{type:Number},
            danhSachNgayNghi:[]
        },
        thang11:{
            soLuong:{type:Number},
            danhSachNgayNghi:[]
        },
        thang12:{
            soLuong:{type:Number},
            danhSachNgayNghi:[]
        },
        thang1:{
            soLuong:{type:Number},
            danhSachNgayNghi:[]
        },
        thang2:{
            soLuong:{type:Number},
            danhSachNgayNghi:[]
        },
        thang3:{
            soLuong:{type:Number},
            danhSachNgayNghi:[]
        },
        thang4:{
            soLuong:{type:Number},
            danhSachNgayNghi:[]
        },
        thang5:{
            soLuong:{type:Number},
            danhSachNgayNghi:[]
        },
    }
);
module.exports = mongoose.model('Diligence', DiligenceSchema)

