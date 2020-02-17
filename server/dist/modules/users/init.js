"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_routeController_1 = require("./routeControllers/users.routeController");
var routes_1 = require("./routes");
var UsersModule = /** @class */ (function () {
    function UsersModule(app) {
        this.routes = new routes_1.Routes(app, new users_routeController_1.UsersRouteController());
    }
    return UsersModule;
}());
exports.UsersModule = UsersModule;
