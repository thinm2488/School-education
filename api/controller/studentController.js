const mongoose = require('mongoose');
const Student = mongoose.model('Student');
const Applicationform = mongoose.model('ApplicationForm');
const Class = mongoose.model('Class');
// const nodemailer = require('nodemailer')
var jwt = require('jsonwebtoken');
const createStudent = async function (data) {
    // let student = await Student.findOne({ maSoHocSinh: data.maSoHocSinh });
    // if (student) {
    //     throw new Error('Mã số đã được sử dụng ! ')
    // }
    let classs = await Class.findOne({ soHieu: data.soHieu })
    if (!classs) {
        classs = new Class(data);
        classs.khoi = data.khoi,
        classs.soHieu = data.soHieu
        await classs.save()
        student = new Student(data);
        await student.save();
        return {
            student
        }
    } else {
        student = new Student(data);
        await student.save();
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
    if (data.lop) {
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
const createdayoff = async function (user, data) {
    let student = await Student.findOne({ _id: data.idHocSinh });
    applicationform = new Applicationform();
    if (student) {
        applicationform.tenHocSinh = student.tenHocSinh;
        applicationform.idHocSinh = student.id;
        applicationform.tenPhuHuynh = user.tenNguoiDung;
        applicationform.ngayNghi = data.ngayNghi;
        applicationform.ngayGui = data.ngayGui;
        applicationform.lyDo = data.lyDo
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
const importexcel = async function (data) {

    data.map(async function (element) {
        // let user = await User.findOne({ soDienThoai: element.SoDienThoai });

        // if(user){
        //     return {

        //         message: "fail",
        //         status: 500
        //     }
        // }else{
        // let student = await Student.findOne({ id: element.IDHocSinh })
        let classs = await Class.findOne({ soHieu: data.soHieu })
        if (!classs) {
            classs = new Class();
            classs.khoi = element.khoi,
            classs.soHieu = element.soHieu
            await classs.save()
            student = new Student(data);
            student.tenHocSinh = element.tenHocSinh;
            student.soHieu = element.soHieu;
            student.khoi = element.khoi;
            student.ngaySinh = element.ngaySinh;
            student.gioiTinh = element.gioiTinh;
            student.diaChi = element.diaChi;
            await student.save();
            return {
                student,
                message: "Thêm tài khoản thành công",
                status: 200
            }
        }

        else {
            student = new Student(data);
            student.tenHocSinh = element.tenHocSinh;
            student.soHieu = element.soHieu;
            student.khoi = element.khoi;
            student.ngaySinh = element.ngaySinh;
            student.gioiTinh = element.gioiTinh;
            student.diaChi = element.diaChi;
            await student.save();
            return {

                message: "Thêm tài khoản thành công",
                status: 200
            }
        }

    })

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
    importexcel: importexcel,
    getclass:getclass
}