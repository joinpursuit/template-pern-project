const db = require("../dbConfig/");

const getBorough = async (req, res) => {
  try {
    const getBorough = await db.any("SELECT * FROM boroughs");
    res.json(getBorough);
  } catch (err) {
    res.json(err);
  }
};

module.exports = { getBorough }