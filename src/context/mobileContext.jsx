import React, {createContext, useContext, useState, useEffect} from 'react';

const MobileContext = createContext();

const MobileContextProvider = ({children}) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth >= window.innerHeight ? false : true);

    //when the window is resized, check to see if the user is in landscape or portrait
    window.onresize = () => {
        setIsMobile(window.innerWidth >= window.innerHeight ? false : true);
    };

    //when the user changes between portrait and landscape, import or remove the mobile stylesheet
    useEffect(() => {
        if (isMobile) {

            //the user is using a mobile (or in portrait mode)
            import ('../mobileStyles.scss');
            sessionStorage.setItem('previouslyMobile', 'true');
            document.getElementById('potentialGapCreator').classList.add('mobileGap');
        }
        else if (sessionStorage.getItem('previouslyMobile') == 'true') {

            //if the user is now using a mobile, and was previously
            sessionStorage.removeItem('previouslyMobile');
            window.location.reload();
        };
    }, [isMobile]);

    return <MobileContext.Provider value={isMobile}>
        {children}
    </MobileContext.Provider>
};

const useIsMobile = () => {
    return useContext(MobileContext);
};

export {MobileContextProvider, useIsMobile};