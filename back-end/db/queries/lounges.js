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
  try {
    let {Photos} = req.params.Photos;
    let {Borough} = req.params.Borough;
    let {Zip_Code} = req.params.Zip_Code;
    let {Lounge_Name} = req.params.Lounge_Name;
    let {Phone_Number} = req.params.Phone_Number;
    let {Days_Closed} = req.params.Days_Closed;
    let {Street_Address} = req.params.Street_Address;
    let {Serves_Hookah} = req.params.Serves_Hookah;
    let {id} = req.params.id;
    
    let editLounge = await db.any(
        `UPDATE lounges SET Photos = $Photos, Borough = $Borough, Zip_Code = $Zip_Code, Lounge_Name = $Lounge_Name, Phone_Number = $Phone_Number, Days_Closed = $Days_Closed, Street_Address = $Street_Address, Serves_Hookah= $Serves_Hookah Photos=$Photos WHERE id = $8 RETURNING *`,
        [Photos, Borough, Zip_Code, Lounge_Name, Phone_Number, Days_Closed, Street_Address,Serves_Hookah, id]
      );
    res.json(getLounges);
  } catch (err) {
    res.json(err);
  }
};

module.exports = { getLounges, getSingleLounge, deleteLounge , addLounge , editLounge} 