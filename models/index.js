const Traveler = require("./Traveler");
const Location = require("./Location");

const Trips = require("./trips");

Traveler.hasMany(Trips, {
  foreignKey: "traveler_id",
  onDelete: "CASCADE",
});

Trips.belongsTo(Traveler, {
  foreignKey: "traveler_id",
});

Location.hasMany(Trips, {
  foreignKey: "location_id",
  onDelete: "CASCADE",
});

Trips.belongsTo(Location, {
  foreignKey: "trips_id",
});

// Traveler.belongsToMany(Location, {
//   through: Trips,
//   foreignKey: "traveler_id",
//   onDelete: "CASCADE",
//   unique: false,
// });
// Location.belongsToMany(Traveler, {
//   through: Trips,
//   foreignKey: "location_id",
//   onDelete: "CASCADE",
//   unique: false,
// });

module.exports = { Traveler, Location, Trips };
