const express = require("express")
const { formData } = require("../controllers/formController.js")
const { newsLetterController } = require("../controllers/newsLetterController.js")
const { service_popup, verify_otp } = require("../controllers/service_popup.js")
const { hiringForm } = require("../controllers/hiringFormController")
const multer = require('multer');
const uploadMiddlewareFile = multer({
    dest: 'uploads/hiringForm',
    limits: { fieldSize: 5 * 1024 * 1024 },
})

const router = express.Router()

router.post('/form', formData)
router.post('/newsletter', newsLetterController)
router.post("/popup", service_popup)
router.post("/verify", verify_otp)
router.post("/hiringform", uploadMiddlewareFile.single('file'), hiringForm)
module.exports = router