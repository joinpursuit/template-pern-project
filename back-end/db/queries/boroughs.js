const db = require("../dbConfig");

const getBorough = async (req, res) => {
  try {
    const getBorough = await db.any("SELECT * FROM boroughs");
    res.json(getBorough);
  } catch (err) {
    res.json(err);
  }
};

const getBoroughOne = async (req, res, next) => {
  try {
    let car = await db.one("SELECT * FROM boroughs WHERE id=$1", [req.params.id]);
    res.json({
      status: "success",
      car,
      message: "Received ONE borough!"
    });
  } catch (err) {
    next(err);
  }
};

const createBorough = async (req, res, next) => {
  try {
    await db.none(
      "INSERT INTO boroughs (Borough) VALUES ('BrooklynKKKK'),",
    );
    res.json({
      status: "succss",
      message: "New Borough added",
      req: req
    });
  } catch (err) {
    res.json({
      status: "error",
      payload: null,
      message: err,
      req: req.body
    });
  }
};

const deleteBourgh = async (req, res, next) => {
  try {
    let result = await db.result("DELETE FROM boroughs WHERE id=$1", req.params.id);
    res.json({
      status: "success",
      message: "You destroyed the borough",
      result: result
    });
  } catch (err) {
    next(err);
  }
};

const editBorough= async (req, res, next) => {
  try {
    let car = await db.one(
      "UPDATE boroughs SET Borough=${Borough}  WHERE id=${id} RETURNING *",
      {
        Borough: req.body,
        id: req.params.id
      }
    );
    res.json({
      status: "success",
      message: "updated one borough",
      car,
      req: req
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getBorough, getBoroughOne, createBorough, editBorough, deleteBourgh }