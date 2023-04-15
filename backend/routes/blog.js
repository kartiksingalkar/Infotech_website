const express = require("express")
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/', limits: { fieldSize: 25 * 1024 * 1024 } })
const { get_profile, new_post, get_post, get_single_post, update_post } = require("../controllers/blogController.js")

const router = express.Router()

router.get('/profile', get_profile)
router.post('/post', uploadMiddleware.single('file'), new_post)
router.get('/post', get_post)
router.get('/post/:id', get_single_post)
router.put('/post', uploadMiddleware.single('file'), update_post)

module.exports = router
