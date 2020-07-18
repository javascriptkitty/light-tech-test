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
    if (res) {
      console.log("New giraffe:", req.body);
      res.status(200).send(req.body);
    } else {
      res.sendStatus(500);
    }
  });

  app.get("/api/giraffe", (req, res) => {
    if (res) {
      res.status(200).send(req.body);
    } else {
      res.sendStatus(500);
    }
  });

  app
    .route("/api/giraffe/:id")
    .get((req, res) => {
      if (res) {
        res.status(200).send(req.params);
      } else {
        res.sendStatus(500);
      }
    })

    .put((req, res) => {
      if (res) {
        res.status(200).send(req.params);
      } else {
        res.status(500).send("There was a problem updating the giraffe");
      }
    })
    .delete((req, res) => {
      if (res) {
        res.status(200).send(req.params);
      } else {
        res.sendStatus(500);
      }
    });
};
