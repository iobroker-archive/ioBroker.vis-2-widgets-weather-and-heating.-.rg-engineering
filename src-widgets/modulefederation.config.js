const makeFederation = require("@iobroker/vis-2-widgets-react-dev/modulefederation.config");

module.exports = makeFederation(
    "vis2WeatherHeatingWidgets", // internal name of package - must be unique and identical with io-package.json=>common.visWidgets.vis2demoWidget
    {
        "./GeneralEChartWidget": "./src/GeneralEChartWidget",

        "./WeatherWidget": "./src/WeatherWidget", // List of all widgets in this package
        "./WeatherDayWidget": "./src/WeatherDayWidget",
        "./WeatherMeteoredWidget": "./src/WeatherMeteoredWidget",

        "./HeatingTimeScheduleWidget": "./src/HeatingTimeScheduleWidget",
        "./HeatingGeneralParamsWidget": "./src/HeatingGeneralParamsWidget",
        "./HeatingRoomWidget": "./src/HeatingRoomWidget",
        "./HeatingRoomsOverviewWidget": "./src/HeatingRoomsOverviewWidget",
        "./HeatingRomProfileParamsWidget": "./src/HeatingRoomProfileParamsWidget",
        "./HeatingWindowStatusOverviewWidget": "./src/HeatingWindowStatusOverviewWidget",

        "./translations": "./src/translations",
    },
);
