import express from "express";

const router = express.Router();

router.get("/movies", (req, res) => {
  res.json({ httpMethod: "GET", message: "List of movies" });
});
router.post("/movies", (req, res) => {
  res.json({ httpMethod: "POST", message: "List of movies" });
});
router.put("/movies", (req, res) => {
  res.json({ httpMethod: "PUT", message: "List of movies" });
});
router.delete("/movies", (req, res) => {
  res.json({ httpMethod: "DELETE", message: "List of movies" });
});
router.patch("/movies", (req, res) => {
  res.json({ httpMethod: "PATCH", message: "List of movies" });
});

export default router;