exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "128993Gh",
          make: "BMW",
          model: "M3",
          mileage: "1000",
          transmission: "RWD",
          title: "salvage"
        },
        {
          VIN: "78782geyjdhsjh",
          make: "Mercury",
          model: "Milan",
          mileage: "2000",
          transmission: "AWD",
          title: "salvage"
        }
      ]);
    });
};
