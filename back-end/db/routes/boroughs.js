const boroughs = require("express").Router();
const { getBorough, getBoroughOne, createBorough, editBorough, deleteBourgh } = require("../queries/boroughs")


boroughs.get("/", getBorough);

lounges.get('/:id', getBoroughOne );

lounges.delete("/:id", deleteBourgh);

lounges.post("/new", createBorough);

lounges.patch("/:id/edit", editBorough);

module.exports = boroughs