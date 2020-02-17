import {Express} from "express";
import {AnalistasRouteController} from "./routeControllers/analistas.routeController";
import {Routes} from "./routes";

export class AnalistasModule {
    public routes: Routes;

    constructor(app: Express) {
        this.routes = new Routes(app, new AnalistasRouteController());
    }
}
