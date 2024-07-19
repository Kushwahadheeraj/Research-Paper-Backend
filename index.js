const express = require("express");
const cors = require("cors");
const BajraRoutes = require("./routes/BajraRoutes.js");
const MaizeRoutes = require("./routes/MaizeRoutes.js");
const RagiRoutes = require("./routes/RagiRoutes.js");
const RiceRoutes = require("./routes/RiceRoutes.js");
const UserRoutes = require("./routes/UserRoutes.js");
const SorghumRoutes = require("./routes/SorghumRoutes.js")
const WheatRoutes = require("./routes/WheatRoutes.js");
const ADMEpassRoutes = require("./routes/ADMEpassRoutes.js")
const PharmacologyRoutes1 = require("./routes/PharmacologyRoutes1.js")
const PharmacologyRoutes2 = require("./routes/PharmacologyRoutes2.js")
const PharmacologyRoutes3 = require("./routes/PharmacologyRoutes3.js")
const StatisticsRouters = require("./routes/StatisticsRouters.js")
const BarleyRouters = require('./routes/BarleyRoutes.js')


const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/bajras", BajraRoutes);
app.use("/api/maize", MaizeRoutes);
app.use("/api/ragi", RagiRoutes);
app.use("/api/rice", RiceRoutes);
app.use("/api/sorghum",SorghumRoutes)
app.use("/api/users", UserRoutes);
app.use("/api/wheat", WheatRoutes);
app.use("/api/ADMEpass",ADMEpassRoutes);
app.use("/api/pharmacology1",PharmacologyRoutes1);
app.use("/api/pharmacology2",PharmacologyRoutes2);
app.use("/api/pharmacology3",PharmacologyRoutes3); 
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