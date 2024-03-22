const Employee = require("../models/emplopyees-schema")

const employee = async (req,res) =>{
  try {
    const { employeeId } = req.body;
    
    const isEmplexisit = await Employee.find();
      
          if (!isEmplexisit) {
            return res.status(401).json({ msg: `Employee with ${employeeId} desnt exisits` });
          }

          res.send(isEmplexisit)

  } catch (error) {
    console.log(error);
  }
}

const addEmployee = async (req, res) => {
  try {
    console.log(req.body);
    const { fName, lName, departmentID, onBoardDate, age } = req.body;
    const lastEmployee = await Employee.findOne().sort({ createdAt: -1 });

    let id;
    if (!lastEmployee) {
      id = 1;
    } else {
      const existingId = parseInt(lastEmployee.employeeId.slice(3), 10);
      id = existingId + 1;
    }

    const employeeId = "EMP" + id.toString().padStart(3, "0");

    await Employee.create({
      employeeId,
      fName,
      lName,
      departmentID,
      onBoardDate,
      age,
    });

    res.send("Employee added");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding employee"); 
  }
};

const removeEmployee = async (req, res) => {
  try {
    const { employeeId } = req.body;
    const employeeToDelete = await Employee.findOneAndDelete({ employeeId });

    if (!employeeToDelete) {
      return res.status(404).json({ msg: "Employee not found" });
    }

    res.send("Employee deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting employee");
  }
};


module.exports = {employee,addEmployee,removeEmployee}