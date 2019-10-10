var nodemailer = require('nodemailer');
var moment = require('moment')

const sendMail = async function (data) {
    //let student= await Student.findOne({_id:data.idHocSinh});
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'project.school.education@gmail.com',
          pass: 'huynhnhu'
        }
      });
      var dateTime = new Date(data.ngayNghi);
      var ngayNghi =moment( dateTime).format("DD/MM/YY");  

      var mailOptions = {
        from: 'project.school.education@gmail.com',
        to: ''+data.emailGiaoVien+'',
        subject: 'Xin Phép Nghỉ Học',
        text: '',
        html: '<p>Xin chào thầy/Cô</p><p>Tôi tên là '+data.tenPhuHuynh+' phụ huynh của em '+data.tenHocSinh+' .</p><p>Vì lý do: '+data.lyDo+'</p><p> tôi xin phép cho em '+data.tenHocSinh+' được nghỉ học vào ngày '+ngayNghi+' .</p><br/><p>Cảm ơn thầy/cô!</p>'

      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

}
 module.exports={
     sendMail:sendMail
 }