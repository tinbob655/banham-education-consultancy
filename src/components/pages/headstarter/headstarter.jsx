import React from 'react';
import SmartImage from '../../multiPage/smartImage.jsx';
import InterestedGetInTouchHere from '../../multiPage/interestedGetInTouchHereButton.jsx';

export default function Headstarter() {
    return(
        <React.Fragment>
            <h1 style={{marginBottom: 0}}>
                Our headstarter programme
            </h1>
            <p className="noVerticalSpacing">
               Hit the ground running 
            </p>

            <div className="dividerLine"></div>

            {/*description section*/}
            <table>
                <thead>
                    <tr>
                        <td>
                            <SmartImage imageURL='IMAGE_URL' imageClasses='mainImage' />
                        </td>
                        <td style={{width: '60%'}}>
                            <h2>
                                What is our headstarter programme?
                            </h2>
                            <p>
                                HEADSTARTER_PROGRAMME_DESCRIPTION <br/>
                                Adipisicing in nisi elit amet officia.Laboris tempor non enim nostrud tempor irure commodo duis culpa proident.Sint anim pariatur pariatur nisi minim magna proident magna nostrud.Cillum dolore consectetur mollit anim ad amet irure aliquip veniam et qui.Et adipisicing dolor reprehenderit eu excepteur est sunt.
                            </p>

                            <InterestedGetInTouchHere/>
                        </td>
                    </tr>
                </thead>
            </table>
        </React.Fragment>
    );
};