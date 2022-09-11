// DEPENDENCIES
const cors = require("cors");
const express = require("express");


// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
// app.get("/", (req, res) => {
//   res.send("Hello, world!");
// });
const boroughsRouter = require('./db/routes/boroughs.js');
const loungesRouter = require('./db/routes/lounges.js');

app.use('/boroughs', boroughsRouter);
app.use('/lounges', loungesRouter);

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////
const db = require("./db/dbConfig.js");
// const boroughs = require("./db/routes/boroughs.js");

app.listen( () => console.log("Listening"));

// app.get("/test", async (req, res) => {
//   try {
//     const allDays = await db.any("SELECT * FROM test");
//     res.json(allDays);
//   } catch (err) {
//     res.json(err);
//   }
// });

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////

// EXPORT
module.exports = app;
