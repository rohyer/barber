const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { cacheMiddleware } = require("../middleware/cacheMiddleware");
const {
  getServices,
  setService,
  updateService,
  deleteService
} = require("../controllers/serviceController");

router.get("/", protect, cacheMiddleware, getServices);

router.post("/", protect, setService);

router.put("/:id", protect, updateService);

router.delete("/:id", protect, deleteService);

module.exports = router;
