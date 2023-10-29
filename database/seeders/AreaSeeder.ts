import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Area from 'App/Models/Area'

export default class extends BaseSeeder {
  public async run() {
    await Area.createMany([
      { name: "salud" },
      { name: "cultura" },
      { name: "deporte" },
      { name: "estudiantil" }
    ])

  }
}