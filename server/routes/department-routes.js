const express = require('express');
const DepartmentController = require("../controllers/department-controller")
router = express.Router();
require("../db/conn")

router.get('/getdepartment', DepartmentController.department)
router.post('/adddepartment', DepartmentController.addDepartment)
router.post('/removedepartment', DepartmentController.removeDepartment)

module.exports = router