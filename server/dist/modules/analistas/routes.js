"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = /** @class */ (function () {
    function Routes(app, routeController) {
        this.routeController = routeController;
        this.configureRoutes(app);
    }
    Routes.prototype.configureRoutes = function (app) {
        app.route("/analista").post(this.routeController.addAnalista).get(this.routeController.getAnalistaAll);
        app.route("/analista/:analistaId").get(this.routeController.getAnalistaId).put(this.routeController.updateAnalista);
    };
    return Routes;
}());
exports.Routes = Routes;
