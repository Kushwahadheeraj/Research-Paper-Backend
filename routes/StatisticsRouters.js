const express = require("express");

const StatisticsController = require("../controllers/StatisticsController.js");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/", StatisticsController.addStatistics);
router.get("/:statisticsId", StatisticsController.getOneStatistics);
router.get("/", StatisticsController.getAllStatistics);
router.delete("/delete/:statisticsId",checkAuth, StatisticsController.deleteStatistics);
router.put("/update/:statisticsId",checkAuth, StatisticsController.updateStatistics);

module.exports = router;