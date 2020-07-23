const multer = require("multer");
const path = require("path");
const giraffeController = require("../controllers/giraffe");

const storage = multer.diskStorage({
  destination: "./uploads/" /* relative to root dir of project */,
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = (app) => {
  // Upload image
  app.post("/uploadImage", upload.single("file"), async (req, res) => {
    if (req.file) {
      res.send({ success: true });
    } else {
      res.sendStatus(500);
    }
  });

  // Giraffe API
  app.post("/api/giraffe", (req, res) => {
    giraffeController.create(req, res);
  });

  app.get("/api/giraffe", (req, res) => {
    // debugger;
    giraffeController.findAll(req, res);
  });

  app
    .route("/api/giraffe/:id")
    .get((req, res) => giraffeController.findById(req, res))
    .put((req, res) => giraffeController.update(req, res))
    .delete((req, res) => giraffeController.remove(req, res));
};
