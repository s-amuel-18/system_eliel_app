import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AuthController {
  public async index({ view }: HttpContextContract) {
    return view.render("auth/login");
  }

  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input("email");
    const password = request.input("password");

    try {
      await auth.use("web").attempt(email, password);
      return response.redirect("/dashboard");
    } catch (error) {
      console.log(error);
      return response.redirect("/login");
    }
  }
}
