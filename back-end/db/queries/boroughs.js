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



const deleteLounge = async (req, res) => {
  try {
    let {id} = req.params.id;
    const deleteLounges = await db.any(`DELETE FROM lounges WHERE id=${id} RETURNING *`);
    res.json(deleteLounges);
  } catch (err) {
    res.json(err);
  }
};

const addLounge = async (req, res) => {
    try {
      const { Photos, Borough, Zip_Code, Lounge_Name, Phone_Number, Days_Closed, Street_Address,Serves_Hookah } = req.body;
      const addLounge = await db.one(
        `INSERT INTO lounges (Photos, Borough, Zip_Code, Lounge_Name, Phone_Number, Days_Closed, Street_Address, Serves_Hookah)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
        [Photos, Borough, Zip_Code, Lounge_Name, Phone_Number, Days_Closed, Street_Address,Serves_Hookah]
      );
      return addLounge;
    } catch (err) {
      return err;
    }
  };

const editLounge = async (req, res) => {
  console.log("Hey We are in route");
  try {
    let {days_closed} = req.body.days_closed;
    let {serves_hookah} = req.body.serves_hookah;
    let {id} = req.params.id;
    
    let editLounge = await db.any(
        `UPDATE lounges SET Days_Closed = ${days_closed}, Serves_Hookah= ${serves_hookah} WHERE id=${id} RETURNING *`
      );
    res.json(getLounges);
    return editLounge;
  } catch (err) {
    res.json(err);
  }
};

module.exports = { getBorough, getBoroughOne, createBorough, editBorough, deleteBourgh }