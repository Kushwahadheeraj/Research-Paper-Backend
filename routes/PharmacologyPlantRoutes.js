const express = require("express");

const PharmacologyPlantController = require("../controllers/PharmacologyPlantController.js")
const checkAuth = require("../middlewares/check-auth.js");

const router = express.Router();

router.post("/", PharmacologyPlantController.addPharmacology);
router.get("/:pharmacologyPlantId", PharmacologyPlantController.getOnePharmacology);
router.get("/", PharmacologyPlantController.getAllPharmacologys);
router.delete("/:pharmacologyPlantId",checkAuth, PharmacologyPlantController.deletePharmacology);
router.put("/:pharmacologyPlantId",checkAuth, PharmacologyPlantController.updatePharmacology);

module.exports = router;