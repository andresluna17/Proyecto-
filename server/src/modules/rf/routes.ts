import { Express } from "express";
import { NovedadesRouteController } from "./routeControllers/novedades.routeController";

export class Routes {
  private routeController: NovedadesRouteController;

  constructor(app: Express, routeController: NovedadesRouteController) {
    this.routeController = routeController;
    this.configureRoutes(app);
  }

  private configureRoutes(app: Express) {
    app.route("/novedad").post(this.routeController.addNovedad).get(this.routeController.getNovedadAll);
    app.route("/novedad/:novedadId").get(this.routeController.getNovedadId).put(this.routeController.updateNovedad);
  }
}
