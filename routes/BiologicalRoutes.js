const express = require("express");

const BiologicalController = require("../controllers/BiologicalController.js");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/", checkAuth, BiologicalController.addBiological);
router.get("/:biologicalId", BiologicalController.getOneBiological);
router.get("/", BiologicalController.getAllBiologicals);
router.delete("/:biologicalId",checkAuth, BiologicalController.deleteBiological);
router.put("/:biologicalId",checkAuth, BiologicalController.updateBiological);

module.exports = router;
