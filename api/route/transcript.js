var express = require('express');
var session = require('express-session')
var router = express.Router();
var studentController = require('../controller/studentController');
var strancriptController=require('../controller/transcriptController')

 

router.post('/excel', async function (req, res) {
    try {
        // var student = await studentController.layChiTietStudent(req.body.id);
     
        var transcript= await strancriptController.importexcel(req.body)
        res.send(
            {
                transcript,
            }
        )
        
    } catch (error) {
        console.log(error)
        res.status(500).send({ errorMessage: error.message })
    }
})


module.exports = router;