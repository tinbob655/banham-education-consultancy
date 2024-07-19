import React from 'react';
import SmartImage from '../../multiPage/smartImage.jsx';
import { useNavigate } from 'react-router-dom';
import FancyButton from '../../multiPage/fancyButton.jsx';
import { Link } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();

    return(
        <React.Fragment>
            <h1 style={{marginBottom: 0, paddingBottom: 0}}>
                Banham Education Consultancy
            </h1>
            <p className="noVerticalSpacing">
                Elevate your education
            </p>

            <div className="dividerLine"></div>

            {/*welcome section*/}
            <div>
                <table style={{width: '90%', margin: 'unset'}}>
                    <thead>
                        <tr>
                            <td>
                                <SmartImage imagePath="logo/logoFull.png" imageClasses="mainImage" imageStyles={{height: '350px'}} />
                            </td>
                            <td>
                                <h2>
                                    High quality education
                                </h2>
                                <p>
                                    Welcome to Banham Education Consultancy: where potential becomes reality. We offer three main services to help students get ahead of the game with their education, and schools improve their technique. These services are:
                                </p>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>

            {/*four main services section*/}
            <div>
                <table style={{maxWidth: 'unset'}}>
                    <thead>
                        <tr>
                            <td>
                                <FancyButton onClick={() => {navigate('/history')}}>
                                    <h3>
                                        Bespoke History CPD
                                    </h3>
                                </FancyButton>
                            </td>
                            <td>
                                <FancyButton onClick={() => {navigate('/supportForSchools')}}>
                                    <h3>
                                        Teaching & learning CPD
                                    </h3>
                                </FancyButton>
                            </td>
                            <td>
                                <FancyButton onClick={() => {navigate('/elite1To1')}}>
                                    <h3>
                                        Elite one-to-one tutoring
                                    </h3>
                                </FancyButton>
                            </td>
                            <td>
                                <FancyButton onClick={() => {navigate('/headstarter')}}>
                                    <h3>
                                        Results boosters
                                    </h3>
                                </FancyButton>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className="dividerLine"></div>

            {/*subjects we offer section*/}
            <div>
                <table>
                    <thead>
                        <tr>
                            <td style={{width: '60%'}}>
                                <h2>
                                    What's on offer?
                                </h2>
                                <p className="alignLeft">
                                    We offer a wide and ever-expanding range of subjects at both an A-Level and GCSE level. These include: Maths, English, French, Spanish, Psychology, History and Law.
                                </p>

                                <div className="dividerLine" style={{border: '2px solid #e4d7a6'}}></div>

                                <p className="alignRight">
                                    We also offer a selection of different programmes which are tailored to suit specific needs. These include our headstarter programme: designed to give students in years 10 and 12 a boost starting their new courses, our elite 1-to-1 programme: designed to teach students how to learn effectively rather than the content itself (a new, revolutionary idea in the education sector) and our support for schools programme: designed to upskill a large group of students at the same time.
                                </p>
                            </td>
                            <td>
                                <SmartImage imageURL='SUBJECTS_WE_OFFER ' imageClasses="mainImage" />
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className="dividerLine"></div>

            {/*about us section*/}
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <SmartImage imageURL="ABOUT_USE_URL" imageClasses="mainImage" />
                            </td>
                            <td style={{width: '60%'}}>
                                <h2>
                                    About us
                                </h2>
                                <p>
                                    Dale Banham, the author of several leading GCSE History textbooks, leads our elite-level tutors who have been in the business of education for decades. With specialists in subjects all the way from Maths to Law, there simply isn't a reason not to choose Banham Education Consultancy for your development.
                                </p>
                                <Link to="/about">
                                    <h3>
                                        Find out more →
                                    </h3>
                                </Link>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>

            {/*our blog section*/}
            <div>
                <h1>
                    Our blog
                </h1>
                <table>
                    <thead>
                        <tr>
                            <td style={{width: '60%'}}>
                                <h2>
                                    Keep caught up with us
                                </h2>
                                <p>
                                    BLOG__DESCRIPTION
                                    <br/>Nostrud ullamco sunt cillum incididunt in duis irure nulla excepteur duis id nisi labore cillum.Incididunt commodo excepteur fugiat nostrud duis sit consectetur duis sint officia et deserunt.Est dolor sit esse cillum excepteur veniam non dolor nulla est voluptate mollit.In do sint amet aliquip.Dolore ipsum duis tempor esse.
                                </p>

                                <Link to="/blog">
                                    <h3>
                                        View our blog →
                                    </h3>
                                </Link>
                            </td>

                            <td>
                                <SmartImage imageURL='IMAGE_URL' imageClasses={'mainImage'} />
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>

            {/*quotes from students section*/}
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <SmartImage imageURL='QUOTES_FROM_STUDENTS' imageClasses="mainImage" />
                            </td>
                            <td style={{width: '60%'}}>
                                <h2>
                                    Our reviews
                                </h2>
                                <p>
                                    We're one of the best education consultancies out there, but don't take it form us: take it form the many students who have already benefited from our upskilling sessions:
                                </p>

                                <div className="dividerLine" style={{border: '2px solid #e4d7a6'}}></div>
                                
                                {/*actual quotes*/}
                                <p className="alignLeft" style={{marginBottom: 0}}>
                                    "FIRST_QUOTE"
                                </p>
                                <p className="noVerticalSpacing alignLeft">
                                    -FIRST_QUOTE_AUTHOR
                                </p>

                                <p className="alignRight" style={{marginBottom: 0}}>
                                    "SECOND_QUOTE"
                                </p>
                                <p className="noVerticalSpacing alignRight">
                                    -SECOND_QUOTE_AUTHOR
                                </p>

                                <p className="alignLeft" style={{marginBottom: 0}}>
                                    "THIRD_QUOTE"
                                </p>
                                <p className="noVerticalSpacing alignLeft">
                                    -THIRD_QUOTE_AUTHOR
                                </p>

                                <p className="alignRight" style={{marginBottom: 0}}>
                                    "FOURTH_QUOTE"
                                </p>
                                <p className="noVerticalSpacing alignRight">
                                    -FOURTH_QUOTE_AUTHOR
                                </p>

                                <p className="alignLeft" style={{marginBottom: 0}}>
                                    "FIFTH_QUOTE"
                                </p>
                                <p className="noVerticalSpacing alignLeft">
                                    -FIFTH_QUOTE_AUTHOR
                                </p>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        </React.Fragment>
    );
};