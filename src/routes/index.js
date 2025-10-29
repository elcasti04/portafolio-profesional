import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.render('inicio');
})
router.get('/about', (req, res) => {
    res.render('about.ejs');
})
router.get('/projects', (req, res)=> {
    res.render('projects.ejs')
})
router.get('/skills', (req, res) => {
    res.render('skills.ejs')
})
router.get('/contact', (req, res) =>{
    res.render('contact.ejs')
})
export default router; 