const express = require('express');
const router = express.Router();

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const { 
    championcv,
    careercounsel,
    recruitment,
    contact
} = require('../controllers/index');

router.get('/', function (req, res) {
    res.json({
        success: true,
        message: "Backend Working fine"
    });
});
router.post('/championcv', upload.single("file"), championcv);
router.post('/careercounsel', careercounsel);
router.post('/recruitment', recruitment);
router.post('/contact', contact);

module.exports = router;