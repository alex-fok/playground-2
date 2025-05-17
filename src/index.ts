const app = require('express')();
const cors = require('cors');
app.use(cors());

app.get('/', async(req: any, res: any) => {
    res.json({message: 'Hello World2'});
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
