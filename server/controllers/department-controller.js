const Department = require("../models/department-schema")
const department = async (req,res) =>{

    try {
        const { departmentId } = req.body;
    
    const isDepartment = await Department.findOne({ departmentId });
      
          if (!isDepartment) {
            return res.status(401).json({ msg: "No Department" });
          }
          res.send(isDepartment)
    } catch (error) {
        console.log(error);
    }
   
  }
  
  // const addDepartment = async(req,res) =>{
  //   try {
  //   const {id, departmentId,name,createdOn} = req.body

  //   const isDepartment = await Department.findOne({departmentId})



  //   if (!isDepartment) {

  //       await Department.create({
  //           id, 
  //           departmentId,
  //           name,
  //           createdOn,
        
  //       })
  //       res.send(" Department added")
  //   }
  //   } catch (error) {
  //       console.log(error);
  //   }
  // }
  


  const addDepartment = async (req, res) => {
    try {
      const { name, createdOn } = req.body; 
  
      const lastDepartment = await Department.findOne().sort({ createdAt: -1 });
  
      let deptId;
      if (!lastDepartment) {
        deptId = "DEP001"; 
      } else {
        const existingDeptId = parseInt(lastDepartment.departmentId.slice(3), 10);
        deptId = "DEP" + (existingDeptId + 1).toString().padStart(3, "0");
      }
  
      await Department.create({
        departmentId: deptId, 
        name,
        createdOn,
      });
  
      res.send("Department added");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error adding department");
    }
  };

  const removeDepartment = async (req,res) =>{
    try {
      const { departmentId } = req.body;
  
  
      const departmentToDelete = await Department.findOneAndDelete({ departmentId });
  
  
      if (!departmentToDelete) {
        return res.status(404).json({ msg: "Employee not found" });
      }
  
      res.send("Department deleted successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error deleting employee");
    }
  }

  module.exports = {department,addDepartment,removeDepartment}