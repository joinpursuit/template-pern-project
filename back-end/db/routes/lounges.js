const lounges = require("express").Router();
const { getLounges, getSingleLounge, deleteLounge, editLounge, addLounge } = require("../queries/lounges")


lounges.get("/", getLounges);

lounges.get('/:id', getSingleLounge );

lounges.delete("/:id", deleteLounge);

lounges.post("/new", addLounge);

lounges.patch("/:id/edit", editLounge);

module.exports = lounges