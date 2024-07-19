const express = require("express");

const PharmacologyController = require("../controllers/PharmacologyController.js");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/", PharmacologyController.addPharmacology);
router.get("/:pharmacologyId", PharmacologyController.getOnePharmacology);
router.get("/", PharmacologyController.getAllPharmacologys);
router.delete("/:pharmacologyId",checkAuth, PharmacologyController.deletePharmacology);
router.put("/:pharmacologyId",checkAuth, PharmacologyController.updatePharmacology);

module.exports = router;