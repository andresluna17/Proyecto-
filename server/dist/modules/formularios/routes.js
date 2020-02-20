"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = /** @class */ (function () {
    function Routes(app, routeController) {
        this.routeController = routeController;
        this.configureRoutes(app);
    }
    Routes.prototype.configureRoutes = function (app) {
        app.route("/formularios").get(this.routeController.getanalistas);
    };
    return Routes;
}());
exports.Routes = Routes;
