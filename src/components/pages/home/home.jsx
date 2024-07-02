import React from 'react';
import SmartImage from '../../multiPage/smartImage.jsx';
import { useNavigate } from 'react-router-dom';
import FancyButton from '../../multiPage/fancyButton.jsx';

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
                <table style={{width: '90%'}}>
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
                                    Welcome to Banham Education Consultancy: where potential becomes reality. We offer three main services to help you or your students get ahead of the game with their education. These services are:
                                </p>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>

            {/*three main services section*/}
            <div>
                <table>
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
        </React.Fragment>
    );
};