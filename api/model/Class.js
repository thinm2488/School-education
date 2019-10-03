var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClassSchema = new Schema({
  
   
    khoi:{type:String},
   soHieu:{type:String}
   

},)

// NotificationSchema.pre('save', function (next) {
//     this.modifiedAt = Date.now()
//     next()
// })

mongoose.model('Class', ClassSchema)
