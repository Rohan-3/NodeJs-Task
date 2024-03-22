const express = require('express');
const ProjectController = require("../controllers/project-controllers")
router = express.Router();
require("../db/conn")

router.get('/project', ProjectController.project)
router.post('/addproject', ProjectController.addProject)
router.delete('/removeproject', ProjectController.removeProject)

module.exports = router