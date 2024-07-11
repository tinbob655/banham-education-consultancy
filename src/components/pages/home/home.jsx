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
                                <SmartImage imagePath="logo/logoFull.png" imageClasses="mainImage" imageStyles={{height: '55vh'}} />
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

            {/*three main services section*/}
            <div>
                <table style={{maxWidth: 'unset'}}>
                    <thead>
                        <tr>
                            <td>
                                <FancyButton onClick={() => {navigate('/headstarter')}}>
                                    <h3>
                                        Our headstarter programme
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
                                <FancyButton onClick={() => {navigate('/supportForSchools')}}>
                                    <h3>
                                        Support for schools
                                    </h3>
                                </FancyButton>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className="dividerLine"></div>

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
        </React.Fragment>
    );
};