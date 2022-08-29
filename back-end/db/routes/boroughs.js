const boroughs = require("express").Router();
const { getBorough } = require("../queries/boroughs")


boroughs.get("/", getBorough);

module.exports = boroughs