import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PhaseFactory from 'Database/factories/PhaseFactory';
import ProjectFactory from 'Database/factories/ProjectFactory';

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await ProjectFactory.createMany(10);
    await PhaseFactory.createMany(30);
  }
}
