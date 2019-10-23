const mongoose = require('mongoose');
const Transcript = mongoose.model('Transcript');
// const Transcript = mongoose.model('Teacher');
// const nodemailer = require('nodemailer')
var jwt = require('jsonwebtoken');
const gettranscript = async function (id) {

    let transcript = await Transcript.findOne({ idHocSinh: id });
    return {
        transcript,
        status: 200
    }



}
const getalltranscript = async function (sohieu) {

    let transcript = await Transcript.find({ soHieu: sohieu });
    return {
        transcript,
        status: 200
    }



}
const getalltranscriptbysub = async function (data) {
    let transcript = [

    ]

    let list = await Transcript.find({ soHieu: data.soHieu });
    if (data.mon == "Anh") {

        list.forEach(element => {
            let obj = {
                GVCN: element.GVCN,
                idHocSinh: element.idHocSinh,
                tenHocSinh: element.tenHocSinh,
                tenGV: element.tenGV,
                soHieu: element.soHieu,
                HKI: element.HKI.diemAnh,
                HKII: element.HKII.diemAnh
            }

            transcript.push(obj)

        });
    }
    if (data.mon == "Toán") {
        list.forEach(element => {
            let obj = {
                GVCN: element.GVCN,
                idHocSinh: element.idHocSinh,
                tenHocSinh: element.tenHocSinh,
                tenGV: element.tenGV,
                soHieu: element.soHieu,
                HKI: element.HKI.diemToan,
                HKII: element.HKII.diemToan
            }

            transcript.push(obj)
        });
    }
    if (data.mon == "Văn") {
        list.forEach(element => {
            let obj = {
                GVCN: element.GVCN,
                idHocSinh: element.idHocSinh,
                tenHocSinh: element.tenHocSinh,
                tenGV: element.tenGV,
                soHieu: element.soHieu,
                HKI: element.HKI.diemVan,
                HKII: element.HKII.diemVan
            }

            transcript.push(obj)
        });
    }
    if (data.mon == "Sinh") {
        list.forEach(element => {
            let obj = {
                GVCN: element.GVCN,
                idHocSinh: element.idHocSinh,
                tenHocSinh: element.tenHocSinh,
                tenGV: element.tenGV,
                soHieu: element.soHieu,
                HKI: element.HKI.diemSinh,
                HKII: element.HKII.diemSinh
            }

            transcript.push(obj)
        });
    }
    if (data.mon == "Sử") {
        list.forEach(element => {
            let obj = {
                GVCN: element.GVCN,
                idHocSinh: element.idHocSinh,
                tenHocSinh: element.tenHocSinh,
                tenGV: element.tenGV,
                soHieu: element.soHieu,
                HKI: element.HKI.diemSu,
                HKII: element.HKII.diemSu
            }

            transcript.push(obj)
        });
    }
    if (data.mon == "Địa") {
        list.forEach(element => {
            let obj = {
                GVCN: element.GVCN,
                idHocSinh: element.idHocSinh,
                tenHocSinh: element.tenHocSinh,
                tenGV: element.tenGV,
                soHieu: element.soHieu,
                HKI: element.HKI.diemDia,
                HKII: element.HKII.diemDia
            }

            transcript.push(obj)
        });
    }
    if (data.mon == "Lý") {
        list.forEach(element => {
            let obj = {
                GVCN: element.GVCN,
                idHocSinh: element.idHocSinh,
                tenHocSinh: element.tenHocSinh,
                tenGV: element.tenGV,
                soHieu: element.soHieu,
                HKI: element.HKI.diemLy,
                HKII: element.HKII.diemLy
            }

            transcript.push(obj)
        });
    }
    if (data.mon == "Hóa") {
        list.forEach(element => {
            let obj = {
                GVCN: element.GVCN,
                idHocSinh: element.idHocSinh,
                tenHocSinh: element.tenHocSinh,
                tenGV: element.tenGV,
                soHieu: element.soHieu,
                HKI: element.HKI.diemHoa,
                HKII: element.HKII.diemHoa
            }

            transcript.push(obj)
        });
    }
    if (data.mon == "GDCN") {
        list.forEach(element => {
            let obj = {
                GVCN: element.GVCN,
                idHocSinh: element.idHocSinh,
                tenHocSinh: element.tenHocSinh,
                tenGV: element.tenGV,
                soHieu: element.soHieu,
                HKI: element.HKI.diemGDCD,
                HKII: element.HKII.diemGDCD
            }

            transcript.push(obj)
        });
    }
    if (data.mon == "Công Nghệ") {
        list.forEach(element => {
            let obj = {
                GVCN: element.GVCN,
                idHocSinh: element.idHocSinh,
                tenHocSinh: element.tenHocSinh,
                tenGV: element.tenGV,
                soHieu: element.soHieu,
                HKI: element.HKI.diemCongNghe,
                HKII: element.HKII.diemCongNghe
            }

            transcript.push(obj)
        });
    }
    if (data.mon == "Thể Dục") {
        list.forEach(element => {
            let obj = {
                GVCN: element.GVCN,
                idHocSinh: element.idHocSinh,
                tenHocSinh: element.tenHocSinh,
                tenGV: element.tenGV,
                soHieu: element.soHieu,
                HKI: element.HKI.diemTheDuc,
                HKII: element.HKII.diemTheDuc
            }

            transcript.push(obj)
        });
    }
    if (data.mon == "Tin") {
        list.forEach(element => {
            let obj = {
                GVCN: element.GVCN,
                idHocSinh: element.idHocSinh,
                tenHocSinh: element.tenHocSinh,
                tenGV: element.tenGV,
                soHieu: element.soHieu,
                HKI: element.HKI.diemTin,
                HKII: element.HKII.diemTin
            }

            transcript.push(obj)
        });
    }
    if (data.mon == "Mỹ Thuật") {
        list.forEach(element => {
            let obj = {
                GVCN: element.GVCN,
                idHocSinh: element.idHocSinh,
                tenHocSinh: element.tenHocSinh,
                tenGV: element.tenGV,
                soHieu: element.soHieu,
                HKI: element.HKI.diemMyThuat,
                HKII: element.HKII.diemMyThuat
            }

            transcript.push(obj)
        });
    }

    return {
        transcript,
        status: 200
    }



}

