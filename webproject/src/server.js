import express, { Router } from 'express';
import loginRouter from './routes/login.js'

const app = express();
const PORT = 5000;

app.use(express.json())
app.use('/login', loginRouter)

app.get('/', (req, res) => {
    res.send('hello from root');
})

app.listen(PORT, () => {
    console.log("server running on port 5000");
})
