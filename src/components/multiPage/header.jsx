import React from 'react';
import { useNavigate } from 'react-router-dom';
import FancyButton from './fancyButton.jsx';

export default function Header() {

    const navigate = useNavigate();

    function getHeaderSections() {
        let headerSectionsHTML = [];
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
};