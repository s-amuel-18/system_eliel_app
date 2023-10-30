import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Area from "App/Models/Area";
import Involved from "App/Models/Involved";
import Phase from "App/Models/Phase";
import PhaseSupervised from "App/Models/PhaseSupervised";
import Project from "App/Models/Project";

export default class PhasesController {
  public async index({ view, params, response }: HttpContextContract) {
    const { id } = params;

    const project = await Project.findOrFail(id);
    const phaseStatus = Phase.statusPhases;
    const areas = await Area.all();
    const involveds = await Involved.all();

    if (!project) return response.redirect().toRoute("project.index");
    await project.load("phases", function (query) {
      return query.preload("involved").preload("area").preload("superviced");
    });
    // console.log(project.toJSON());

    return view.render("dashboard/project/phases/index", {
      project,
      phaseStatus,
      areas,
      involveds,
    });
  }

  public async store({ response, params, request }: HttpContextContract) {
    const { involveds, ...dataPhase } = request.body();

    const phase = await Phase.create({
      ...dataPhase,
      projectId: params.id,
    });

    const involvedObject = involveds
      .filter((i) => i.id)
      .reduce((obj, item) => {
        obj[item.id] = { labour: item.labour };
        return obj;
      }, {});

    await phase.related("involved").attach(involvedObject);

    return response.redirect().toRoute("phase.index", { id: params.id });
  }

  public async destroy({ params, response }: HttpContextContract) {
    const phase = await Phase.findByOrFail("id", params.phaseId);

    await phase.delete();

    return response.redirect().toRoute("phase.index", { id: params.id });
  }

  public async supervised({ params, response, view }: HttpContextContract) {
    const phase = await Phase.findByOrFail("id", params.phaseId);
    await phase.load("project");

    return view.render("dashboard/project/phases/supervised", { phase });
  }

  public async supervisedStore({
    params,
    response,
    request,
  }: HttpContextContract) {
    const { createdBy, numberCi, description } = request.body();

    const phase = await Phase.findByOrFail("id", params.phaseId);
    const phaseS = new PhaseSupervised();
    phaseS.createdBy = createdBy;
    phaseS.numberCi = numberCi;
    phaseS.description = description;
    await phase.related("superviced").save(phaseS);

    // await phase.merge({ isSupervised: !phase.isSupervised })
    //   .save()

    return response.redirect().toRoute("phase.index", { id: params.id });
  }
}
