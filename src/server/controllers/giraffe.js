const Giraffe = require("../models/giraffe").Giraffe;

module.exports = {
  findAll: function (req, res) {
    Giraffe.find()
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    Giraffe.findById(req.params.id)
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    Giraffe.create(req.body)
      .then((dbModel) => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    Giraffe.findByIdAndUpdate(req.params.id, req.body)
      .then((dbModel) => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },

  remove: function (req, res) {
    Giraffe.findById(req.params.id)
      .then((dbModel) => dbModel.remove())
      .then((result) => {
        res.json(result);
      })
      .catch((err) => res.status(422).json(err));
  },
};
