import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Need from "App/Models/Need";

export default class NeedsController {
  public async index({ view }: HttpContextContract) {
    const needs = await Need.all();
    // console.log(needs);
    return view.render("dashboard.needs.index", {
      needs,
    });
  }
  public async create({ view }: HttpContextContract) {
    return view.render("dashboard.needs.create");
  }

  public async store({ request, response }: HttpContextContract) {
    const { need } = request.body();

    await Need.create({ name: need });

    response.redirect().toRoute("need.index");
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params();
    // console.log(id);
    const need = await Need.find(+id);
    console.log(+id);
    console.log(need);
    if (!need) return response.redirect().toRoute("need.index");

    await need.delete();

    return response.redirect().toRoute("need.index");
  }
}
