const express = require("express");

const BajraController = require("../controllers/BajraController.js");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/", BajraController.addBajra);
router.get("/:bajraId", BajraController.getOneBajra);
router.get("/", BajraController.getAllBajras);
router.delete("/delete/:bajraId",checkAuth, BajraController.deleteBajra);
router.put("/update/:bajraId",checkAuth, BajraController.updateBajra);

module.exports = router;




