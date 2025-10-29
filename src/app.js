import express from 'express';
import routes from './routes/index.js';
import { fileURLToPath } from 'node:url';
import expressLayouts from 'express-ejs-layouts';
import path from 'node:path';

const app = express();

app.use(express.static(path.join(process.cwd(), 'public')));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'ejs');

app.use(expressLayouts);

app.set("views", path.join(process.cwd(), "src", "views"));
app.use(express.static(path.join(process.cwd(), "public")));


app.set('port', process.env.PORT || 3000);

// Ruta para descargar el CV
app.get('/descargar-cv', (req, res) => {
	const filePath = path.join(
		__dirname,
		'../public/assets/documents/Curriculum_CV_Andres_Arturo_Castro.pdf',
	);
	res.download(filePath, 'Curriculum_CV_Andres_Arturo_Castro.pdf', (err) => {
		if (err) {
			console.error('Error al descargar el archivo:', err);
			res.status(500).send('Error al descargar el archivo');
		}
	});
});

app.use('/', routes);

export default app;
