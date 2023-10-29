import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Person from "App/Models/Person";
import User from "App/Models/User";

export default class extends BaseSeeder {
  public async run() {
    // await UserFactory.createMany(10);

    const user = await User.create({
      email: "test@test.com",
      password: "11111111",
    });

    await Person.create({
      name: "Samuel",
      userId: user.id,
      surname: "Graterol",
      phoneNumber: "+584242805116",
      address: "Dirección",
    });
  }
}
