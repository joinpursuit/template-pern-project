const boroughs = require("express").Router();
const { getBorough, getBoroughOne, createBorough, editBorough, deleteBourgh } = require("../queries/boroughs")


boroughs.get("/", getBorough);

boroughs.get('/:id', getBoroughOne );

boroughs.delete("/:id", deleteBourgh);

boroughs.post("/", createBorough);

boroughs.patch("/:id/edit", editBorough);

module.exports = boroughs