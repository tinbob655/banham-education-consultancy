import React from 'react';
import SmartImage from '../../multiPage/smartImage.jsx';
import InterestedGetInTouchHere from '../../multiPage/interestedGetInTouchHereButton.jsx';
import {useIsMobile} from '../../../context/mobileContext.jsx';

export default function Students() {

    const isMobile = useIsMobile();

    //desktop students page
    if (!isMobile) {
        return(
            <React.Fragment>
                <h1 style={{marginBottom: 0}}>
                    Learning how to revise
                </h1>
                <p className="noVerticalSpacing">
                   Transform your exam performance
                </p>
    
                <div className="dividerLine"></div>
    
                {/*description section*/}
                <table>
                    <thead>
                        <tr>
                            <td>
                                <SmartImage imagePath="logo/logoFull.png" imageClasses='mainImage' />
                            </td>
                            <td style={{width: '60%'}}>
                                <h2>
                                    How can our student revision conferences improve your exam results? 
                                </h2>
                                <p className="alignLeft">
                                    Our student revision conferences take place during the school holidays and are aimed at students who want to improve their exam performance. Students who attend are taught tried and tested techniques for boosting memory and a set of revision strategies that they can apply to a range of subjects. In addition, they will be provided with model revision timetables and links to additional free online resources that can help them prepare effectively for their upcoming exams. 
                                    We offer the following support:
                                </p>
                                <p className="alignRight">
                                    •	A one day, <b> summer holiday conference for Year 10 students </b> who are disappointed with their performance in Y10 end of year exams and want to develop successful revision techniques before they start Year 11.  This conference includes booster sessions for English and Maths.
                                </p>
    
                                <div className="dividerLine weakDivider"></div>
                                
                                <p className="alignLeft">
                                    •	A one day, <b> February half-term holiday conference for Year 11 students </b> who want to improve on their Year 11 mock exam results. This conference includes booster sessions for English and Maths. If there is the demand, we can also offer booster sessions for Psychology, History, French, Spanish and Law. 
                                </p>
    
                                <div className="dividerLine weakDivider"></div>
                                
                                <p className="alignRight">
                                    •	A one day, <b> summer holiday conference for Year 12 students </b> who are disappointed with their performance in Y12 end of year exams and want to develop successful revision techniques before they start Year 13. We can also offer additional booster sessions for English, Maths, Psychology, History, French, Spanish and Law. 
                                </p>
                                <InterestedGetInTouchHere/>
                            </td>
                        </tr>
                    </thead>
                </table>
            </React.Fragment>
        );
    }

    //mobile students page
    else {
        return (
            <React.Fragment>
                <h1 style={{marginBottom: 0}}>
                    Learning how to revise
                </h1>
                <p className="noVerticalSpacing">
                    Transform your exam performance
                </p>

                <div className="dividerLine"></div>

                {/*description section*/}
                <div>
                    <thead>
                        <tr>
                            <td style={{width: '60%'}}>
                                <SmartImage imagePath="logo/logoFull.png" imageClasses="mainImage" />
                            </td>
                            <td>
                                <h2>
                                    How can your student revision conferences improve your exam results?
                                </h2>
                            </td>
                        </tr>
                    </thead>
                    <p className="alignLeft">
                        Our student revision conferences take place during the school holidays and are aimed at students who want to improve their exam performance. Students who attend are taught tried and tested techniques for boosting memory and a set of revision strategies that they can apply to a range of subjects. In addition, they will be provided with model revision timetables and links to additional free online resources that can help them prepare effectively for their upcoming exams. 
                        We offer the following support:
                    </p>

                    <div className="dividerLine weakDivider"></div>
                    
                    <p className="alignRight">
                        •	A one day, <b> summer holiday conference for Year 10 students </b> who are disappointed with their performance in Y10 end of year exams and want to develop successful revision techniques before they start Year 11.  This conference includes booster sessions for English and Maths.
                    </p>

                    <div className="dividerLine weakDivider"></div>
                    
                    <p className="alignLeft">
                        •	A one day, <b> February half-term holiday conference for Year 11 students </b> who want to improve on their Year 11 mock exam results. This conference includes booster sessions for English and Maths. If there is the demand, we can also offer booster sessions for Psychology, History, French, Spanish and Law. 
                    </p>

                    <div className="dividerLine weakDivider"></div>
                    
                    <p className="alignRight">
                        •	A one day, <b> summer holiday conference for Year 12 students </b> who are disappointed with their performance in Y12 end of year exams and want to develop successful revision techniques before they start Year 13. We can also offer additional booster sessions for English, Maths, Psychology, History, French, Spanish and Law. 
                    </p>
                    <InterestedGetInTouchHere/>
                </div>
            </React.Fragment>
        );
    };
};