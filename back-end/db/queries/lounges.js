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
    const getOneLounge = await db.any(`SELECT * FROM lounges WHERE id=${loungeId}`);
    
    res.json({
      status: "success",
      message: "one lounge",
      getOneLounge,
      req: req
    });
  } catch (err) {
    res.json(err);
  }
};

const addLounge = async (lounge) => {
    try {
      const { photos, borough, zip_code, lounge_name, phone_number, days_closed, street_address,serves_hookah } = lounge;
      const newlounge = await db.one(
        `INSERT INTO lounges (photos, borough, zip_Code, lounge_Name, phone_number, days_closed, street_address, serves_hookah)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
        [photos, borough, zip_code, lounge_name, phone_number, days_closed, street_address, serves_hookah]
      );
      return newlounge;
    } catch (err) {
      return err;
    }
  };
  
const editLounge = async (lounge, id) => {
    try {
      const { photos, borough, zip_code, lounge_name, phone_number, days_closed, street_address, serves_hookah } = lounge;
      const updatedLounge = await db.one(
        `UPDATE lounges SET Photos = $1, Borough = $2, Zip_Code = $3, Lounge_Name = $4, Phone_Number = $5, days_Closed = $6, Street_Address = $7, serves_hookah = $8  WHERE id = $9 RETURNING *`,
        [photos, borough, zip_code, lounge_name, phone_number, days_closed, street_address, serves_hookah, id]
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