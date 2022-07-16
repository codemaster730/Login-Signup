import React from 'react';
import { matchPath, Route, Switch } from 'react-router-dom';
import _ from 'lodash';

const matched = (path, routes) => {
    let result = null;
    _.forEach(routes, route => {
        if (route.routes) {
            matched(path, route.routes);
        } else {
            const matchedRoute = matchPath(path, route);
            if (matchedRoute && matchedRoute.isExact) {
                result = route;
            };
        }
    });

    return result;
}
export {
    matched
}

const RouteWithSubRoutes = (route) => (
    <Route
        path={route.path}
        exact={route.exact}
        render={props => <route.component {...props} routes={route.routes} />} />
);


const RenderRoutes = ({ routes }) => (
    <Switch>
        {routes.map(route => <RouteWithSubRoutes key={route.key} {...route} />)}
    </Switch>
);
export default RenderRoutes;