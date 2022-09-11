const db = require("../dbConfig");

const getLounges = async (req, res) => {
  try {
    const getLounge = await db.any("SELECT * FROM lounges");
    res.json(getLounge);
  } catch (err) {
    res.json(err);
  }
};

const getSingleLounge = async (req, res) => {
  try {
    let loungeId = req.params.id
    const getSingleLounge = await db.any(`SELECT * FROM lounges WHERE id=${loungeId}`);
    
    res.json(getSingleLounge);
  } catch (err) {
    res.json(err);
  }
};

const deleteLounge = async (req, res) => {
  try {
    let {id} = req.params.id;
    const deleteLounges = await db.any(`DELETE FROM lounges WHERE id = $1 RETURNING *`, id);
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
  // try {
  //   let {Days_Closed} = req.body.days_closed;
  //   let {Serves_Hookah} = req.body.serves_hookah;
  //   let {id} = req.params.id;
    
  //   let editLounge = await db.any(
  //       `UPDATE lounges SET Days_Closed = $Days_Closed, Serves_Hookah= $Serves_Hookah WHERE id=${id} RETURNING *`,
  //       [Days_Closed, Serves_Hookah, id]
  //     );
  //   res.json(getLounges);
  //   return editLounge;
  // } catch (err) {
  //   res.json(err);
  // }
};

module.exports = { getLounges, getSingleLounge, deleteLounge , addLounge , editLounge} 