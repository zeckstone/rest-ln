const express = require('express');
const app = express();
const port = 3001;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        name: 'unknown',
        occupation: 'Developer',
        age: 'None of your business'
    })
});

app.listen(port, () => console.log(`app is listening on port ${port}`));

