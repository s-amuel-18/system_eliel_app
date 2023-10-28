import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Need from "App/Models/Need";
import User from "App/Models/User";

export default class DashboardController {
  public async index({ view, auth }: HttpContextContract) {
    await auth.use("web").authenticate();

    const needs = await Need.all();

    return view.render("dashboard.index", {
      needs,
    });
  }

  public async survey({ request, view }: HttpContextContract) {
    const { survey } = request.body();
    const needs = await Need.all();

    const totalSurvey = survey.map((s) => s.value).reduce((a, b) => +a + +b);
    const stadistics = needs
      .map((need) => {
        const s = survey.find((f) => f.id == need.id);
        return {
          ...need.toJSON(),
          percentage: parseFloat(((+s.value / totalSurvey) * 100).toFixed(2)),
        };
      })
      .sort((a, b) => b.percentage - a.percentage);

    return view.render("dashboard.stadistic", {
      stadistics,
    });
  }
}
