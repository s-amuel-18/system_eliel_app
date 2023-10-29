import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { processCliArgs } from '@japa/runner';
import Person from 'App/Models/Person';
import User from 'App/Models/User'

export default class UsersController {
  public async index({ view }: HttpContextContract) {
    const users = await User.query().preload("person");
    return view.render("dashboard/users/index", { users })
  }

  public async store({ request, response }: HttpContextContract) {
    const {
      name,
      surname,
      email,
      phoneNumber,
      address,
      password = "11111111" } = request.body();
    console.log(request.body());
    const user = await User.create({
      email, password
    })

    await Person.create({
      name, surname, address, phoneNumber, userId: user.id
    })

    return response.redirect().toRoute("user.index")
  }



  // public async show({}: HttpContextContract) {}

  // public async edit({}: HttpContextContract) {}

  // public async update({}: HttpContextContract) {}

  public async destroy({ params, response }: HttpContextContract) {
    const { id } = params

    const user = await User.findByOrFail("id", id)
    await user.delete()

    return response.redirect().toRoute("user.index")
  }
}
