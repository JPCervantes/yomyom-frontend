import routesAdmin from "./routes.admin";
import { Error404 } from '../pages';
import { BasicLayout } from '../layouts';
import { IntroTest } from "../pages";

const routes = [
    ...routesAdmin,
    {
        path: "/", 
        layout: BasicLayout,
        component: IntroTest
    },
    { layout: BasicLayout,
    component: Error404,
}];

export default routes;