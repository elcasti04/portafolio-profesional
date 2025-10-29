import express from "express";
import routes from "./routes/index.js";
import { fileURLToPath } from "node:url";
import expressLayouts from "express-ejs-layouts";
import path from "node:path";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Archivos estáticos (desde /public)
app.use(express.static(path.join(__dirname, "../public")));

// Configuración de vistas
app.set("view engine", "ejs");
app.use(expressLayouts);

// 🔧 ESTA ES LA RUTA CORRECTA
app.set("views", path.join(__dirname, "../views"));




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

app.use("/", routes);

export default app;
