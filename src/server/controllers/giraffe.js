const Giraffe = require("../models/giraffe").Giraffe;

module.exports = {
  findAll: function (req, res) {
    Giraffe.find()
      .then((dbModel) => {
        console.log("all");
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    console.log("kitty");
    Giraffe.findOne({ _id: "5f131bae1f8a6ab093d90bc7" })
      .then((dbModel) => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body);
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
