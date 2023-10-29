import Involved from 'App/Models/Involved'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Involved, ({ faker }) => {
  return {
    name: faker.person.firstName(),
    surname: faker.person.firstName(),
  }
}).build()
