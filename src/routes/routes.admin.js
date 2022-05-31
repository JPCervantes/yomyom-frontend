import { AdminLayout } from '../layouts';
import { CategoriesAdmin, PlatesAdmin, Menu } from '../pages/Admin';
import { Home } from '../pages'

const routesAdmin = [
    {
        path: "home", 
        layout: AdminLayout,
        component: Home
    },
    {
        path: "admin/menu", 
        layout: AdminLayout,
        component: Menu
    },
    {
        path: "admin/categories", 
        layout: AdminLayout,
        component: CategoriesAdmin
    },
    {
        path: "/admin/plates", 
        layout: AdminLayout,
        component: PlatesAdmin
    }
];

export default routesAdmin;