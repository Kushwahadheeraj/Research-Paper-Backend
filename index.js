const express = require("express");
const cors = require("cors");
const bajraRoutes = require("./routes/BajraRoutes.js");
const BiologicalRoutes = require("./routes/BiologicalRoutes.js");
const MaizeRoutes = require("./routes/MaizeRoutes.js");
const RagiRoutes = require("./routes/RagiRoutes.js");
const RiceRoutes = require("./routes/RiceRoutes.js");
const userRoutes = require("./routes/UserRoutes");
const SorghumRoutes = require("./routes/SorghumRoutes.js")
const wheatRoutes = require("./routes/WheatRoutes.js");
const ADMEpassRoutes = require("./routes/ADMEpassRoutes.js")
const PharmacologyRoutes = require("./routes/PharmacologyRoutes.js")
const PharmacologyRoutes2 = require("./routes/PharmacologyRoutes2.js")
const PharmacologyRoutes3 = require("./routes/PharmacologyRoutes3.js")
const PharmacologyRoutes4 = require("./routes/PharmacologyRoutes4.js")
const StatisticsRouters = require("./routes/StatisticsRouters.js")
const BarleyRouters = require('./routes/BarleyRoutes.js')


const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/bajras", bajraRoutes);
app.use("/api/biological", BiologicalRoutes);
app.use("/api/maize", MaizeRoutes);
app.use("/api/ragi", RagiRoutes);
app.use("/api/rice", RiceRoutes);
app.use("/api/sorghum",SorghumRoutes)
app.use("/api/users", userRoutes);
app.use("/api/wheat", wheatRoutes);
app.use("/api/ADMEpass",ADMEpassRoutes);
app.use("/api/pharmacology",PharmacologyRoutes);
app.use("/api/pharmacology2",PharmacologyRoutes2);
app.use("/api/pharmacology3",PharmacologyRoutes3);
app.use("/api/pharmacology4",PharmacologyRoutes4); 
app.use('/api/statistics',StatisticsRouters);
app.use('/api/barley',BarleyRouters)



app.listen(process.env.PORT, () =>
  console.log(`server is running in port ${process.env.PORT}`)
);

mongoose
  .connect(process.env.DATA_BASE_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("connected to db"))
  .catch((err) => console.error(err));