const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

router.post('/submit', adminController.submitOrGetAttendance);
router.get('/report/:date',adminController.getReport);
router.get('/students',adminController.getStudents)

module.exports = router;