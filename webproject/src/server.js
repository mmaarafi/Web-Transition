import express from 'express';

const app = express();
const PORT = 5000;

app.use(logger)

function logger(req, res, next) {
    console.log(req.method);
    console.log(req.url);
    next()
}

app.get('/', (req, res) => {
    res.send('<h1>"hello from root"</h1>');
})

app.listen(PORT, () => {
    console.log("server running on port 5000");
})