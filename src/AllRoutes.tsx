import React, {lazy} from 'react';
import {Route, Routes} from 'react-router';

//import all pages
const Home = lazy(() => import("./pages/home/Home.tsx"));
const About = lazy(() => import("./pages/about/About.tsx"));
const Admin = lazy(() => import("./pages/admin/Admin.tsx"));
const General = lazy(() => import("./pages/general/General.tsx"));
const History = lazy(() => import("./pages/history/History.tsx"));
const Resources = lazy(() => import("./pages/resources/Resources.tsx"));
const Students = lazy(() => import("./pages/students/Students.tsx"));
const Tutoring = lazy(() => import("./pages/tutoring/Tutoring.tsx"));

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