exports.seeds = function(knex) {

    return knex("tasks").del()
        .then(function() {
            return knex("tasks").insert([
                { 
                    task_description: "Call windshield people",
                    task_notes:"123-456-7890",
                    task_completed: "0",
                    project_id: "1"
                },
                { 
                    task_description: "Bring in car",
                    task_notes:"12345 67th St SE Disneyland, California",
                    task_completed: "0",
                    project_id: "1"
                },
                { 
                    task_description: "Vacuum floors",
                    task_notes:"Use the Hoover",
                    task_completed: "0",
                    project_id: "2"
                },
                { 
                    task_description: "Clean the toilets",
                    task_notes:"Use the flushable wipes",
                    task_completed: "0",
                    project_id: "2"
                },
                
            ])
        })
}