const gettranscriptsub = async function (data) {

    let ts = await Transcript.findOne({ idHocSinh: data.id });
    if (data.mon == "Anh") {
        let transcript = {
            HKI: ts.HKI.diemAnh,
            HKII: ts.HKII.diemAnh,
            GVCN: ts.GVCN,
            tenGV: ts.tenGV,
            soHieu: ts.soHieu,
            idHocSinh: ts.idHocSinh,
            tenHocSinh: ts.tenHocSinh,

        }
        return {
            transcript,
            status: 200
        }
    }
    if (data.mon == "Văn") {
        let transcript = {
            HKI: ts.HKI.diemVan,
            HKII: ts.HKII.diemVan,
            GVCN: ts.GVCN,
            tenGV: ts.tenGV,
            soHieu: ts.soHieu,
            idHocSinh: ts.idHocSinh,
            tenHocSinh: ts.tenHocSinh,

        }
        return {
            transcript,
            status: 200
        }
    }
    if (data.mon == "Toán") {
        let transcript = {
            HKI: ts.HKI.diemToan,
            HKII: ts.HKII.diemToan,
            GVCN: ts.GVCN,
            tenGV: ts.tenGV,
            soHieu: ts.soHieu,
            idHocSinh: ts.idHocSinh,
            tenHocSinh: ts.tenHocSinh,

        }
        return {
            transcript,
            status: 200
        }
    }
    if (data.mon == "Lý") {
        let transcript = {
            HKI: ts.HKI.diemLy,
            HKII: ts.HKII.diemLy,
            GVCN: ts.GVCN,
            tenGV: ts.tenGV,
            soHieu: ts.soHieu,
            idHocSinh: ts.idHocSinh,
            tenHocSinh: ts.tenHocSinh,

        }
        return {
            transcript,
            status: 200
        }
    }
    if (data.mon == "Hóa") {
        let transcript = {
            HKI: ts.HKI.diemHoa,
            HKII: ts.HKII.diemHoa,
            GVCN: ts.GVCN,
            tenGV: ts.tenGV,
            soHieu: ts.soHieu,
            idHocSinh: ts.idHocSinh,
            tenHocSinh: ts.tenHocSinh,

        }
        return {
            transcript,
            status: 200
        }
    }
    if (data.mon == "Sinh") {
        let transcript = {
            HKI: ts.HKI.diemSinh,
            HKII: ts.HKII.diemSinh,
            GVCN: ts.GVCN,
            tenGV: ts.tenGV,
            soHieu: ts.soHieu,
            idHocSinh: ts.idHocSinh,
            tenHocSinh: ts.tenHocSinh,

        }
        return {
            transcript,
            status: 200
        }
    }
    if (data.mon == "Sử") {
        let transcript = {
            HKI: ts.HKI.diemSu,
            HKII: ts.HKII.diemSu,
            GVCN: ts.GVCN,
            tenGV: ts.tenGV,
            soHieu: ts.soHieu,
            idHocSinh: ts.idHocSinh,
            tenHocSinh: ts.tenHocSinh,

        }
        return {
            transcript,
            status: 200
        }
    }
    if (data.mon == "Địa") {
        let transcript = {
            HKI: ts.HKI.diemDia,
            HKII: ts.HKII.diemDia,
            GVCN: ts.GVCN,
            tenGV: ts.tenGV,
            soHieu: ts.soHieu,
            idHocSinh: ts.idHocSinh,
            tenHocSinh: ts.tenHocSinh,

        }
        return {
            transcript,
            status: 200
        }
    }
    if (data.mon == "Công Nghệ") {
        let transcript = {
            HKI: ts.HKI.diemCongNghe,
            HKII: ts.HKII.diemCongNghe,
            GVCN: ts.GVCN,
            tenGV: ts.tenGV,
            soHieu: ts.soHieu,
            idHocSinh: ts.idHocSinh,
            tenHocSinh: ts.tenHocSinh,

        }
        return {
            transcript,
            status: 200
        }
    }
    if (data.mon == "Tin") {
        let transcript = {
            HKI: ts.HKI.diemTin,
            HKII: ts.HKII.diemTin,
            GVCN: ts.GVCN,
            tenGV: ts.tenGV,
            soHieu: ts.soHieu,
            idHocSinh: ts.idHocSinh,
            tenHocSinh: ts.tenHocSinh,

        }
        return {
            transcript,
            status: 200
        }
    }
    if (data.mon == "Thể Dục") {
        let transcript = {
            HKI: ts.HKI.diemTheDuc,
            HKII: ts.HKII.diemTheDuc,
            GVCN: ts.GVCN,
            tenGV: ts.tenGV,
            soHieu: ts.soHieu,
            idHocSinh: ts.idHocSinh,
            tenHocSinh: ts.tenHocSinh,

        }
        return {
            transcript,
            status: 200
        }
    }
    if (data.mon == "Mỹ Thuật") {
        let transcript = {
            HKI: ts.HKI.diemMyThuat,
            HKII: ts.HKII.diemMyThuat,
            GVCN: ts.GVCN,
            tenGV: ts.tenGV,
            soHieu: ts.soHieu,
            idHocSinh: ts.idHocSinh,
            tenHocSinh: ts.tenHocSinh,

        }
        return {
            transcript,
            status: 200
        }
    }
    if (data.mon == "GDCD") {
        let transcript = {
            HKI: ts.HKI.diemGDCD,
            HKII: ts.HKII.diemGDCD,
            GVCN: ts.GVCN,
            tenGV: ts.tenGV,
            soHieu: ts.soHieu,
            idHocSinh: ts.idHocSinh,
            tenHocSinh: ts.tenHocSinh,

        }
        return {
            transcript,
            status: 200
        }
    }






}




