const express = require("express");

const ADMEpassController = require("../controllers/ADMEpassController.js");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/", ADMEpassController.addADMEpass);
router.get("/:bajraId", ADMEpassController.getOneADMEpass);
router.get("/", ADMEpassController.getAllADMEpass);
router.delete("/:bajraId",checkAuth, ADMEpassController.deleteADMEpass);
router.put("/:bajraId",checkAuth, ADMEpassController.updateADMEpass);

module.exports = router;
