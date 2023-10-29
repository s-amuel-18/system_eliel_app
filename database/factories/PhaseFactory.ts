import PhaseFactory from 'App/Models/Phase'
import Factory from '@ioc:Adonis/Lucid/Factory'
import Project from 'App/Models/Project'
import Phase from 'App/Models/Phase'
import { DateTime } from 'luxon'
import Area from 'App/Models/Area'

export default Factory.define(PhaseFactory, async ({ faker }) => {
  
  return {
    projectId: (await Project.query().orderByRaw('RANDOM()').first())?.id,
    name: faker.lorem.word(2),
    description: faker.lorem.paragraph(),
    budget: faker.finance.amount(),
    startDate: DateTime.fromJSDate(faker.date.future()),
    finishDate: DateTime.fromJSDate(faker.date.future()),
    status: Phase.statusPhases[Math.floor(Math.random() * Phase.statusPhases.length)].id,
    areaId: (await Area.query().orderByRaw('RANDOM()').first())?.id
    
  }
}).build()
