const express = require('express');
const app = express();
const port = 3000;

const logic = require('./logic');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/vouchers/:quantity', function(req, res) {
    let vouchers = [];
    vouchers.push(...logic.createVouchers(req.params.quantity));
    res.status(200).send(vouchers);
});

app.listen(port, () => {
    console.log(`Running at port. At http://localhost:${port}`);
});
