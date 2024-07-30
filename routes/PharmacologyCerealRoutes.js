const express = require("express");

const PharmacologyCerealController = require("../controllers/PharmacologyCerealController.js");
const checkAuth = require("../middlewares/check-auth.js");

const router = express.Router();

router.post("/", PharmacologyCerealController.addPharmacology);
router.get("/:pharmacologyCerealId", PharmacologyCerealController.getOnePharmacology);
router.get("/", PharmacologyCerealController.getAllPharmacologys);
router.delete("/:pharmacologyCerealId",checkAuth, PharmacologyCerealController.deletePharmacology);
router.put("/:pharmacologyCerealId",checkAuth, PharmacologyCerealController.updatePharmacology);

module.exports = router;