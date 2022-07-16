import React from 'react';
import loadable from '@loadable/component';

const routes = [
    {
        path: '/',
        key: 'ROOT',
        layout: 'Layout2', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../pages/Home'), {
            fallback: <div>Loading Home Page</div>
        })
    },
    {
        path: '/signup',
        key: 'ROOT',
        layout: 'Layout1', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../pages/Signup'), {
            fallback: <div>Loading SignUp Page</div>
        })
    },
    {
        path: '/signin',
        key: 'ROOT',
        layout: 'Layout1', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../pages/Signin'), {
            fallback: <div>Loading SignIn Page</div>
        })
    },
    {
        path: '/contact',
        key: 'ROOT',
        layout: 'Layout2', // The topped Layout Name
        exact: true,
        component: loadable(() => import('./../pages/Contact'), {
            fallback: <div>Loading Contact Page</div>
        })
    },
];

export default routes;
