import React from 'react';
import SmartImage from './smartImage.jsx';
import { useIsMobile } from '../../context/mobileContext.jsx';

export default function Footer() {

    const isMobile = useIsMobile();

    return (
        <React.Fragment>
            <div id="footerWrapper">
                <p style={{marginTop: '10vh'}}>
                    All rights reserved Banham Education Consultancy ®
                    <br/><br/>
                    Website created by William Rutland. Want one for your business? Email me at wrutland07@gmail.com or book me <a href="https://www.fiverr.com/s/yvdyj7A" style={{textDecoration: 'underline'}} target="_blank">through fiverr</a>
                </p>

                <div className="dividerLine"></div>

                <SmartImage imagePath="logo/logoFull.png" imageClasses="mainImage" imageStyles={!isMobile ? {height: '40vh', marginTop: '100px', marginBottom: '50px', width: 'auto'} : {height: 'auto', width: '95%', marginTop: '100px', marginBottom: '50px'}} />

                <div className="dividerLine" style={{border: '2px solid transparent', marginBottom: 0}}></div>
            </div>
        </React.Fragment>
    );
};