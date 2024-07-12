import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FancyButton from './fancyButton.jsx';

export default function Header() {

    const navigate = useNavigate();

    function getHeaderSections() {
        let headerSectionsHTML = [];
        let pages = [
            [
                'Headstarter',
                'headstarter',
            ],
            [
                'Elite 1-to-1',
                'elite1To1',
            ],
            [
                'Schools',
                'supportForSchools',
            ],
            [
                'Blog',
                'blog',
            ],
            [
                'Home',
                '',
            ],
            [
                'Resources',
                'resources',
            ],
            [
                'About',
                'about',
            ],
        ];

        pages.forEach((page) => {
            let frontendName = page[0];
            let backendName = page[1];

            //make sure the current page does not show on the header
            let thisPage = window.location.href.split('/').at(-1);
            if (thisPage != backendName) {

                //add this page to header html
                headerSectionsHTML.push(
                    <React.Fragment>
                        <td>
                            <div className="headerCellWrapper">
                                <FancyButton onClick={() => {navigate(`/${backendName}`)}} short={true}>
                                    <h3 className="noVerticalSpacing">
                                        {frontendName}
                                    </h3>
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