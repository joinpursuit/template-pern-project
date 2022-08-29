const db = require("../dbConfig");

const getLounges = async (req, res) => {
  try {
    const getLounge = await db.any("SELECT * FROM lounges");
    res.json(getLounge);
  } catch (err) {
    res.json(err);
  }
};

const deleteLounge = async (req, res) => {
  try {
    let {id} = req.params.id;
    const getLounges = await db.any(`DELETE FROM lounge WHERE id = $1 RETURNING *`, id);
    res.json(getLounges);
  } catch (err) {
    res.json(err);
  }
};

const addLounge = async (req, res) => {
    try {
      const { Borough, Zip_Code, Lounge_Name, Phone_Number, Days_Closed, Street_Address,Serves_Hookah } = req.params;
      const addLounge = await db.one(
        `INSERT INTO snacks (Borough, Zip_Code, Lounge_Name, Phone_Number, Days_Closed, Street_Address,Serves_Hookah)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [Borough, Zip_Code, Lounge_Name, Phone_Number, Days_Closed, Street_Address,Serves_Hookah]
      );
      return addLounge;
    } catch (err) {
      return err;
    }
  };

const editLounge = async (req, res) => {
  try {
    let {Borough} = req.Borough;
    let {Zip_Code} = req. Zip_Code;
    let {Lounge_Name} = req. Lounge_Name;
    let {Phone_Number} = req. Phone_Number;
    let {Days_Closed} = req. Days_Closed;
    let {Street_Address} = req. Street_Address;
    let {Serves_Hookah} = req. Serves_Hookah;
    
    const getLounges = await db.any(
        `UPDATE lounges SET Borough = $Borough, Zip_Code = $Zip_Code, Lounge_Name = $Lounge_Name, Phone_Number = $Phone_Number, Days_Closed = $Days_Closed, Street_Address = $Street_Address, Serves_Hookah= $Serves_Hookah WHERE id = $8 RETURNING *`,
        [Borough, Zip_Code, Lounge_Name, Phone_Number, Days_Closed, Street_Address,Serves_Hookah, id]
      );;
    res.json(getLounges);
  } catch (err) {
    res.json(err);
  }
};

module.exports = { getLounges, deleteLounge , addLounge , editLounge} 