import { Express } from "express";
import { formulariosRouteController } from "./routeControllers/formularios.routeController";

export class Routes {
  private routeController: formulariosRouteController;

  constructor(app: Express, routeController: formulariosRouteController) {
    this.routeController = routeController;
    this.configureRoutes(app);
  }

  private configureRoutes(app: Express) {
    app.route("/formularios").get(this.routeController.getanalistas);
  }
}
