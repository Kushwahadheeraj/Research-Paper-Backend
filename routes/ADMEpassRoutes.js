const express = require("express");

const ADMEpassController = require("../controllers/ADMEpassController.js");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/", ADMEpassController.addADMEpass);
router.get("/:admeId", ADMEpassController.getOneADMEpass);
router.get("/", ADMEpassController.getAllADMEpass);
router.delete("/delete/:admeId",checkAuth, ADMEpassController.deleteADMEpass);
router.put("/update/:admeId",checkAuth, ADMEpassController.updateADMEpass);

module.exports = router;
