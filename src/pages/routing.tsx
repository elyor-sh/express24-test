import React from 'react';
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom'
import {Home} from "@/pages/home";
import {Layout} from "@/shared/ui";
import {Header} from "@/widgets/header";
import {Footer} from "@/widgets/footer";
import {routePaths} from "@/shared/config";
import {normalizeRoutePaths} from "@/shared/lib";

const router = createBrowserRouter([
    {
        element: <Layout
            header={<Header/>}
            footer={<Footer/>}
        >
            <Outlet/>
        </Layout>,
        children: [
            {
                path: normalizeRoutePaths(routePaths.home),
                element: <Home/>
            }
        ]
    }
]);

const Routing = () => {
    return (
        <RouterProvider router={router}/>
    );
};

export {Routing}