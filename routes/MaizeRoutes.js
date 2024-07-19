const express = require("express");

const MaizeController = require("../controllers/MaizeController.js");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/", checkAuth, MaizeController.addMaize);
router.get("/:maizeId", MaizeController.getOneMaize);
router.get("/", MaizeController.getAllMaizes);
router.delete("/delete/:maizeId", checkAuth, MaizeController.deleteMaize);
router.put("/update/:maizeId", checkAuth, MaizeController.updateMaize);

module.exports = router;
