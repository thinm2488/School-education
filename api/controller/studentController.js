const mongoose = require('mongoose');
const Student = mongoose.model('Student');
const Applicationform = mongoose.model('ApplicationForm');
const Android=require('./pushnotification/android')
const Class = mongoose.model('Class');
const Diligence = mongoose.model('Diligence');
const Transcript = mongoose.model('Transcript');
var moment = require('moment')
// const nodemailer = require('nodemailer')
var jwt = require('jsonwebtoken');
const createStudent = async function (data,teacher) {
    // let student = await Student.findOne({ maSoHocSinh: data.maSoHocSinh });
    // if (student) {
    //     throw new Error('Mã số đã được sử dụng ! ')
    // }
    let date = new Date(data.ngaySinh); // some mock date
    let milliseconds = date.getTime(); 
    let classs = await Class.findOne({ soHieu: data.soHieu })
    if (!classs) {
        classs = new Class(data);
        
        classs.khoi = data.khoi,
        classs.soHieu = data.soHieu
        await classs.save()
        student = new Student(data);
        await student.save();
        let transcript=new Transcript();
        transcript.GVCN=data.idTao,
        transcript.idHocSinh=student._id,
        transcript.tenHocSinh=student.tenHocSinh,
        transcript.tenGV=teacher.user.tenNguoiDung,

        await transcript.save()
        let diligence= new Diligence();
        diligence.idHocSinh=student._id
        await diligence.save();
        return {
            student
        }
    } else {
        student = new Student(data);
        student.idTao=data.idTao
        student.ngaySinh=milliseconds
        await student.save();
        let transcript=new Transcript();
        transcript.GVCN=data.idTao,
        transcript.idHocSinh=student._id,
        transcript.tenHocSinh=student.tenHocSinh,
        transcript.tenGV=teacher.user.tenNguoiDung
        await transcript.save()
        let diligence= new Diligence();
        diligence.idHocSinh=student._id
        await diligence.save();
        return {
            student
        }
    }


}
const laystudent = async function (data) {
    if (data.soHieu) {
        var liststudent = await Student.find({ soHieu: data.soHieu });
        return {
            liststudent
        }

    }
    if (data.khoi) {
        var liststudent = await Student.find({ khoi: data.khoi });
        return {
            liststudent
        }

    }


}



