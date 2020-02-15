'use strict';

module.exports = (sequelize, DataTypes) => {
  const SequelizeReservation = sequelize.define('Reservation', {
    name: DataTypes.STRING,
    slot: DataTypes.DATE
  }, {});

  class Reservation extends SequelizeReservation {
    static async all() {
      // return await this.findAll();
      return await this.findAll({
        raw: true,
      });
    }

    static async add (reservation) {
      return await this.create({
        name: reservation.name,
        slot: reservation.slot,
      });
    }
  }

  return Reservation;

};
