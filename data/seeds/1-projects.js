exports.seeds = function(knex) {

    return knex("projects").del()
        .then(function() {
            return knex("projects").insert([
                { 
                    project_name: "Fix car windshield",
                    project_description: "Windshield is cracked, get it fixed",
                    project_completed: "0"
                },
                { 
                    project_name: "Clean house",
                    project_description: "House is a mess, clean it up",
                    project_completed: "0"
                }
            ])
        })
}