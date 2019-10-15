const mongoose = require('mongoose');
const User = mongoose.model('User');
const Student = mongoose.model('Student');
// const nodemailer = require('nodemailer')
var jwt = require('jsonwebtoken');
// const smtpTransport=require('nodemailer-smtp-transport')
// var generator=require('generate-password')
const layuser = async function () {
    var listuser = await User.find({ role: 'ph' });
    return {
        listuser
    }

}
const layChiTietUser = async function (id) {
    var user = await User.findOne({ _id: id });
    return {
        user
    }

}
// const islogin = async function (token) {
//     var user = await User.findOne(token:to);
//     return {
//         user
//     }

// }
const taoUser = async function (data) {
    let user = await User.findOne({ soDienThoai: data.soDienThoai });
    if (user) {
        return {
            message: "Số Điện Thoại đã được sử dụng!",
            status: 500
        }
    }

    user = new User(data);
    user.quanHe = data.HocSinh
    await user.save();
    return {
        user,
        message: "Thêm tài khoản thành công",
        status: 200
    }

}
const importexcel = async function (data, nguoiTao) {

    // try {
    //     for (let i=0; i <= data.length; i++) {
    //         let user = await User.findOne({ soDienThoai: data[i].SoDienThoai });


    //             let student = await Student.findOne({ id:  data[i].IDHocSinh })
    //             user = new User(data);
    //             user.quanHe = student;
    //             user.idTao = nguoiTao.id;
    //             user.tenNguoiDung = data[i].HovaTen;
    //             user.soDienThoai = data[i].SoDienThoai;
    //             user.email = data[i].Email;
    //             await user.save();
    //             return {

    //                 message: "Thêm tài khoản thành công",
    //                 status: 200
    //             }
    //     }


    // } catch (error) {

    // }
    data.map(async function (element) {
        let user = await User.findOne({ soDienThoai: element.SoDienThoai });

        if(user){
            return {
    
                message: "fail",
                status: 500
            }
        }else{
            let student = await Student.findOne({ id: element.IDHocSinh })
            user = new User(data);
            user.quanHe = student;
            user.idTao = nguoiTao.id;
            user.tenNguoiDung = element.HovaTen;
            user.soDienThoai = element.SoDienThoai;
            user.email = element.Email;
            await user.save();
            return {
    
                message: "Thêm tài khoản thành công",
                status: 200
            }
        }
       

    })
















}

const getUserByPhone = async function (soDienThoai) {
    let user = await User.findOne({ soDienThoai: soDienThoai });
    return user;

}



const checkLogin = async function (data) {
    let user = await User.findOne({ soDienThoai: data.soDienThoai || data });
    if (user) {
        if (user.password === data.password) {

            saveAndroidToken(data)
            //saveAndroidToken(data.androidToken);
            return user


        } else {

            return {
                message: 'Sai mật khẩu hoặc password',
                status: 500
            }
        }
    } else {
        return {
            message: 'Số điện thoại không tồn tại!',
            status: 500
        }
    }

}
const saveAndroidToken = async function (data) {
    let user = await User.findOne({ soDienThoai: data.soDienThoai || data });
    if (user) {
        if (data.androidTokentoken) {
            user.androidToken = data.androidToken
            user.save();
        } else {
            throw new Error('Không tìm thấy android Token')
        }
    }
}
const editProfile = async function (data) {
    let user = await User.findOne({ soDienThoai: data.soDienThoai });

    user.soDienThoai = data.soDienThoai;
    if (data.tenNguoiDung) {
        user.tenNguoiDung = data.tenNguoiDung;
    }
    if (data.maSoHocSinh) {
        user.maSoHocSinh = data.maSoHocSinh;
    }
    if (data.hinh) {
        user.hinh = data.hinh;
    }


    await user.save();
    return { user }

}
const changePass = async function (data) {
    let user = await User.findOne({ soDienThoai: data.soDienThoai });



    if (user.password === data.oldpassword) {
        user.password = data.newpassword
    }
    else {
        throw new Error('Nhập sai mật khẩu cũ!')
    }
    await user.save();
    return { user }

}

// function uploadImg (soDienThoai, file) {
//     return new Promise((resolve, reject) => {
//         let user = await User.findOne({ soDienThoai: soDienThoai }, function (err, user) {
//         if (err) {
//           console.log(err)
//           return reject(responseStatus.Code500())
//         } else if (!user) {
//           return reject(responseStatus.Code404())
//         } else {
//           let stream = fs.createReadStream(file.path)
//           if (file.name) {
//             if (file.size > 5242880) {
//               return reject(responseStatus.Code401())
//             } else {
//               let s3 = new AWS.S3({ signatureVersion: 'v2' })
//               const name =  './public/images/' 
//               const params = { Bucket: config.aws.bucketName, ACL: 'public-read', Key: name, Body: stream }
//               s3.upload(params, function (err, data) {
//                if (err) {
//                   console.log(err)
//                   return reject(responseStatus.Code500())
//                 } else {
//                   service.photoURL = data.Location
//                   service.save(function (err) {
//                     if (err) {
//                       return reject(responseStatus.Code500())
//                     } else {
//                       return resolve(responseStatus.Code200({ photoURL: data.Location }))
//                     }
//                   })
//                 }
//               })
//             }
//           }
//         }
//       })
//     })
//   }
// const resetPassword = async function (data,host) {
//     let user = await User.findOne({ Email: data.Email });
//     if (!user) {
//         throw new Error('Người dùng không tồn tại!')
//     }
//     var token = jwt.sign({ Email: data.Email }, "secret")
//     var transPorter = nodemailer.createTransport(smtpTransport({
//         service: "gmail",
//         auth: {
//             user: "cinemaproject19@gmail.com",
//             pass: "cinemaproject2019"
//         }
//     }))
//     var mailOption = {
//         from: "cinemaproject19@gmail.com",
//         to: data.Email,
//         subject: "Reset Password",
//         text: "Nhấp vào đường link để thay đổi mật khẩu:\n" + "http://" + host + "/user/resetpassword/" + token
//     }
//     console.log(mailOption)
// return transPorter.sendMail(mailOption);
// }
const changePassword = async function (data) {
    let user = await User.findOne({ Email: data });

    var newpass = generator.generate({
        length: 8,
        Number: true
    })
    user.password = newpass;


    await user.save();
    return { user, newpass }

}
const xoaUser = async function (id) {
    let user = await User.findOne({ _id: id });
    user.remove();
    return {
        status: 200,
        message: 'Xóa thành công!'
    }
}



module.exports = {
    layuser: layuser,
    layChiTietUser: layChiTietUser,
    //islogin:islogin,
    taoUser: taoUser,
    getUserByPhone: getUserByPhone,
    checkLogin: checkLogin,
    editProfile: editProfile,
    xoaUser: xoaUser,
    changePass: changePass,
    importexcel: importexcel
    // resetPassword: resetPassword,
    // changePassword:changePassword
}


