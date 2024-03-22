const express = require("express");
const app = express();
const EmpRputer = require("./routes/employee-routes")
const DeptRouter = require("./routes/department-routes")
const ProjectRouter = require("./routes/project-route")




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", EmpRputer)
app.use("/api", DeptRouter)
app.use("/api", ProjectRouter)

app.listen(3000, function (error) {
  if (error) throw error;
  console.log("Server created Successfully on PORT 3000");
});