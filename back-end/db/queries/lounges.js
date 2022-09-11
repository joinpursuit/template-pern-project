const db = require("../dbConfig");

const getLounges = async (req, res) => {
  console.log("Hey We are in route");
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
    const getOneLounge = await db.any(`SELECT * FROM lounges WHERE id=${loungeId}`);
    
    res.json(getOneLounge);
  } catch (err) {
    res.json(err);
  }
};

const addLounge = async (lounge) => {
    try {
      const { Photos, Borough, Zip_Code, Lounge_Name, Phone_Number, Days_Closed, Street_Address,Serves_Hookah } = lounge;
      const newlounge = await db.one(
        `INSERT INTO lounges (Photos, Borough, Zip_Code, Lounge_Name, Phone_Number, Days_Closed, Street_Address, Serves_Hookah)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
        [Photos, Borough, Zip_Code, Lounge_Name, Phone_Number, Days_Closed, Street_Address, Serves_Hookah]
      );
      return newlounge;
    } catch (err) {
      return err;
    }
  };
  
const editLounge = async (lounge, id) => {
    try {
      const { Photos, Borough, Zip_Code, Lounge_Name, Phone_Number, Days_Closed, Street_Address, Serves_Hookah } = lounge;
      const updatedLounge = await db.one(
        `UPDATE lounges SET Photos = $1, Borough = $2, Zip_Code = $3, Lounge_Name = $4, Phone_Number = $5, Days_Closed = $6, Street_Address = $7, Serves_Hookah = $8  WHERE id = $9 RETURNING *`,
        [Photos, Borough, Zip_Code, Lounge_Name, Phone_Number, Days_Closed, Street_Address, Serves_Hookah, id]
      );
      return updatedLounge
    } catch (err) {
      return err;
    }
};
  
const deleteLounge = async (id) => {
    try {
      const deletedLounge = await db.one(`DELETE FROM lounges WHERE id = $1 RETURNING *`, id)
      return deletedLounge
    } catch (err) {
      return err
    }
}

module.exports = { getLounges, getSingleLounge, deleteLounge , addLounge , editLounge};