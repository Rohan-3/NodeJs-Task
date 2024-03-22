const express = require("express");
const path = require("path");
const multer = require("multer");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
      filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1000);
      cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1 * 1024 * 1024 },
  fileFilter: function (req, file, cb) {
    const allowedExtensions = [".jpeg", ".jpg", ".png", ".pdf"];

    const ext = path.extname(file.originalname).toLowerCase();
    console.log("lksndfklnsdf", ext);
    if (allowedExtensions.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error("Unsupported file."));
    }
  },
});

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/upload", upload.single("file"), function (req, res) {
  console.log(req.file);
  if (req.filevalidateerror) {
    return res.status(400).send(req.filevalidateerror);
  } else if (!req.file) {
    return res.status(400).send("No file uploaded");
  }

  res.send("Success, Image uploaded!");
});

app.use(function (err, req, res) {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

app.listen(3000, function (error) {
  if (error) throw error;
  console.log("Server created Successfully on PORT 3000");
});