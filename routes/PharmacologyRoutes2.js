const express = require("express");

const PharmacologyController2 = require("../controllers/PharmacologyController2.js");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/", PharmacologyController2.addPharmacology);
router.get("/:pharmacologyId", PharmacologyController2.getOnePharmacology);
router.get("/", PharmacologyController2.getAllPharmacologys);
router.delete("/:pharmacologyId",checkAuth, PharmacologyController2.deletePharmacology);
router.put("/:pharmacologyId",checkAuth, PharmacologyController2.updatePharmacology);

module.exports = router;