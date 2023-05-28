const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

const db = require('./app/models');
db.sequelize.sync()
    .then(() => {
        console.log('synced db.');
    })
    .catch((err) => {
        console.log('Failed to sync db: ' + err.message);
    });

const travel = require('./app/api/travel.api.js');
app.post('/', (req, res) => {
    travel.create(req, res)
});

app.get('/', (req, res) => {
    travel.findAll(req, res)
});

app.get('/:id', (req, res) => {
    travel.findOne(req, res)
});

app.post('/:id', (req, res) => {
    travel.delete(req, res)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});