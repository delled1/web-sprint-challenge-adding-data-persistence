exports.seeds = function(knex) {

    return knex("resources").del()
        .then(function() {
            return knex("resources").insert([
                { 
                    resource_name: "Phone",
                    resource_description: "In your pocket",
                },
                { 
                    resource_name: "Cleaning supplies",
                    resource_description: "In the bathroom closet",
                }
            ])
        })
}