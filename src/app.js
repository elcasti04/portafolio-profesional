import express from "express";
import routes from "./routes/index.js";
import { fileURLToPath } from "node:url";
import expressLayouts from "express-ejs-layouts";
import path from "node:path";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// === Archivos estáticos (carpeta public) ===
app.use(express.static(path.join(__dirname, "../public")));

// === Configuración del motor de vistas ===
app.set("view engine", "ejs");
app.use(expressLayouts);

// Ruta correcta de vistas (dentro de src/views)
app.set("views", path.join(__dirname, "views"));
console.log(app.set("views", path.join(__dirname, "views")))


// === Puerto del servidor ===
app.set("port", process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.render('index'); // Asegúrate de tener /src/views/index.ejs
});

// === Ruta para descargar el CV ===
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

// === Rutas principales ===
app.use("/", routes);

// === Manejo de errores 404 ===
app.use((req, res) => {
  res.status(404).render("404", { title: "Página no encontrada" });
});
app.use((err, req, res, next) => {
  console.error("Error interno:", err);
  res.status(500).send("Error interno del servidor 😥");
});


export default app;
