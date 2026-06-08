import React from 'react';
import {Route, Routes} from 'react-router';

//import all pages
import Home from "./pages/home/Home.tsx";
import About from "./pages/about/About.tsx";
import Admin from "./pages/admin/Admin.tsx";
import General from "./pages/general/General.tsx";
import History from "./pages/history/History.tsx";
import Resources from "./pages/resources/Resources.tsx";
import Students from "./pages/students/Students.tsx";
import Tutoring from "./pages/tutoring/Tutoring.tsx";

const routeInfo:[string, React.ComponentType][] = [
    ['', Home],
    ['about', About],
    ['admin', Admin],
    ['general', General],
    ['history', History],
    ['resources', Resources],
    ['students', Students],
    ['tutoring', Tutoring],
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