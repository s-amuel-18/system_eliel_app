import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "involveds";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.integer("labour_id").unsigned();
      table.string("name");
      table.string("surname");

      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
