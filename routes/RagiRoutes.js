const express = require("express");

const RagiController = require("../controllers/RagiController.js");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/",checkAuth, RagiController.addRagi);
router.get("/:ragiId", RagiController.getOneRagi);
router.get("/", RagiController.getAllRagis);
router.delete("/delete/:ragiId",checkAuth, RagiController.deleteRagi);
router.put("/update/:ragiId",checkAuth, RagiController.updateRagi);

module.exports = router;
