"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = /** @class */ (function () {
    function Routes(app, routeController) {
        this.routeController = routeController;
        this.configureRoutes(app);
    }
    Routes.prototype.configureRoutes = function (app) {
        app.route("/users")
            .post(this.routeController.addUser);
        app.route("/users/:userid/proposals")
            .get(this.routeController.getUserProposals);
    };
    return Routes;
}());
exports.Routes = Routes;
