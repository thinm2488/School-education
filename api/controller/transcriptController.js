const mongoose = require('mongoose');
const Transcript = mongoose.model('Transcript');
// const nodemailer = require('nodemailer')
var jwt = require('jsonwebtoken');
const gettranscript = async function () {
   
let transcript= await Transcript.find();
return {
    transcript,
    status:200
}

   
  
}
const inserttranscript = async function (student,data) {
   
    let transcript= await Transcript.findOne({idHocSinh:data.idHocSinh});
    if(transcript){
        transcript.diemAnh=data.diemAnh;
        return{
            transcript,
            status:200
        }
    }
    transcript = new Transcript(data)
    await transcript.save()
    return {
        transcript,
        status:200
    }
    }
    const importexcel = async function (data) {

        for(let a=0;a<=data.length;a++){
        //   let transcript = await Transcript.findOne({ idHocSinh: data[a].idHocSinh });
        //   if(transcript){
            transcript=new Transcript();
             if(data[a].mon=="Anh"){
                transcript.diemAnh.diem15p=data[a].diem15p;
                transcript.diemAnh.diem1tiet=data[a].diem1tiet;
                transcript.diemAnh.diemGiuaKy1=data[a].diemGiuaKy1;
                transcript.diemAnh.diemCuoiKy1=data[a].diemCuoiKy2;
                transcript.diemAnh.diem15p2=data[a].diem15p2;
                transcript.diemAnh.diem1tiet2=data[a].diem1tiet2;
                transcript.diemAnh.diemGiuaKy2=data[a].diemGiuaKy2;
                transcript.diemAnh.diemCuoiKy2=data[a].diemCuoiKy2;

             }
             
             transcript.idHocSinh=data[a].idHocSinh
              await transcript.save();
        //   }
        }
           return{
               message: "Thành Công",
               status:200
           }   
              
        
      
      }
module.exports={
    gettranscript:gettranscript,
    inserttranscript:inserttranscript,
    importexcel:importexcel
  
}