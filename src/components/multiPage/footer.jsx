import React from 'react';
import SmartImage from './smartImage.jsx';
import { Link } from 'react-router-dom';

export default function Footer() {

    function getPagesLinks() {

        const allPages = [
            [
                '',
                'Home'
            ],
            [
                'about',
                'About Us'
            ],
            [
                'blog',
                'Our Blog'
            ],
        ];

        let pagesHTML = [];

        allPages.forEach((page) => {
            pagesHTML.push(
                <React.Fragment>=
                    <Link to={`/${page[0]}`}>
                    <h3 style={{marginTop: '10px', marginBottom: '10px', paddingTop: 0, paddingBottom: 0}}>
                        {page[1]}
                    </h3>
                    </Link>
                </React.Fragment>
            );
        });

        return pagesHTML;
    };

    function getProgrammesLinks() {

        const allProgrammes = [
            [
                'headstarter',
                'Our Headstarter Programme',
            ],
            [
                'elite1To1',
                'Our Elite 1-To-1 Programme'
            ],
            [
                'supportForSchools',
                'Our Schools Programme'
            ],
            [
                'resources',
                'Resources We Recommend'
            ],
        ];

        let programmesHTML = [];

        allProgrammes.forEach((programme) => {
            programmesHTML.push(
                <React.Fragment>
                    <Link to={`/${programme[0]}`}>
                        <h3 style={{marginTop: '10px', marginBottom: '10px', paddingTop: 0, paddingBottom: 0}}>
                            {programme[1]}
                        </h3>
                    </Link>
                </React.Fragment>
            );
        });

        return programmesHTML;
    };

    return (
        <React.Fragment>
            <div id="footerWrapper">
                <table style={{width: '50%'}}>
                    <thead>
                        <tr>
                            <td>
                                {getPagesLinks()}
                            </td>
                            <td>
                                {getProgrammesLinks()}
                            </td>
                        </tr>
                    </thead>
                </table>
                <p>
                    All rights reserved Banham Education Consultancy ®
                    <br/><br/>
                    Website created by William Rutland. Want one for your business? Email me at wrutland07@gmail.com or book me <a href="https://www.fiverr.com/s/yvdyj7A" style={{textDecoration: 'underline'}} target="_blank">through fiverr</a>
                </p>

                <div className="dividerLine"></div>

                <SmartImage imagePath="logo/logoFull.png" imageClasses="mainImage" imageStyles={{height: '40vh', marginTop: '100px', marginBottom: '50px'}} />

                <div className="dividerLine" style={{border: '2px solid transparent', marginBottom: 0}}></div>
            </div>
        </React.Fragment>
    );
};