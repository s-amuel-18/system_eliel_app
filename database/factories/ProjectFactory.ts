import Project from 'App/Models/Project'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Project, ({ faker }) => {
  return {
    name: faker.lorem.words(3),
    budget: faker.finance.amount(),
  }
}).build()
