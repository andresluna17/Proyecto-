"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formularios_routeController_1 = require("./routeControllers/formularios.routeController");
var routes_1 = require("./routes");
var FormulariosModule = /** @class */ (function () {
    function FormulariosModule(app) {
        this.routes = new routes_1.Routes(app, new formularios_routeController_1.formulariosRouteController());
    }
    return FormulariosModule;
}());
exports.FormulariosModule = FormulariosModule;
