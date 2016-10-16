"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var services_component_1 = require('./services.component');
var appRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'service',
        component: services_component_1.ServicesComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map