const layChiTietStudent = async function (id) {
    var student = await Student.findOne({ _id: id });
    return {
        student
    }

}
const editProfile = async function (data) {
    let student = await Student.findOne({ _id: data.id });


    if (data.tenHocSinh) {
        student.tenHocSinh = data.tenHocSinh;
    }
    if (data.khoi) {
        student.khoi = data.khoi;
    }
    if (data.soHieu) {
        student.soHieu = data.soHieu;
    }
    if (data.diaChi) {
        student.diaChi = data.diaChi;
    }
    if (data.ngaySinh) {
        let date = new Date(data.ngaySinh); // some mock date
        let milliseconds = date.getTime(); 
        student.ngaySinh = milliseconds;
    }
    if (data.queQuan) {
        student.queQuan = data.queQuan;
    }
    if (data.hinh) {
        student.hinh = data.hinh;
    }


    await student.save();
    return { student }

}
const nhapDiem = async function (data) {

    let student = await Student.findOne({ _id: data.id });


    if (data.tenHocSinh) {
        student.tenHocSinh = data.tenHocSinh;
    }
    if (data.diem) {
        student.lop = data.lop;
    }
    if (data.loai) {
        student.loai = data.loai;
    }
    if (data.diaChi) {
        student.diaChi = data.diaChi;
    }
    if (data.ngaySinh) {
        student.ngaySinh = data.ngaySinh;
    }
    if (data.queQuan) {
        student.queQuan = data.queQuan;
    }
    if (data.hinh) {
        student.hinh = data.hinh;
    }


    await student.save();
    return { student }

}
const xoaStudent = async function (id) {
    let student = await Student.findOne({ _id: id });
    student.remove();
    return {
        mess: 'Xóa thành công!'
    }
}
const createdayoff = async function (user, data,teacher) {
    let student = await Student.findOne({ _id: data.idHocSinh });
    applicationform = new Applicationform();
    if(data.ngayBatDau==data.ngayKetThuc){
        applicationform.soNgayNghi=1
    }
    else{
        let periodSeconds = (data.ngayKetThuc - data.ngayBatDau);
        applicationform.soNgayNghi = Math.ceil((periodSeconds/(1000*60*60*24)))+2
    }
   
    if (student) {
        applicationform.tenHocSinh = student.tenHocSinh;
        applicationform.soHieu = student.soHieu;
        applicationform.idHocSinh = student.id;
        applicationform.emailGiaoVien=teacher;
        applicationform.tenPhuHuynh = user.tenNguoiDung;
        applicationform.ngayBatDau = data.ngayBatDau*1000;
        applicationform.ngayKetThuc = data.ngayKetThuc*1000;
        applicationform.ngayGui = data.ngayGui*1000;
        applicationform.lyDo = data.lyDo
        
        applicationform.idPhuHuynh = user.id
        await applicationform.save();
        return {
            applicationform
        }
    } else {
        throw new Error("Không có học sinh trong danh sách")
    }
}
const getdayoff = async function (id) {
    //let student= await Student.findOne({_id:data.idHocSinh});
    let dayoff = await Applicationform.find({ idHocSinh: id })

    if (dayoff) {
        return {
            dayoff
        }
    } else {
        throw new Error("Không có dữ liệu")
    }

}
const getalldayoff = async function () {
    //let student= await Student.findOne({_id:data.idHocSinh});
    let dayoff = await Applicationform.find()

    if (dayoff) {
        return {
            dayoff
        }
    } else {
        throw new Error("Không có dữ liệu")
    }

}
const alloweddayoff = async function (data) {
    //let student= await Student.findOne({_id:data.idHocSinh});
    let dayoff = await Applicationform.findOne({_id:data.id})
   
    if (dayoff) {
        dayoff.trangThai=true
        await dayoff.save()
        let deligence = await Diligence.findOne({idHocSinh:dayoff.idHocSinh})
        if(deligence){
            var dateTime = dayoff.ngayBatDau;
            var ngayNghi = moment( dateTime).format("MM");
            
           
            if(ngayNghi==01){
                if(deligence.thang1.soLuong){
                    deligence.thang1.soLuong=deligence.thang1.soLuong+Number(dayoff.soNgayNghi)
                } else{
                    deligence.thang1.soLuong=Number(dayoff.soNgayNghi)
                }
              
                deligence.thang1.danhSachNgayNghi.push(dayoff);
                await deligence.save()
            }
            if(ngayNghi==02){
                if(deligence.thang2.soLuong){
                    deligence.thang2.soLuong=deligence.thang2.soLuong+Number(dayoff.soNgayNghi)
                } else{
                    deligence.thang2.soLuong=Number(dayoff.soNgayNghi)
                }
                deligence.thang2.danhSachNgayNghi.push(dayoff);
                await deligence.save()
            }
            if(ngayNghi==03){
                if(deligence.thang3.soLuong){
                    deligence.thang3.soLuong=deligence.thang3.soLuong+Number(dayoff.soNgayNghi)
                } else{
                    deligence.thang3.soLuong=Number(dayoff.soNgayNghi)
                }
                deligence.thang3.danhSachNgayNghi.push(dayoff);
                await deligence.save()
            }
            if(ngayNghi==04){
                if(deligence.thang4.soLuong){
                    deligence.thang4.soLuong=deligence.thang4.soLuong+Number(dayoff.soNgayNghi)
                } else{
                    deligence.thang4.soLuong=Number(dayoff.soNgayNghi)
                }
                deligence.thang4.danhSachNgayNghi.push(dayoff);
                await deligence.save()
            }
            if(ngayNghi==05){
                if(deligence.thang5.soLuong){
                    deligence.thang5.soLuong=deligence.thang5.soLuong+Number(dayoff.soNgayNghi)
                } else{
                    deligence.thang5.soLuong=Number(dayoff.soNgayNghi)
                }
                deligence.thang5.danhSachNgayNghi.push(dayoff);
                await deligence.save()
            }
            if(ngayNghi==09){
                if(deligence.thang9.soLuong){
                    deligence.thang9.soLuong=deligence.thang9.soLuong+Number(dayoff.soNgayNghi)
                } else{
                    deligence.thang9.soLuong=Number(dayoff.soNgayNghi)
                }
                deligence.thang9.danhSachNgayNghi.push(dayoff);
                await deligence.save()
            }
            if(ngayNghi==10){
                if(deligence.thang10.soLuong){
                    deligence.thang10.soLuong=deligence.thang10.soLuong+Number(dayoff.soNgayNghi)
                } else{
                    deligence.thang10.soLuong=Number(dayoff.soNgayNghi)
                }
                deligence.thang10.danhSachNgayNghi.push(dayoff);
                await deligence.save()
            }
            if(ngayNghi==11){
                if(deligence.thang11.soLuong){
                    deligence.thang11.soLuong=deligence.thang11.soLuong+Number(dayoff.soNgayNghi)
                } else{
                    deligence.thang11.soLuong=Number(dayoff.soNgayNghi)
                }
                deligence.thang11.danhSachNgayNghi.push(dayoff);
                await deligence.save()
            }
            if(ngayNghi==12){
                if(deligence.thang12.soLuong){
                    deligence.thang12.soLuong=deligence.thang12.soLuong+Number(dayoff.soNgayNghi)
                } else{
                    deligence.thang12.soLuong=Number(dayoff.soNgayNghi)
                }
                deligence.thang12.danhSachNgayNghi.push(dayoff);
                await deligence.save()
            }
        }

        return {
            dayoff
        }
    } else {
        throw new Error("Không có dữ liệu")
    }

}
const getdayoffbyid = async function (id) {
    //let student= await Student.findOne({_id:data.idHocSinh});
    let dayoff = await Applicationform.findOne({_id:id})
   
    if (dayoff) {
        return {
            dayoff
        }
    } else {
        throw new Error("Không có dữ liệu")
    }

}
const importexcel = async function (data,teacher) {
    let classs = await Class.findOne({ soHieu: data.soHieu })
    if (!classs) {
        classs = new Class();
        classs.khoi = data.khoi,
        classs.soHieu = data.soHieu
        await classs.save()
    }
    for(let i=0;i< data.liststudent.length;i++){
        let date = new Date( data.liststudent[i].ngaySinh); // some mock date
        let milliseconds = date.getTime(); 
        student = new Student(data);
        student.tenHocSinh =  data.liststudent[i].tenHocSinh;
        student.soHieu =  data.liststudent[i].soHieu;
        student.khoi =  data.liststudent[i].khoi;
        student.ngaySinh = milliseconds;
        student.gioiTinh =  data.liststudent[i].gioiTinh;
        student.diaChi =  data.liststudent[i].diaChi;
        await student.save();
        if(student){
            let transcript=new Transcript();
            transcript.GVCN=data.idTao,
            transcript.idHocSinh=student._id,
            transcript.tenHocSinh=student.tenHocSinh,
            transcript.tenGV=teacher.user.tenNguoiDung
            await transcript.save();
            let diligence= new Diligence();
            diligence.idHocSinh=student._id
            await diligence.save();
        }
      
      
        
    }
    

            
            return {

                message: "Thêm tài khoản thành công",
                status: 200
            }
        


}
const getclass = async function (data) {
    //let student= await Student.findOne({_id:data.idHocSinh});
    let Classes = await Class.find({ khoi: data.khoi })

  
        return {
            Classes
        }
    
}
module.exports = {
    createStudent: createStudent,
    laystudent: laystudent,
    layChiTietStudent: layChiTietStudent,
    editProfile: editProfile,
    xoaStudent: xoaStudent,
    nhapDiem: nhapDiem,
    createdayoff: createdayoff,
    getdayoff: getdayoff,
    alloweddayoff:alloweddayoff,
    getalldayoff:getalldayoff,
    importexcel: importexcel,
    getclass:getclass,
    getdayoffbyid:getdayoffbyid
}