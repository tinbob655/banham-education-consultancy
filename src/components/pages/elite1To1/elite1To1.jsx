import React from 'react';
import SmartImage from '../../multiPage/smartImage.jsx';
import InterestedGetInTouchHere from '../../multiPage/interestedGetInTouchHereButton.jsx';

export default function Elite1To1() {
    return(
        <React.Fragment>
            <h1 style={{marginBottom: 0, paddingBottom: 0}}>
                Elite level 1-to-1 tutoring
            </h1>
            <p className="noVerticalSpacing">
                A new take on learning
            </p>

            <div className="dividerLine"></div>

            {/*one session, instant results section*/}
            <table>
                <thead>
                    <tr>
                        <td>
                            <SmartImage imageURL='ELITE_1_TO_1_IMAGE_URL' imageClasses="mainImage" />
                        </td>
                        <td style={{width: '60%'}}>
                            <h2>
                                One session, instant results
                            </h2>
                            <p>
                                Our new and revolutionary method of tutoring means that we teach you the skills to learn, rather than the content. This guarantees results immediately and only requires a single session with us. That means no recurring billing, no seemingly endless sessions, and instant improvement.
                            </p>
                            <InterestedGetInTouchHere/>
                        </td>
                    </tr>
                </thead>
            </table>

            <div className="dividerLine"></div>

            {/*upskilling section*/}
            <table>
                <thead>
                    <tr>
                        <td style={{width: '60%'}}>
                            <h2>
                                Become upskilled
                            </h2>
                            <p>
                                In order to grasp an understanding of school content, be that GCSE or A-Level, it is crucial that you learn how to learn. This session will do just that, at a low price of ~£40 (price may vary), learning has never been easier
                            </p>
                        </td>
                        <td>
                            <SmartImage imageURL='UPSKILLED_IMAGE' imageClasses="mainImage" />
                        </td>
                    </tr>
                </thead>
            </table>
        </React.Fragment>
    );
};