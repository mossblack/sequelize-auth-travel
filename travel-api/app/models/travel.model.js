module.exports = (sequelize, Sequelize) => {
    const Travel = sequelize.define("travel", {
        nama_bus: {
            type: Sequelize.STRING,
            allowNull: false
        },
        nama_penumpang: {
            type: Sequelize.STRING,
            allowNull: false
        },
        jadwal_berangkat: {
            type: Sequelize.DATEONLY
        },
        jumlah_penumpang: {
            type: Sequelize.INTEGER
        }
    });
    
    return Travel;
};
