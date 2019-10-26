var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DiligenceSchema = new Schema(
    {
     
        idHocSinh:{type:String},
        danhSachNgayNghi:[]
        
    }
);
module.exports = mongoose.model('Diligence', DiligenceSchema)

