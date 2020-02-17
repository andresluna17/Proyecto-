"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var analistas_routeController_1 = require("./routeControllers/analistas.routeController");
var routes_1 = require("./routes");
var AnalistasModule = /** @class */ (function () {
    function AnalistasModule(app) {
        this.routes = new routes_1.Routes(app, new analistas_routeController_1.AnalistasRouteController());
    }
    return AnalistasModule;
}());
exports.AnalistasModule = AnalistasModule;
