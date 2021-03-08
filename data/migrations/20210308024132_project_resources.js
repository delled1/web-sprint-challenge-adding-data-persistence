
exports.up = async function(knex) {

    await knex.schema.createTable("project_resources", (table) => {

        table
            .integer("projects_id")
            .notNull()
            .references("project_id")
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        
        table
            .integer("resource_id")
            .notNull()
            .references("resource_id")
            .inTable("resources")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })
  
};

exports.down = async function(knex) {

    await knex.schema.dropTableIfExists("project_resources")
  
};
