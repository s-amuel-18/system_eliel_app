import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Project from 'App/Models/Project'

export default class ProjectsController {
    async index({ view }: HttpContextContract) {
        const projects = await Project.query().preload("phases")

        return view.render("dashboard/project/index", { projects })
    }

    async store({ request, response }: HttpContextContract) {
        const newProject = request.body()

        await Project.create(newProject)

        return response.redirect().toRoute("project.index");
    }

    async destroy({ request, response, params }: HttpContextContract) {
        const { id } = params

        const project = await Project.findByOrFail("id", id)

        await project.delete()
        return response.redirect().toRoute("project.index");
    }

}
