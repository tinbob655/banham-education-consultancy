import React from 'react';
import SmartImage from '../../multiPage/smartImage.jsx';
import InterestedGetInTouchHere from '../../multiPage/interestedGetInTouchHereButton.jsx';
import { Link } from 'react-router-dom';

export default function History() {
    return(
        <React.Fragment>
            <h1 style={{marginBottom: 0}}>
                History
            </h1>
            <p className="noVerticalSpacing">
                Our strongest subject
            </p>

            <div className="dividerLine"></div>

            {/*lead by banham section*/}
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <SmartImage imageURL='BANHAM_IMAGE' imageClasses="mainImage" />
                                <p>"QUOTE_FROM_BANHAM"</p>
                            </td>
                            <td style={{width: '60%'}}>
                                <h2>
                                    History at Banham Education Consultancy
                                </h2>
                                <p>
                                    Our History department is lead by Dale Banham: our chief tutor. He has had decades of experience in education, working as the head of teaching and learning at Northgate High School for a large amount of this. He is also the author of several leading history textbooks which can be found on our resources page. For great education, choose Banham Education Consultancy.
                                </p>
                                <Link to="/about">
                                    <h3>
                                        Read more about our team →
                                    </h3>
                                </Link>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className="dividerLine"></div>

            {/*what we offer section*/}
            <div>
                <table>
                    <thead>
                        <tr>
                            <td style={{width: '60%'}}>
                                <h2>
                                    Your options
                                </h2>
                                <p>
                                    We offer several different programmes which can get you up to speed or ahead of the game in History. Firstly, there is our Elite 1-to-1 tutoring. This involves a meeting with Dale Banham in which you can be caught-up on any content you might have missed or not fully grasped. Then, there's our headstarter programme. This is for students in years 10/12 who want to get ahead before they start their new history course. Finally, our support for schools programme will involve a lecture to a large group of students about any historical topics, again conducted by Dale Banham.
                                </p>
                                <InterestedGetInTouchHere/>
                            </td>
                            <td>
                                <SmartImage imageURL='OUR_PROGRAMMES' imageClasses="mainImage" />
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        </React.Fragment>
    );
};