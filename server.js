import express from "express";
import cors from "cors";

// routes
import userRoutes from "./routes/user.routes.js";
import resourceRoutes from "./routes/resource.routes.js";
import requestRoutes from "./routes/request.routes.js";
import maintenanceRoutes from "./routes/maintenance.routes.js";
import aiRoutes from "./routes/ai.routes.js";
import reportRoutes from "./routes/report.routes.js";

// middleware
import { errorHandler } from "./middleware/error.js";

const app = express();

// 🔧 CORE MIDDLEWARE
app.use(cors());
app.use(express.json());

// 🧪 HEALTH CHECK (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.send("SRMS API is running 🚀");
});

---

# 🔗 ROUTES CONNECTION (CLEAN)

app.use("/api/users", userRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api/maintenance", maintenanceRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/reports", reportRoutes);

---

# ❌ 404 HANDLER

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

---

# 💣 GLOBAL ERROR HANDLER

app.use(errorHandler);

---

# 🚀 SERVER START

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
