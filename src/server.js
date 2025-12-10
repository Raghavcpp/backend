import express from "express";

// Importing Routes
import movieRoute from "./Routes/movieRoute.js";
import rootRoute from "./routes/rootRoute.js";
const app = express();
const PORT = 5001;

// API Routes
app.get("/hello", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api", movieRoute, rootRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
