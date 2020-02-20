import {Express} from "express";
import {formulariosRouteController} from "./routeControllers/formularios.routeController";
import {Routes} from "./routes";

export class FormulariosModule {
    public routes: Routes;

    constructor(app: Express) {
        this.routes = new Routes(app, new formulariosRouteController());
    }
}
