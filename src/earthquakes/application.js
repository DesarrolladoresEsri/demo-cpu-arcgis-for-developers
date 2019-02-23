var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
define(["require", "exports", "esri/views/MapView", "esri/layers/GeoJSONLayer", "esri/renderers/visualVariables/SizeVariable", "esri/WebMap", "esri/renderers", "esri/symbols"], function (require, exports, MapView, GeoJSONLayer, SizeVariable, WebMap, renderers_1, symbols_1) {
    "use strict";
    var _this = this;
    Object.defineProperty(exports, "__esModule", { value: true });
    var view;
    (function () { return __awaiter(_this, void 0, void 0, function () {
        var layer, map;
        return __generator(this, function (_a) {
            layer = new GeoJSONLayer({
                url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson",
                title: "USGS Earthquakes",
                copyright: "USGS",
                elevationInfo: {
                    mode: "absolute-height",
                    unit: "kilometers",
                    featureExpressionInfo: {
                        expression: "Geometry($feature).z * -1"
                    }
                },
                renderer: new renderers_1.UniqueValueRenderer({
                    valueExpression: "\n        var eqTime = $feature.time;\n        var timeDiff = DateDiff ( now() , eqTime , 'hours' );\n        var returnString = When(\n            timeDiff <= 1, \"hour\",\n            timeDiff > 1 && timeDiff <= 24, \"day\",\n            timeDiff > 24, \"week\", \"other\"\n        );\n      ",
                    defaultSymbol: new symbols_1.SimpleMarkerSymbol({
                        color: "black",
                        size: "10px",
                        outline: {
                            width: "1px",
                            color: "white"
                        }
                    }),
                    defaultLabel: "Not Reported",
                    uniqueValueInfos: [{
                            value: "hour",
                            label: "Last Hour",
                            symbol: new symbols_1.SimpleMarkerSymbol({
                                color: [255, 0, 0, 0.5],
                                outline: {
                                    color: [255, 255, 255, 0.25]
                                }
                            }),
                        }, {
                            value: "day",
                            label: "Last Day",
                            symbol: new symbols_1.SimpleMarkerSymbol({
                                color: [230, 152, 0, 0.5],
                                outline: {
                                    color: [255, 255, 255, 0.25]
                                }
                            }),
                        }, {
                            value: "week",
                            label: "Last Week",
                            symbol: new symbols_1.SimpleMarkerSymbol({
                                color: [140, 140, 131, 0.25],
                                outline: {
                                    color: [255, 255, 255, 0.25]
                                }
                            }),
                        }],
                    visualVariables: [
                        new SizeVariable({
                            field: "mag",
                            legendOptions: {
                                title: "Magnitude"
                            },
                            stops: [{
                                    value: 2.5,
                                    size: 4,
                                    label: "> 2.5"
                                }, {
                                    value: 7,
                                    size: 40,
                                    label: "> 7"
                                }]
                        })
                    ]
                })
            });
            map = new WebMap({
                basemap: "oceans",
                ground: "world-topobathymetry",
                layers: [layer]
            });
            view = new MapView({
                container: "viewDiv",
                zoom: 3,
                map: map
            });
            return [2 /*return*/];
        });
    }); })();
});
//# sourceMappingURL=application.js.map