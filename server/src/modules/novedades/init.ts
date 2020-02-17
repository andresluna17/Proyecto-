import {Express} from "express";
import {NovedadesRouteController} from "./routeControllers/novedades.routeController";
import {Routes} from "./routes";

export class NovedadesModule {
    public routes: Routes;

    constructor(app: Express) {
        this.routes = new Routes(app, new NovedadesRouteController());
    }
}
