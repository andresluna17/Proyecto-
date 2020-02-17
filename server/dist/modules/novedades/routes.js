"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = /** @class */ (function () {
    function Routes(app, routeController) {
        this.routeController = routeController;
        this.configureRoutes(app);
    }
    Routes.prototype.configureRoutes = function (app) {
        app.route("/novedad").post(this.routeController.addNovedad).get(this.routeController.getNovedadAll);
        app.route("/novedad/:novedadId").get(this.routeController.getNovedadId).put(this.routeController.updateNovedad);
    };
    return Routes;
}());
exports.Routes = Routes;
