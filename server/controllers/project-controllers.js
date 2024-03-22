const Projects = require("../models/project-schema")
const project = async (req,res) =>{

    try {
        const { projectId } = req.body;
    const isProject = await Projects.findOne({ projectId });
          if (!isProject) {
            return res.status(401).json({ msg: "This Project doesnt exisit" });
          }
          res.send(isProject)
    } catch (error) {
        console.log(error);
    }   
  }

//   const addProject = async(req,res) =>{
//     try {
//     const {id, projectId,name,createdOn} = req.body
//     const isEmployee = await Projects.findOne({projectId})
//     if (!isEmployee) {

//         await Projects.create({
//             id, 
//             projectId,
//             name,
//             createdOn,
        
//         })
//         res.send(" Preoject added")
//     }
//     } catch (error) {
//         console.log(error);
//     }
//   }
  

const addProject = async (req, res) => {
    try {
      const { projectId, name, createdOn } = req.body; 
  
      const lastProject = await Projects.findOne().sort({ createdAt: -1 }); 
  
      let id;
      if (!lastProject) {
        id = "PRJ001"; 
      } else {
        const existingId = parseInt(lastProject.projectId.slice(3), 10); 
        id = existingId + 1;
      }
  
      const formattedProjectId = "PRJ" + id.toString().padStart(3, "0"); 
  
      await Projects.create({
        projectId: formattedProjectId,
        name,
        createdOn,
      });
  
      res.send("Project added");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error adding project"); // Handle errors gracefully
    }
  };

  const removeProject = async (req, res) => {
    try {
      const { projectId } = req.body;
  
  
      const projectToDelete = await Projects.findOneAndDelete({ projectId });
  
  
      if (!projectToDelete) {
        return res.status(404).json({ msg: "Project not found" });
      }
  
      res.send("Project deleted successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error deleting Project");
    }
  };

  module.exports = {project,addProject,removeProject}