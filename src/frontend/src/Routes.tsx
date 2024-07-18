import AboutUs from "./Pages/AboutUs";
import CreateOrder from "./Pages/CreateOrder";
import Home from "./Pages/Home";
import Orders from "./Pages/Orders";

interface RouteConfig {
    path: string;
    element: React.ReactNode;
}

const routes: RouteConfig[] = [
    { path: '/', element: <Home />, },
    { path: '/about-us', element: <AboutUs /> },
    { path: '/orders', element: <Orders /> },
    { path: '/create-order', element: <CreateOrder /> },
];

export default routes;
