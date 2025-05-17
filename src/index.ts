const app = require('express')();

app.get('/', async(req: any, res: any) => {
    res.json({message: 'Hello World2'});
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
