"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_businessController_1 = require("../../businessControllers/users.businessController");
var users_repository_1 = require("../../repositories/users.repository");
describe("random test", function () {
    it("should sum the numbers", function () {
        var businessController = new users_businessController_1.UsersBusinessController(new users_repository_1.UsersRepository());
    });
});
