import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Need from "App/Models/Need";

export default class extends BaseSeeder {
  public async run() {
    await Need.createMany([
      { name: "Jornada de salud" },
      { name: "Eventos culturales" },
      { name: "Eventos deportivos" },
    ]);
  }
}
