const db = require("../models/giraffe");

module.exports = {
  find: function (req, res) {
    db.Giraffe.find()
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Giraffe.findById(req.params.id)
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Giraffe.create(req.body)
      .then((dbModel) => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Giraffe.findByIdAndUpdate(req.params.id, req.body)
      .then((dbModel) => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.Giraffe.findById(req.params.id)
      .then((dbModel) => dbModel.remove())
      .then((result) => {
        res.json(result);
      })
      .catch((err) => res.status(422).json(err));
  },
};
