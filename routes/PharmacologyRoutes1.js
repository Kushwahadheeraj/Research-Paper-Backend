const express = require("express");

const PharmacologyController1 = require("../controllers/PharmacologyController1.js");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/", PharmacologyController1.addPharmacology);
router.get("/:pharmacologyId", PharmacologyController1.getOnePharmacology);
router.get("/", PharmacologyController1.getAllPharmacologys);
router.delete("/delete/:pharmacologyId",checkAuth, PharmacologyController1.deletePharmacology);
router.put("/update/:pharmacologyId",checkAuth, PharmacologyController1.updatePharmacology);

module.exports = router;