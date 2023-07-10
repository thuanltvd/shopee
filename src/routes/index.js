// Layout
import { HeaderOnly } from "~/components/Layout";

import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Search from "~/pages/Search";

const publicRoutes = [
    { path: '/', component: Home  },
    { path: '/login', component: Login, layout : HeaderOnly},
    { path: '/search', component: Search, layout : null}
];

const privateRoutes = [

];

export {privateRoutes, publicRoutes};