import express from "express";
const router = express.Router();

// define routes
router.get("/", (req, res) => {
  res.send("Route working");
});

export default router;