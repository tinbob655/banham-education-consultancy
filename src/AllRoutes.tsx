import React from 'react';
import {Route, Routes} from 'react-router';

//import all pages
import Home from "./components/pages/home/Home.tsx";
import About from "./components/pages/about/About.tsx";
import Admin from "./components/pages/admin/Admin.tsx";
import General from "./components/pages/general/General.tsx";
import History from "./components/pages/history/History.tsx";
import Resources from "./components/pages/resources/Resources.tsx";
import Students from "./components/pages/students/Students.tsx";
import Tutoring from "./components/pages/tutoring/Tutoring.tsx";
import Blog from "./components/pages/blog/Blog.tsx";

const routeInfo:[string, React.ComponentType][] = [
    ['', Home],
    ['about', About],
    ['admin', Admin],
    ['general', General],
    ['history', History],
    ['resources', Resources],
    ['students', Students],
    ['tutoring', Tutoring],
    ['blog', Blog]
]

export default function AllRoutes():React.ReactElement {

    return(
        <Routes>
            {routeInfo.map(([path, Component]):React.ReactNode =>
                <Route path={`/${path}`} element={<Component/>} key={`${path}Page`} />
            )}
        </Routes>
    )
}