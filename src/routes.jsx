import React, {Component} from 'react';
import {Route, Routes} from 'react-router-dom';

//import all pages
import Headstarter from './components/pages/headstarter/headstarter.jsx';
import Elite1To1 from './components/pages/elite1To1/elite1To1.jsx';
import SupportForSchools from './components/pages/supportForSchools/supportForSchools.jsx';
import Resources from './components/pages/resources/resources.jsx';
import Blog from './components/pages/blog/blog.jsx';
import Home from './components/pages/home/home.jsx';

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
            headstarter: <Headstarter/>,
            elite1To1: <Elite1To1/>,
            supportForSchools: <SupportForSchools/>,
            resources: <Resources/>,
            blog: <Blog/>,
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