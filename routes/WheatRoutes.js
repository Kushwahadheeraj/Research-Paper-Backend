const express = require("express");

const WheatController = require("../controllers/WheatController.js");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/", checkAuth, WheatController.addWheat);
router.get("/:wheatId", WheatController.getOneWheat);
router.get("/", WheatController.getAllWheats);
router.delete("/delete/:id", checkAuth, WheatController.deleteWheat);
router.put("/update/:wheatId", checkAuth, WheatController.updateWheat);

module.exports = router;