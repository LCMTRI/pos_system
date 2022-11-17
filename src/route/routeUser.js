import React from 'react';
import Intro from '../pages/Intro/Intro';
import Menu from '../pages/Menu/Menu';
import Reservation from '../pages/Reservation/Reservation';
import Dashboard from '../pages/Dashboard/Dashboard'

const routesUser = [
    {
        type: "collapse",
        name: "Dashboard",
        key: "dashboard",
        route: "/dashboard",
        component: <Dashboard />,
    },
    {
        type: "collapse",
        name: "Tables",
        key: "tables",
        route: "/reservation",
        component: <Reservation />,
    },
    // {
    //     type: "collapse",
    //     name: "Sign In",
    //     key: "sign-in",
    //     icon: <Icon fontSize="small">login</Icon>,
    //     route: "/authentication/sign-in",
    //     component: <SignIn />,
    // },
    // {
    //     type: "collapse",
    //     name: "Sign Up",
    //     key: "sign-up",
    //     icon: <Icon fontSize="small">assignment</Icon>,
    //     route: "/authentication/sign-up",
    //     component: <SignUp />,
    // },
];


export default routesUser;
