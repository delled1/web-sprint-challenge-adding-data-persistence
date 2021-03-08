
exports.up = async function(knex) {
  
    await knex.schema.createTable("projects", (table) => {
        table.increments("project_id")
        table.text("project_name").notNull()
        table.text("project_description")
        table.integer("project_completed").defaultTo(0)
    })

    await knex.schema.createTable("resources", (table) => {
        table.increments("resource_id")
        table.text("resource_name").notNull().unique()
        table.text("resource_description")
    })

    await knex.schema.createTable("tasks", (table) => {
        table.increments("task_id")
        table.text("task_description").notNull()
        table.text("task_notes")
        table.integer("task_completed").defaultTo(0)
        table
            .integer("project_id")
            .notNull()
            .references("project_id")
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("projects")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("tasks")
  
};
