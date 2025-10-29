import express from "express";
import routes from "./routes/index.js";
import { fileURLToPath } from "node:url";
import expressLayouts from "express-ejs-layouts";
import path from "node:path";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Archivos estáticos
app.use(express.static(path.join(__dirname, "../public")));

// Configuración del motor de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);

// Puerto
app.set("port", process.env.PORT || 3000);

// Ruta para descargar CV
app.get("/descargar-cv", (req, res) => {
  const filePath = path.join(
    __dirname,
    "../public/assets/documents/Curriculum_CV_Andres_Arturo_Castro.pdf"
  );
  res.download(filePath, "Curriculum_CV_Andres_Arturo_Castro.pdf", (err) => {
    if (err) {
      console.error("Error al descargar el archivo:", err);
      res.status(500).send("Error al descargar el archivo");
    }
  });
});

// Rutas principales
app.use("/", routes);

// Middleware para capturar errores (opcional pero útil)
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.stack);
  res.status(500).send("Error interno del servidor 😥");
});

export default app;
