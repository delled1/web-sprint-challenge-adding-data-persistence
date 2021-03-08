exports.seed = function(knex) {

    return knex("project_resources").del()
        .then(function() {
            return knex("project_resources")
            .insert ([
                { projects_id: 1, resource_id: 1},
                { projects_id: 2, resource_id: 2}
            ])
        })
}