"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var novedades_routeController_1 = require("./routeControllers/novedades.routeController");
var routes_1 = require("./routes");
var NovedadesModule = /** @class */ (function () {
    function NovedadesModule(app) {
        this.routes = new routes_1.Routes(app, new novedades_routeController_1.NovedadesRouteController());
    }
    return NovedadesModule;
}());
exports.NovedadesModule = NovedadesModule;
