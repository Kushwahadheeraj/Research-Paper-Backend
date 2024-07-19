const express = require("express");

const SorghumController = require("../controllers/SorghumController.js");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/", checkAuth, SorghumController.addSorghum);
router.get("/:sorghumId", SorghumController.getOneSorghum);
router.get("/", SorghumController.getAllSorghums);
router.delete("/delete/:sorghumId", checkAuth, SorghumController.deleteSorghum);
router.put("/update/:sorghumId", checkAuth, SorghumController.updateSorghum);

module.exports = router;
