import { Express } from "express";
import { AnalistasRouteController } from "./routeControllers/analistas.routeController";

export class Routes {
  private routeController: AnalistasRouteController;

  constructor(app: Express, routeController: AnalistasRouteController) {
    this.routeController = routeController;
    this.configureRoutes(app);
  }

  private configureRoutes(app: Express) {
    app.route("/analista").post(this.routeController.addAnalista).get(this.routeController.getAnalistaAll);
    app.route("/analista/:analistaId").get(this.routeController.getAnalistaId).put(this.routeController.updateAnalista);
  }
}
