const express = require("express");

const BarleyController = require("../controllers/BarleyController.js");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/", BarleyController.addBarley);
router.get("/:barleyId", BarleyController.getOneBarley);
router.get("/", BarleyController.getAllBarleys);
router.delete("/delete/:barleyId",checkAuth, BarleyController.deleteBarley);
router.put("/update/:barleyId",checkAuth, BarleyController.updateBarley);

module.exports = router;