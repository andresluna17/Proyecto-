"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("../../../database");
var NovedadesRepository = /** @class */ (function () {
    function NovedadesRepository() {
    }
    // private userDatabase: {[key: string]: User} = {};
    NovedadesRepository.prototype.addNewNovedad = function (novedad) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query("INSERT INTO novedades SET ?", [novedad])];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, conn.query("SELECT * FROM  novedades WHERE id = LAST_INSERT_ID();")];
                    case 3:
                        res = _a.sent();
                        return [2 /*return*/, res[0][0]];
                }
            });
        });
    };
    NovedadesRepository.prototype.getUserId = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query("SELECT * FROM  novedades WHERE id = ?", userId)];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, res[0][0]];
                }
            });
        });
    };
    NovedadesRepository.prototype.getUserAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var conn, res, index, analista, tipo_novedad, estado_novedad, getanalista, gettipo, getestado;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query("SELECT * FROM  novedades")];
                    case 2:
                        res = _a.sent();
                        index = 0;
                        _a.label = 3;
                    case 3:
                        if (!(index < res[0].length)) return [3 /*break*/, 8];
                        analista = res[0][index]["analista"];
                        tipo_novedad = res[0][index]["tipo_novedad"];
                        estado_novedad = res[0][index]["estado_novedad"];
                        return [4 /*yield*/, conn.query("SELECT * FROM  analistas WHERE id= ?", analista)];
                    case 4:
                        getanalista = _a.sent();
                        return [4 /*yield*/, conn.query("SELECT * FROM  tipos_Novedades WHERE id= ?", tipo_novedad)];
                    case 5:
                        gettipo = _a.sent();
                        return [4 /*yield*/, conn.query("SELECT * FROM  estados_novedad WHERE id= ?", tipo_novedad)];
                    case 6:
                        getestado = _a.sent();
                        res[0][index]["analista"] =
                            getanalista[0][0]["nombres"] + " " + getanalista[0][0]["apellidos"];
                        res[0][index]["tipo_novedad"] = gettipo[0][0]["nombre"];
                        res[0][index]["estado_novedad"] = getestado[0][0]["nombre"];
                        _a.label = 7;
                    case 7:
                        index++;
                        return [3 /*break*/, 3];
                    case 8: return [2 /*return*/, res[0]];
                }
            });
        });
    };
    NovedadesRepository.prototype.updateUserr = function (id, novedad) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query("UPDATE novedades SET ? WHERE id= ?", [novedad, id])];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, conn.query("SELECT * FROM  novedades WHERE id = ?", id)];
                    case 3:
                        res = _a.sent();
                        return [2 /*return*/, res[0][0]];
                }
            });
        });
    };
    return NovedadesRepository;
}());
exports.NovedadesRepository = NovedadesRepository;
