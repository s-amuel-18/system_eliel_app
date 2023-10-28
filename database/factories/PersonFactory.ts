import Person from "App/Models/Person";
import Factory from "@ioc:Adonis/Lucid/Factory";

export default Factory.define(Person, ({ faker }) => {
  return {
    name: faker.person.firstName(),
    surname: faker.person.firstName(),
    phoneNumber: faker.phone.number(),
    address: faker.address.direction(),
  };
}).build();
