const lounges = require("express").Router();
const { getLounges, getSingleLounge, deleteLounge, editLounge, addLounge } = require("../queries/lounges")


lounges.get("/", getLounges);

lounges.get('/:id', getSingleLounge );

lounges.post('/new',  async (req, res) => {
    const createdLounge = await addLounge(req.body);
    if(createdLounge.id) {
      res.status(200).json({payload:createdLounge, success: true})
    } else {
      res.status(422).json({payload:"unprocessable entity", success: false, error: "unprocessable entity"})
    }
  }); 
  
  lounges.put('/:id/edit', async (req, res) => {
    const { id } = req.params; 
    const updatedlounge = await editLounge(req.body, id); 
    if(id) {
      res.status(200).json(updatedlounge)
    } else {
      res.status(422).json({ error: "unprocessable entity"})
    }
  });
  
//   lounges.delete('/:id', async (req, res) => {
//     const { id } = req.params; 
//     const deletedLounge = await deleteLounge(id); 
//     if(deletedLounge.id) {
//       res.status(200).json({payload:deletedLounge, success:true})
//     } else {
//       res.status(404).json({payload: 'not found', success:false, error: "lounge not found"})
//     }
//   }); 

module.exports = lounges