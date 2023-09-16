const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = {
    myBudget:[
    {
        title: 'Electronics',
        budget: 300
    },
    {
        title: 'Rent',
        budget: 350
    },
    {
        title: 'Market place',
        budget: 90
    },
    {
        title: 'Parking',
        budget: 30
    },
    {
        title: 'Cab',
        budget: 250
    },
    {
        title: 'Travel',
        budget: 450
    },
    {
        title: 'Other',
        budget: 359
    },
    
]
};
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.use('/budget', (req, res) => {
    res.sendFile("C:\\Users\\appgu\\OneDrive\\Desktop\\UNC\\Sem 1\\NBAD\\week3\\personal-budget1\\server.json");
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});