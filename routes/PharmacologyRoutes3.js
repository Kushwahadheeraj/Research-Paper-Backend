const express = require("express");

const PharmacologyController4 = require("../controllers/PharmacologyController4.js");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/", PharmacologyController4.addPharmacology);
router.get("/:pharmacologyId", PharmacologyController4.getOnePharmacology);
router.get("/", PharmacologyController4.getAllPharmacologys);
router.delete("/:pharmacologyId",checkAuth, PharmacologyController4.deletePharmacology);
router.put("/:pharmacologyId",checkAuth, PharmacologyController4.updatePharmacology);

module.exports = router;