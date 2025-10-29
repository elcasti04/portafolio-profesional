import app from './app.js'

app.listen(app.get('port'), () => {
    console.log(`Server is running on port http://localhost:${app.get('port')}`);
})