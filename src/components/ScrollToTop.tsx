import React, {useEffect} from 'react';
import {useLocation} from "react-router";

export default function ScrollToTop():React.ReactElement {

    const location = useLocation();

    //scroll to the top of the page every time the location changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <></>
}