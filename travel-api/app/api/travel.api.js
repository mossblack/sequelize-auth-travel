const db = require('../models');
const Travel = db.travel;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.nama_bus) {
        res.status(400).send({
            message: 'Harus diisi'
        });
        return;
    }

    const travel = {
        nama_bus: req.body.nama_bus,
        nama_penumpang: req.body.nama_penumpang,
        jadwal_berangkat: req.body.jadwal_berangkat,
        jumlah_penumpang: req.body.jumlah_penumpang,
    };

    Travel.create(travel)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error occured while inserting travel.'
            });
        });
};

exports.findAll = (req, res) => {
    Travel.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Error while retrieving travels.'
            });
        });
};

exports.findOne = (req, res) => {
    Travel.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Error while finding travels.'
            });
        });
};

exports.delete = (req, res) => {
    Travel.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(
        res.send({
            message: 'Success delete travel with id = ' + req.params.id,
        })
    )
    .catch(err => {
        res.status(500).send({
            message: err.message || 'could not delete travel with id' + req.params.id
        });
    });
};