import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Involved from 'App/Models/Involved'
import InvolvedFactory from 'Database/factories/InvolvedFactory'

export default class extends BaseSeeder {
  public async run () {
    await InvolvedFactory.createMany(6)
  }
}
