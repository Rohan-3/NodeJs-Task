const express = require('express');
const employeeController = require("../controllers/employee-controller")
router = express.Router();
require("../db/conn")

router.get('/employee', employeeController.employee)
router.post('/addemployee', employeeController.addEmployee)
router.delete('/removeemployee', employeeController.removeEmployee)

module.exports = router