const inserttranscript = async function (data) {
    let transcript = await Transcript.findOne({ idHocSinh: data.idHocSinh })
    if (transcript) {
        let sum = 0


        let list = []
        if (data.bangDiem.diemmieng1 && data.bangDiem.diemmieng1 != '') {
            list.push(data.bangDiem.diemmieng1)
            sum + data.bangDiem.diemmieng1
        }
        if (data.bangDiem.diemmieng2 && data.bangDiem.diemmieng2 != '') {
            list.push(data.bangDiem.diemmieng2)
            sum + data.bangDiem.diemmieng2
        }
        if (data.bangDiem.diemmieng3 && data.bangDiem.diemmieng3 != '') {
            list.push(data.bangDiem.diemmieng3)
            sum + data.bangDiem.diemmieng3
        }
        let list1 = []
        if (data.bangDiem.diem15p1 && data.bangDiem.diem15p1 != '') {
            list1.push(data.bangDiem.diem15p1)
        }
        if (data.bangDiem.diem15p2 && data.bangDiem.diem15p2 != '') {
            list1.push(data.bangDiem.diem15p2)
        }
        if (data.bangDiem.diem15p3 && data.bangDiem.dien15p3 != '') {
            list1.push(data.bangDiem.diem15p3)
        }
        let list2 = []
        if (data.bangDiem.diem1tiet1 && data.bangDiem.diem1tiet1 != '') {
            list2.push(data.bangDiem.diem1tiet1)
        }
        if (data.bangDiem.diem1tiet2 && data.bangDiem.diem1tiet2 != '') {
            list2.push(data.bangDiem.diem1tiet2)
        }
        if (data.bangDiem.diem1tiet3 && data.bangDiem.diem1tiet3 != '') {
            list2.push(data.bangDiem.diem1tiet3)
        }


        let list3 = []
        if (data.bangDiem.diemmieng4 && data.bangDiem.diemmieng4 != '') {
            list3.push(data.bangDiem.diemmieng4)
        }
        if (data.bangDiem.diemmieng5 && data.bangDiem.diemmieng5 != '') {
            list3.push(data.bangDiem.diemmieng5)
        }
        if (data.bangDiem.diemmieng6 && data.bangDiem.diemmieng6 != '') {
            list3.push(data.bangDiem.diemmieng6)
        }
        let list4 = []
        if (data.bangDiem.diem15p4 && data.bangDiem.diem15p4 != '') {
            list4.push(data.bangDiem.diem15p4)
        }
        if (data.bangDiem.diem15p4 && data.bangDiem.diem15p4 != '') {
            list4.push(data.bangDiem.diem15p4)
        }
        if (data.bangDiem.diem15p4 && data.bangDiem.dien15p4 != '') {
            list4.push(data.bangDiem.diem15p4)
        }
        let list5 = []
        if (data.bangDiem.diem1tiet4 && data.bangDiem.diem1tiet4 != '') {
            list5.push(data.bangDiem.diem1tiet4)
        }
        if (data.bangDiem.diem1tiet5 && data.bangDiem.diem1tiet5 != '') {
            list5.push(data.bangDiem.diem1tiet2)
        }
        if (data.bangDiem.diem1tiet6 && data.bangDiem.diem1tiet6 != '') {
            list5.push(data.bangDiem.diem1tiet6)
        }
        // let sumM=sum/list.length
        // let sum15p=
        if (data.mon == "Anh") {
            transcript.HKI.diemAnh.diemMieng = list
            transcript.HKI.diemAnh.diem15p = list1
            transcript.HKI.diemAnh.diem1tiet = list2
            transcript.HKI.diemAnh.diemGiuaKy = data.bangDiem.GKI
            transcript.HKII.diemAnh.diemGiuaKy = data.bangDiem.GKII
            transcript.HKII.diemAnh.diemMieng = list3
            transcript.HKII.diemAnh.diem15p = list4
            transcript.HKII.diemAnh.diem1tiet = list5
            transcript.HKI.diemAnh.diemCuoiKy = data.bangDiem.CKI
            transcript.HKII.diemAnh.diemCuoiKy = data.bangDiem.CKII
            transcript.HKII.diemAnh.diemTB = data.bangDiem.canam
            transcript.idHocSinh = data.idHocSinh
            // transcript.diemAnh.HKI.diemTB = 
            transcript.soHieu = data.soHieu
            await transcript.save()
        } if (data.mon == "Toán") {
            transcript.HKI.diemToan.diemMieng = list
            transcript.HKI.diemToan.diem15p = list1
            transcript.HKI.diemToan.diem1tiet = list2
            transcript.HKI.diemToan.diemGiuaKy = data.bangDiem.GKI
            transcript.HKII.diemToan.diemGiuaKy = data.bangDiem.GKII
            transcript.HKII.diemToan.diemMieng = list3
            transcript.HKII.diemToan.diem15p = list4
            transcript.HKII.diemToan.diem1tiet = list5
            transcript.HKI.diemToan.diemCuoiKy = data.bangDiem.CKI
            transcript.HKII.diemToan.diemCuoiKy = data.bangDiem.CKII
            transcript.HKII.diemToan.diemTB = data.bangDiem.canam
            transcript.idHocSinh = data.idHocSinh
            // transcript.diemAnh.HKI.diemTB = 
            transcript.soHieu = data.soHieu
            await transcript.save()
        } if (data.mon == "Văn") {
            transcript.HKI.diemVan.diemMieng = list
            transcript.HKI.diemVan.diem15p = list1
            transcript.HKI.diemVan.diem1tiet = list2
            transcript.HKI.diemVan.diemGiuaKy = data.bangDiem.GKI
            transcript.HKII.diemVan.diemGiuaKy = data.bangDiem.GKII
            transcript.HKII.diemVan.diemMieng = list3
            transcript.HKII.diemVan.diem15p = list4
            transcript.HKII.diemVan.diem1tiet = list5
            transcript.HKI.diemVan.diemCuoiKy = data.bangDiem.CKI
            transcript.HKII.diemVan.diemTB = data.bangDiem.canam
            transcript.idHocSinh = data.idHocSinh
            // transcript.diemAnh.HKI.diemTB = 
            transcript.soHieu = data.soHieu
            await transcript.save()
        }
        if (data.mon == "Sinh") {
            transcript.HKI.diemSinh.diemMieng = list
            transcript.HKI.diemSinh.diem15p = list1
            transcript.HKI.diemSinh.diem1tiet = list2
            transcript.HKI.diemSinh.diemGiuaKy = data.bangDiem.GKI
            transcript.HKII.diemSinh.diemGiuaKy = data.bangDiem.GKII
            transcript.HKII.diemSinh.diemMieng = list3
            transcript.HKII.diemSinh.diem15p = list4
            transcript.HKII.diemSinh.diem1tiet = list5
            transcript.HKI.diemSinh.diemCuoiKy = data.bangDiem.CKI
            transcript.HKII.diemSinh.diemCuoiKy = data.bangDiem.CKII
            transcript.HKII.diemSinh.diemTB = data.bangDiem.canam
            transcript.idHocSinh = data.idHocSinh
            // transcript.diemAnh.HKI.diemTB = 
            transcript.soHieu = data.soHieu
            await transcript.save()
        }
        if (data.mon == "Sử") {
            transcript.HKI.diemSu.diemMieng = list
            transcript.HKI.diemSu.diem15p = list1
            transcript.HKI.diemSu.diem1tiet = list2
            transcript.HKI.diemSu.diemGiuaKy = data.bangDiem.GKI
            transcript.HKII.diemSu.diemGiuaKy = data.bangDiem.GKII
            transcript.HKII.diemSu.diemMieng = list3
            transcript.HKII.diemSu.diem15p = list4
            transcript.HKII.diemSu.diem1tiet = list5
            transcript.HKI.diemSu.diemCuoiKy = data.bangDiem.CKI
            transcript.HKII.diemSu.diemCuoiKy = data.bangDiem.CKII
            transcript.HKII.diemSu.diemTB = data.bangDiem.canam
            transcript.idHocSinh = data.idHocSinh
            // transcript.diemAnh.HKI.diemTB = 
            transcript.soHieu = data.soHieu
            await transcript.save()
        }
        if (data.mon == "Địa") {
            transcript.HKI.diemDia.diemMieng = list
            transcript.HKI.diemDia.diem15p = list1
            transcript.HKI.diemDia.diem1tiet = list2
            transcript.HKI.diemDia.diemGiuaKy = data.bangDiem.GKI
            transcript.HKII.diemDia.diemGiuaKy = data.bangDiem.GKII
            transcript.HKII.diemDia.diemMieng = list3
            transcript.HKII.diemDia.diem15p = list4
            transcript.HKII.diemDia.diem1tiet = list5
            transcript.HKI.diemDia.diemCuoiKy = data.bangDiem.CKI
            transcript.HKII.diemDia.diemCuoiKy = data.bangDiem.CKII
            transcript.HKII.diemDia.diemTB = data.bangDiem.canam
            transcript.idHocSinh = data.idHocSinh
            // transcript.diemAnh.HKI.diemTB = 
            transcript.soHieu = data.soHieu
            await transcript.save()
        }
        if (data.mon == "Lý") {
            transcript.HKI.diemLy.diemMieng = list
            transcript.HKI.diemLy.diem15p = list1
            transcript.HKI.diemLy.diem1tiet = list2
            transcript.HKI.diemLy.diemGiuaKy = data.bangDiem.GKI
            transcript.HKII.diemLy.diemGiuaKy = data.bangDiem.GKII
            transcript.HKII.diemLy.diemMieng = list3
            transcript.HKII.diemLy.diem15p = list4
            transcript.HKII.diemLy.diem1tiet = list5
            transcript.HKI.diemLy.diemCuoiKy = data.bangDiem.CKI
            transcript.HKII.diemLy.diemCuoiKy = data.bangDiem.CKII
            transcript.HKII.diemLy.diemTB = data.bangDiem.canam
            transcript.idHocSinh = data.idHocSinh
            // transcript.diemAnh.HKI.diemTB = 
            transcript.soHieu = data.soHieu
            await transcript.save()
        }
        if (data.mon == "Hóa") {
            transcript.HKI.diemHoa.diemMieng = list
            transcript.HKI.diemHoa.diem15p = list1
            transcript.HKI.diemHoa.diem1tiet = list2
            transcript.HKI.diemHoa.diemGiuaKy = data.bangDiem.GKI
            transcript.HKII.diemHoa.diemGiuaKy = data.bangDiem.GKII
            transcript.HKII.diemHoa.diemMieng = list3
            transcript.HKII.diemHoa.diem15p = list4
            transcript.HKII.diemHoa.diem1tiet = list5
            transcript.HKI.diemHoa.diemCuoiKy = data.bangDiem.CKI
            transcript.HKII.diemHoa.diemCuoiKy = data.bangDiem.CKII
            transcript.HKII.diemHoa.diemTB = data.bangDiem.canam
            transcript.idHocSinh = data.idHocSinh
            // transcript.diemAnh.HKI.diemTB = 
            transcript.soHieu = data.soHieu
            await transcript.save()
        }
        if (data.mon == "Công Nghệ") {
            transcript.HKI.diemCongNghe.diemMieng = list
            transcript.HKI.diemCongNghe.diem15p = list1
            transcript.HKI.diemCongNghe.diem1tiet = list2
            transcript.HKI.diemCongNghe.diemGiuaKy = data.bangDiem.GKI
            transcript.HKII.diemCongNghe.diemGiuaKy = data.bangDiem.GKII
            transcript.HKII.diemCongNghe.diemMieng = list3
            transcript.HKII.diemCongNghe.diem15p = list4
            transcript.HKII.diemCongNghe.diem1tiet = list5
            transcript.HKI.diemCongNghe.diemCuoiKy = data.bangDiem.CKI
            transcript.HKII.diemCongNghe.diemCuoiKy = data.bangDiem.CKII
            transcript.HKII.diemCongNghe.diemTB = data.bangDiem.canam
            transcript.idHocSinh = data.idHocSinh
            // transcript.diemAnh.HKI.diemTB = 
            transcript.soHieu = data.soHieu
            await transcript.save()
        }
        if (data.mon == "Tin") {
            transcript.HKI.diemTin.diemMieng = list
            transcript.HKI.diemTin.diem15p = list1
            transcript.HKI.diemTin.diem1tiet = list2
            transcript.HKI.diemTin.diemGiuaKy = data.bangDiem.GKI
            transcript.HKII.diemTin.diemGiuaKy = data.bangDiem.GKII
            transcript.HKII.diemTin.diemMieng = list3
            transcript.HKII.diemTin.diem15p = list4
            transcript.HKII.diemTin.diem1tiet = list5
            transcript.HKI.diemTin.diemCuoiKy = data.bangDiem.CKI
            transcript.HKII.diemTin.diemCuoiKy = data.bangDiem.CKII
            transcript.HKII.diemTin.diemTB = data.bangDiem.canam
            transcript.idHocSinh = data.idHocSinh
            // transcript.diemAnh.HKI.diemTB = 
            transcript.soHieu = data.soHieu
            await transcript.save()
        }
        if (data.mon == "Mỹ Thuật") {
            transcript.HKI.diemMyThuat.diemMieng = list
            transcript.HKI.diemMyThuat.diem15p = list1
            transcript.HKI.diemMyThuat.diem1tiet = list2
            transcript.HKI.diemMyThuat.diemGiuaKy = data.bangDiem.GKI
            transcript.HKII.diemMyThuat.diemGiuaKy = data.bangDiem.GKII
            transcript.HKII.diemMyThuat.diemMieng = list3
            transcript.HKII.diemMyThuat.diem15p = list4
            transcript.HKII.diemMyThuat.diem1tiet = list5
            transcript.HKI.diemMyThuat.diemCuoiKy = data.bangDiem.CKI
            transcript.HKII.diemMyThuat.diemCuoiKy = data.bangDiem.CKII
            transcript.HKII.diemMyThuat.diemTB = data.bangDiem.canam
            transcript.idHocSinh = data.idHocSinh
            // transcript.diemAnh.HKI.diemTB = 
            transcript.soHieu = data.soHieu
            await transcript.save()
        }
        if (data.mon == "GDCD") {
            transcript.HKI.diemGDCD.diemMieng = list
            transcript.HKI.diemGDCD.diem15p = list1
            transcript.HKI.diemGDCD.diem1tiet = list2
            transcript.HKI.diemGDCD.diemGiuaKy = data.bangDiem.GKI
            transcript.HKII.diemGDCD.diemGiuaKy = data.bangDiem.GKII
            transcript.HKII.diemGDCD.diemMieng = list3
            transcript.HKII.diemGDCD.diem15p = list4
            transcript.HKII.diemGDCD.diem1tiet = list5
            transcript.HKI.diemGDCD.diemCuoiKy = data.bangDiem.CKI
            transcript.HKII.diemGDCD.diemCuoiKy = data.bangDiem.CKII
            transcript.HKII.diemGDCD.diemTB = data.bangDiem.canam
            transcript.idHocSinh = data.idHocSinh
            // transcript.diemAnh.HKI.diemTB = 
            transcript.soHieu = data.soHieu
            await transcript.save()
        }

        if (data.mon == "Thể Dục") {
            transcript.HKI.diemTheDuc.diemMieng = list
            transcript.HKI.diemTheDuc.diem15p = list1
            transcript.HKI.diemTheDuc.diem1tiet = list2
            transcript.HKI.diemTheDuc.diemGiuaKy = data.bangDiem.GKI
            transcript.HKII.diemTheDuc.diemGiuaKy = data.bangDiem.GKII
            transcript.HKII.diemTheDuc.diemMieng = list3
            transcript.HKII.diemTheDuc.diem15p = list4
            transcript.HKII.diemTheDuc.diem1tiet = list5
            transcript.HKI.diemTheDuc.diemCuoiKy = data.bangDiem.CKI
            transcript.HKII.diemTheDuc.diemCuoiKy = data.bangDiem.CKII
            transcript.HKII.diemTheDuc.diemTB = data.bangDiem.canam
            transcript.idHocSinh = data.idHocSinh
            // transcript.diemAnh.HKI.diemTB = 
            transcript.soHieu = data.soHieu
            await transcript.save()
        }


        return {
            transcript,
            status: 200
        }
    }
    else {
        return {

            status: 500,
            message: "Không tìm thấy bản điểm của học sinh"
        }
    }
    // let transcript = new Transcript()


}
const importexcel = async function (data) {

    for (let a = 0; a <= data.diem.length; a++) {

        let transcript = await Transcript.findOne({ idHocSinh: data.diem[a].idHocSinh });
        if (transcript) {
            if (data.mon == "Anh") {
                if (data.diem[a].diem15pHKI) {
                    let tam = ''
                    let diem=data.diem[a].diem15pHKI+","
                    for (let i = 0; i <= diem.length; i++) {
                        if (diem[i] != ",") {
                            tam = tam + diem[i]
                        }
                        if (diem[i] == ",") {
                            transcript.HKI.diemAnh.diem15p.push(tam)
                            tam='';
                        }
                    }
                }
                if (data.diem[a].diem15pHKII) {
                    let tam = ''
                    let diem=data.diem[a].diem15pHKII+","
                    for (let i = 0; i <=diem.length; i++) {
                        if (diem[i] != ",") {
                            tam = tam +diem[i]
                        }
                        if (diem[i] == ",") {
                            transcript.HKII.diemAnh.diem15p.push(tam);
                            tam='';
                        }
                    }
                }
                if (data.diem[a].diemMiengHKI) {
                    let tam = ''
                    let diem=data.diem[a].diemMiengHKI+","
                    for (let i = 0; i <= diem.length; i++) {
                        if (diem[i] != ",") {
                            tam = tam + diem[i]
                        }
                        if (diem[i] == ",") {
                            transcript.HKI.diemAnh.diemMieng.push(tam);
                            tam='';
                        }
                    }
                }
                if (data.diem[a].diemMiengHKII) {
                    let tam = ''
                    let diem=data.diem[a].diemMiengHKII+","
                    for (let i = 0; i <= diem.length; i++) {
                        if (diem[i] != ",") {
                            tam = tam + diem[i]
                        }
                        if (diem[i] == ",") {
                            transcript.HKII.diemAnh.diemMieng.push(tam);
                            tam='';
                        }
                    }
                }
                if (data.diem[a].diem1tietHKI) {
                    let tam = ''
                    let diem=data.diem[a].diem1tietHKI+","
                    for (let i = 0; i <= diem.length; i++) {
                        if (diem[i] != ",") {
                            tam = tam + diem[i]
                        }
                        if (diem[i] == ",") {
                            transcript.HKI.diemAnh.diem1tiet.push(tam);
                            tam='';
                        }
                    }
                }
                if (data.diem[a].diem1tietHKII) {
                    let tam = ''
                    let diem=data.diem[a].diem1tietHKII+","
                    for (let i = 0; i <= diem.length; i++) {
                        if (diem[i] != ",") {
                            tam = tam +diem[i]
                        }
                        if (diem[i] == ",") {
                            transcript.HKII.diemAnh.diem1tiet.push(tam);
                            tam='';
                        }
                    }
                }
                transcript.HKI.diemAnh.diemGiuaKy = data.diem[a].diemgiuaKyHKI
                transcript.HKII.diemAnh.diemGiuaKy = data.diem[a].diemgiuaKyHKII
    
                transcript.HKI.diemAnh.diemCuoiKy = data.diem[a].diemcuoiKyHKI
                transcript.HKII.diemAnh.diemCuoiKy = data.diem[a].diemcuoiKyHKII
    
                transcript.HKII.diemAnh.diemTB = data.diem[a].tbm
            }
            if (data.mon == "Toán") {
                if (data.diem[a].diem15pHKI) {
                    let tam = ''
                    let diem=data.diem[a].diem15pHKI+","
                    for (let i = 0; i <= diem.length; i++) {
                        if (diem[i] != ",") {
                            tam = tam + diem[i]
                        }
                        if (diem[i] == ",") {
                            transcript.HKI.diemToan.diem15p.push(tam)
                            tam='';
                        }
                    }
                }
                if (data.diem[a].diem15pHKII) {
                    let tam = ''
                    let diem=data.diem[a].diem15pHKII+","
                    for (let i = 0; i <=diem.length; i++) {
                        if (diem[i] != ",") {
                            tam = tam +diem[i]
                        }
                        if (diem[i] == ",") {
                            transcript.HKII.diemToan.diem15p.push(tam);
                            tam='';
                        }
                    }
                }
                if (data.diem[a].diemMiengHKI) {
                    let tam = ''
                    let diem=data.diem[a].diemMiengHKI+","
                    for (let i = 0; i <= diem.length; i++) {
                        if (diem[i] != ",") {
                            tam = tam + diem[i]
                        }
                        if (diem[i] == ",") {
                            transcript.HKI.diemToan.diemMieng.push(tam);
                            tam='';
                        }
                    }
                }
                if (data.diem[a].diemMiengHKII) {
                    let tam = ''
                    let diem=data.diem[a].diemMiengHKII+","
                    for (let i = 0; i <= diem.length; i++) {
                        if (diem[i] != ",") {
                            tam = tam + diem[i]
                        }
                        if (diem[i] == ",") {
                            transcript.HKII.diemToan.diemMieng.push(tam);
                            tam='';
                        }
                    }
                }
                if (data.diem[a].diem1tietHKI) {
                    let tam = ''
                    let diem=data.diem[a].diem1tietHKI+","
                    for (let i = 0; i <= diem.length; i++) {
                        if (diem[i] != ",") {
                            tam = tam + diem[i]
                        }
                        if (diem[i] == ",") {
                            transcript.HKI.diemToan.diem1tiet.push(tam);
                            tam='';
                        }
                    }
                }
                if (data.diem[a].diem1tietHKII) {
                    let tam = ''
                    let diem=data.diem[a].diem1tietHKII+","
                    for (let i = 0; i <= diem.length; i++) {
                        if (diem[i] != ",") {
                            tam = tam +diem[i]
                        }
                        if (diem[i] == ",") {
                            transcript.HKII.diemToan.diem1tiet.push(tam);
                            tam='';
                        }
                    }
                }
                transcript.HKI.diemToan.diemGiuaKy = data.diem[a].diemgiuaKyHKI
                transcript.HKII.diemToan.diemGiuaKy = data.diem[a].diemgiuaKyHKII
    
                transcript.HKI.diemToan.diemCuoiKy = data.diem[a].diemcuoiKyHKI
                transcript.HKII.diemToan.diemCuoiKy = data.diem[a].diemcuoiKyHKII
    
                transcript.HKII.diemToan.diemTB = data.diem[a].tbm
            }


            if (data.mon == "Văn") {
                if (data.diem[a].diem15pHKI) {
                    let tam = ''
                    let diem=data.diem[a].diem15pHKI+","
                    for (let i = 0; i <= diem.length; i++) {
                        if (diem[i] != ",") {
                            tam = tam + diem[i]
                        }
                        if (diem[i] == ",") {
                            transcript.HKI.diemVan.diem15p.push(tam)
                            tam='';
                        }
                    }
                }
                if (data.diem[a].diem15pHKII) {
                    let tam = ''
                    let diem=data.diem[a].diem15pHKII+","
                    for (let i = 0; i <=diem.length; i++) {
                        if (diem[i] != ",") {
                            tam = tam +diem[i]
                        }
                        if (diem[i] == ",") {
                            transcript.HKII.diemVan.diem15p.push(tam);
                            tam='';
                        }
                    }
                }
                if (data.diem[a].diemMiengHKI) {
                    let tam = ''
                    let diem=data.diem[a].diemMiengHKI+","
                    for (let i = 0; i <= diem.length; i++) {
                        if (diem[i] != ",") {
                            tam = tam + diem[i]
                        }
                        if (diem[i] == ",") {
                            transcript.HKI.diemVan.diemMieng.push(tam);
                            tam='';
                        }
                    }
                }
                if (data.diem[a].diemMiengHKII) {
                    let tam = ''
                    let diem=data.diem[a].diemMiengHKII+","
                    for (let i = 0; i <= diem.length; i++) {
                        if (diem[i] != ",") {
                            tam = tam + diem[i]
                        }
                        if (diem[i] == ",") {
                            transcript.HKII.diemVan.diemMieng.push(tam);
                            tam='';
                        }
                    }
                }
                if (data.diem[a].diem1tietHKI) {
                    let tam = ''
                    let diem=data.diem[a].diem1tietHKI+","
                    for (let i = 0; i <= diem.length; i++) {
                        if (diem[i] != ",") {
                            tam = tam + diem[i]
                        }
                        if (diem[i] == ",") {
                            transcript.HKI.diemVan.diem1tiet.push(tam);
                            tam='';
                        }
                    }
                }
                if (data.diem[a].diem1tietHKII) {
                    let tam = ''
                    let diem=data.diem[a].diem1tietHKII+","
                    for (let i = 0; i <= diem.length; i++) {
                        if (diem[i] != ",") {
                            tam = tam +diem[i]
                        }
                        if (diem[i] == ",") {
                            transcript.HKII.diemVan.diem1tiet.push(tam);
                            tam='';
                        }
                    }
                }
                transcript.HKI.diemVan.diemGiuaKy = data.diem[a].diemgiuaKyHKI
                transcript.HKII.diemVan.diemGiuaKy = data.diem[a].diemgiuaKyHKII
    
                transcript.HKI.diemVan.diemCuoiKy = data.diem[a].diemcuoiKyHKI
                transcript.HKII.diemVan.diemCuoiKy = data.diem[a].diemcuoiKyHKII
    
                transcript.HKII.diemVan.diemTB = data.diem[a].tbm
            }
           
    
        }
        await transcript.save()
       
    }
   
    return {
        message: "Thành Công",
        status: 200
    }

}

    

    






module.exports = {
    gettranscript: gettranscript,
    getalltranscriptbysub: getalltranscriptbysub,
    getalltranscript: getalltranscript,
    gettranscriptsub: gettranscriptsub,
    inserttranscript: inserttranscript,
    importexcel: importexcel

}