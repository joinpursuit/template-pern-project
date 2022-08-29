const lounges = require("express").Router();
const { getLounges, deleteLounge, editLounge, addLounge } = require("../queries/lounges")


lounges.get("/", getLounges);

lounges.delete("/:id", deleteLounge);

lounges.post("/", addLounge);

lounges.patch("/", editLounge);

module.exports = lounges