const express = require("express");
const enserSchema = require("../model/enseres");
const router = express.Router();

// create enser
router.post("/enseres", (req, res) => {
    const enser = enserSchema(req.body);
    enser
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/enseres", (req, res) => {
    enserSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/enseres/:id", (req, res) => {
    const { id } = req.params;
    enserSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/enseres/:id", (req, res) => {
    const { id } = req.params;
    enserSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/enseres/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, cantidad, sede } = req.body;
    enserSchema
        .updateOne({ _id: id }, { $set: { nombre, cantidad, sede } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;