import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import FancyButton from './fancyButton.jsx';
import {useIsMobile} from '../../context/mobileContext.jsx';
import {Twirl as Hamburger} from 'hamburger-react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate();
    const isMobile = useIsMobile();
    const location  = useLocation();

    let pages = [
        [
            'History',
            'history',
            'CPD',
        ],
        [
            'General',
            'generalCPD',
            'CPD',
        ],
        [
            'Tutoring',
            'elite1to1',
            'Elite 1-to-1',
        ],
        [
            'Home',
            '',
            'Our basecamp',
        ],
        [
            'Students',
            'students',
            'Revision Help',
        ],
        [
            'Resources',
            'resources',
            'Blogs and links',
        ],
        [
            'About',
            'about',
            'Contact us',
        ],
    ];

    function getHeaderSections() {
        let headerSectionsHTML = [];

        pages.forEach((page) => {
            let pageData = {
                frontendName: page[0],
                backendName: page[1],
                description: page[2],
            };

            //make sure the current page does not show on the header
            let thisPage = window.location.href.split('/').at(-1);
            if (thisPage != pageData.backendName) {

                //add this page to header html
                headerSectionsHTML.push(
                    <React.Fragment>
                        <td>
                            <div className="headerCellWrapper">
                                <FancyButton onClick={() => {navigate(`/${pageData.backendName}`)}} short={true}>
                                    <h3 className="noVerticalSpacing" style={{fontWeight: '400'}}>
                                        {pageData.frontendName}
                                    </h3>
                                    <p className="noVerticalSpacing" style={{color: 'white', fontSize: '20px'}}>
                                        {pageData.description}
                                    </p>
                                </FancyButton>
                            </div>
                        </td>
                    </React.Fragment>
                );
            }
        });

        return headerSectionsHTML;
    };

    function getMobileHeaderSections() {
        let mobileHeaderSectionsHTML = [];

        function getMobileHeaderRow(page) {
            let rowHTML = []
            const nextPage = pages[pages.indexOf(page) +1];

            rowHTML.push(
                <td colSpan={nextPage ? 1 : 2}>
                    <Link to={page[1]}>
                        <h3 style={{marginBottom: 0, paddingBottom: 0}}>
                            {page[0]}
                        </h3>
                        <p style={{marginTop: 0, paddingTop: 0}}>
                            {page[2]}
                        </p>
                        <div style={nextPage ? {height: 0} : {height: '10px'}}></div>
                    </Link>
                </td>
            );

            if (nextPage) {
                rowHTML.push(
                    <td style={{borderLeft: '2px solid #444444'}}>
                        <Link to={nextPage[1]}>
                            <h3 style={{marginBottom: 0, paddingBottom: 0}}>
                                {nextPage[0]}
                            </h3>
                            <p style={{marginTop: 0, paddingTop: 0}}>
                                {nextPage[2]}
                            </p>
                        </Link>
                    </td>
                );
            };

            return rowHTML;
        };

        pages.forEach((page) => {

            if (pages.indexOf(page) % 2 === 0) {
                mobileHeaderSectionsHTML.push(
                    <tr>
                        {getMobileHeaderRow(page)}
                    </tr>
                );
            };
        })

        return mobileHeaderSectionsHTML;
    };

    const [mobileHeaderOpened, setMobileHeaderOpened] = useState(false);

    //when the page changes, close the mobile header
    useEffect(() => {

        if (isMobile) {
            setMobileHeaderOpened(false);
            document.getElementById('headerWrapper').classList.remove('opened');
        };
    }, [location]);

    useEffect(() => {

        if (mobileHeaderOpened) {

            //open mobile header
            document.getElementById('headerWrapper').classList.add('opened');
        }
        else {

            //close mobile header
            document.getElementById('headerWrapper').classList.remove('opened');
        };
    }, [mobileHeaderOpened]);

    //desktop header
    if (!isMobile) {
        return(
            <React.Fragment>
                <div id="headerWrapper">
                    <table style={{maxWidth: '97.5vw'}}>
                        <thead>
                            <tr>
                                {getHeaderSections()}
                            </tr>
                        </thead>
                    </table>
                </div>
            </React.Fragment>
        );
    }

    //mobile header
    else {
        return(
            <React.Fragment>
                <div id="headerWrapper">

                    {/*links*/}
                    <div id="headerLinksWrapper" style={{backgroundColor: 'black', borderBottom: '5px solid #ddcb80', marginBottom: '10px'}}>
                        <table>
                            <thead>
                                {getMobileHeaderSections()}
                            </thead>
                        </table>
                    </div>
                    {/*hamburger button*/}
                    <div style={{marginLeft: '5%', width: 'min-content'}}>
                        <Hamburger toggled={mobileHeaderOpened} toggle={setMobileHeaderOpened} direction="right" size={40} color={'rgb(238, 243, 186)'}></Hamburger>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};