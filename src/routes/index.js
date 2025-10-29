import { Router } from "express";
const router = Router();

// Ruta principal (renderiza vista)
router.get("/", (req, res) => {
  res.render("inicio", { title: "Inicio" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "Acerca de mí" });
});

router.get("/projects", (req, res) => {
  res.render("projects", { title: "Proyectos" });
});

router.get("/skills", (req, res) => {
  res.render("skills", { title: "Habilidades" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contacto" });
});

export default router;
