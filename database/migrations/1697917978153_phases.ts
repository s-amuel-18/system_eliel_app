import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "phases";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.integer("user_id").unsigned();
      table.integer("project_id").unsigned();
      // * Encargado
      table.integer("involved_id").unsigned();
      // * Area destinada
      table.integer("area_id").unsigned();
      // * Tipo de material (many to many)

      table.float("budget");
      table.string("name", 100);
      table.string("description", 100);
      table.date("start_date");
      table.date("finish_date");
      table.integer("status");

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
