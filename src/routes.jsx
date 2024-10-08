import React, {Component} from 'react';
import {Route, Routes} from 'react-router-dom';

//import all pages
import Students from './components/pages/students/students.jsx';
import Elite1To1 from './components/pages/elite1To1/elite1To1.jsx';
import GeneralCPD from './components/pages/generalCPD/generalCPD.jsx';
import Resources from './components/pages/resources/resources.jsx';
import Blog from './components/pages/resources/blog/blog.jsx';
import Home from './components/pages/home/home.jsx';
import About from './components/pages/about/about.jsx';
import Admin from './components/pages/admin/admin.jsx';
import History from './components/pages/history/history.jsx';

class AllRoutes extends Component {

    render() {
        return (
            <Routes>
                {this.getRoutes()}
            </Routes>
        );
    };

    getRoutes() {
        const pages = {
            home: <Home/>,
            students: <Students/>,
            elite1To1: <Elite1To1/>,
            generalCPD: <GeneralCPD/>,
            resources: <Resources/>,
            blog: <Blog/>,
            about: <About/>,
            admin: <Admin/>,
            history: <History/>,
        };
        let routeHTML = [];

        //make the index route
        routeHTML.push(
            <Route path='/' element={<Home/>}/>
        );

        //make all the other routes
        for (let page in pages) {

            routeHTML.push(
                <Route exact path={'/'+page} element={pages[page]} />
            );
        };

        return routeHTML;
    };
};

export default AllRoutes;