import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', async(req: any, res: any) => {
    res.json({message: 'Hello World2'});
});

const port = 3000;

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
