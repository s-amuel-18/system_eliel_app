import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Need from "App/Models/Need";
import User from "App/Models/User";

export default class DashboardController {
  public async index({ view }: HttpContextContract) {
    const needs = await Need.all();

    return view.render("dashboard.index", {
      needs,
    });
  }

  public async survey({ request }: HttpContextContract) {
    console.log(request.body());
  }
}
