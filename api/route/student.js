var express = require('express');
var session = require('express-session')
var router = express.Router();
var studentController = require('../controller/studentController');
var UserController= require('../controller/userController')
// var authController = require('../controller/authController');
var jwt = require('jsonwebtoken');
var fileUpload = require('express-fileupload');
const path = require('path');
// var passport = require('../controller/passport').passport
// var multipart = require('connect-multiparty')
// var multipartMiddleware = multipart()
router.get('/getdayoff/:id', async function (req, res) {
    try {
        // const token = req.headers['x-access-token'];
        // var phoneObj = jwt.decode(token);
        // var user = await UserController.getUserByPhone(phoneObj.data);
        var dayoffObj = await studentController.getdayoff(req.params.id) ;
        var dayoff=dayoffObj.dayoff
        if(dayoff){
            res.send({
                status:200,
                dayoff
                
    
                
            })
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send({ errorMessage: error.message })
    }
});
router.get('/:id', async function (req, res) {
    try {
        var students = await studentController.layChiTietStudent(req.params.id);
        var student = students.student
        res.send({
            student,
            status:200

        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ errorMessage: error.message })
    }

})

router.post('/getall', async function (req, res) {
    try {
        var list = await studentController.laystudent(req.body);
        res.send({
            list,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ errorMessage: error.message })
    }
})
router.post('/create', fileUpload(), async function (req, res) {

    try {
       
        var student
        if (!req.files) {
            student = await studentController.createStudent(req.body);
        }
        else {
            var file = req.files.hinh;
            req.body.hinh = file.name;
            var url = path.join(path.join(__dirname, '../../'), 'public/images/');
            file.mv(url + req.files.hinh.name, async function () {
                student = await studentController.createStudent(req.body);

            })

        }
        res.send({
            student,
            status:200

        })

    } catch (error) {
        console.log(error)
        res.status(500).send({ errorMessage: error.message })
    }
});
router.post('/insertmark', async function (req, res) {
    try {
        var list = await studentController.nhapDiem(req.body);
        res.send({
            list,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ errorMessage: error.message })
    }
});






router.put('/update', fileUpload(), async function (req, res) {

    try {
        
        var student
        if (!req.files) {
            student = await studentController.editProfile(req.body);
        }
        else {
            var file = req.files.hinh;
            req.body.hinh = file.name;
            var url = path.join(path.join(__dirname, '../../'), 'public/images/');
            file.mv(url + req.files.hinh.name, async function () {
                student = await studentController.editProfile(req.body);

            })

        }
        res.send({
            student,
            status:200

        })

    } catch (error) {
        console.log(error)
        res.status(500).send({ errorMessage: error.message })
    }
});
router.delete('/:id', async function (req, res) {
    try {
       
        var student = await studentController.xoaStudent(req.params.id);
        res.send({
            status: 200,
            // id: req.params.id
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ errorMessage: error.message })
    }



});
//API  xin nghi
router.post('/dayoff', async function (req, res) {
    try {
        const token = req.headers['x-access-token'];
        var phoneObj = jwt.decode(token);
        var user = await UserController.getUserByPhone(phoneObj.data);
        var dayoff= await studentController.createdayoff(user,req.body) ;
        if(dayoff){
            res.send({
                status:200,
                dayoff,
                message:"Đã cập nhật đơn xin phép thành công"
    
                
            })
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send({ errorMessage: error.message })
    }
});
module.exports = router;
