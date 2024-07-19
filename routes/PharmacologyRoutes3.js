const express = require("express");

const PharmacologyController3 = require("../controllers/PharmacologyController3.js");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/", PharmacologyController3.addPharmacology);
router.get("/:pharmacologyId", PharmacologyController3.getOnePharmacology);
router.get("/", PharmacologyController3.getAllPharmacologys);
router.delete("/delete/:pharmacologyId",checkAuth, PharmacologyController3.deletePharmacology);
router.put("/update/:pharmacologyId",checkAuth, PharmacologyController3.updatePharmacology);

module.exports = router;