const express = require("express");

const PharmacologyBiologicalController = require("../controllers/PharmacologyBiologicalController.js");
const checkAuth = require("../middlewares/check-auth.js");

const router = express.Router();

router.post("/", PharmacologyBiologicalController.addPharmacology);
router.get("/:pharmacologyBiologicalId", PharmacologyBiologicalController.getOnePharmacology);
router.get("/", PharmacologyBiologicalController.getAllPharmacologys);
router.delete("/:pharmacologyBiologicalId",checkAuth, PharmacologyBiologicalController.deletePharmacology);
router.put("/:pharmacologyBiologicalId",checkAuth, PharmacologyBiologicalController.updatePharmacology);

module.exports = router;