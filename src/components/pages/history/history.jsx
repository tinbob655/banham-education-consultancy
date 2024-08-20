import React from 'react';
import SmartImage from '../../multiPage/smartImage.jsx';
import InterestedGetInTouchHere from '../../multiPage/interestedGetInTouchHereButton.jsx';
import { Link } from 'react-router-dom';
import staffData from '../about/staffData.json';
import '../about/aboutStyles.scss';

export default function History() {

    const banhamData = staffData['Dale Banham'];

    return(
        <React.Fragment>
            <h1 style={{marginBottom: 0}}>
                History
            </h1>
            <p className="noVerticalSpacing">
                Bespoke support for Primary Schools, Secondary Schools and Trusts
            </p>

            <div className="dividerLine"></div>

            {/*lead by banham section*/}
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <SmartImage imagePath={banhamData.profileImagePath} imageClasses="profilePictureImage"/>
                            </td>
                            <td style={{width: '60%'}}>
                                <h2>
                                    {'Dale Banham' + (banhamData.qualifications ? ` (${banhamData.qualifications})` : '')}
                                </h2>
                                <p>
                                    Dale Banham is an Honorary Fellow of the Historical Association and the Schools History Project. He currently delivers training on curriculum development and raising attainment in history for many schools and Trusts. He also works for ITT providers, delivering history specific training for Secondary and Primary trainee teachers and ECTs. Dale has written many articles for educational journals such as ‘Teaching History’. He has published several KS3 and GCSE History textbooks for Hodder Education and worked as a consultant for archive collections and the Imperial War Museum. Dale has been a Head of History and a County Adviser for Humanities (covering all Key Stages). 
                                    <br/><br/> 
                                    Dale was a Senior Leader at a large comprehensive school for 14 years, where he was responsible for curriculum development, teaching and learning and CPD. He has always been involved in educational research, in particular: effective revision methods, utilising the power of feedback, literacy, diversity and inclusion. In 2024, his school was recognised as a national ‘Centre of Excellence’ for inclusion, as part of the IQM Inclusive School Award. 

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
                                    Bespoke support for History Departments and Trusts
                                </h2>
                                <p>
                                    Please get in touch to discuss what training or support you need. The menu below provides an overview of support that has been offered to schools and trusts in the past however we are always keen to adapt the training to suit the context of the school/trust that we are working with. The support we offer includes:
                                </p>

                                <div className="dividerLine weakDivider"></div>

                                <p className="alignLeft">
                                    -	Raising attainment at GCSE and/or A Level (including supporting lower attainers)
                                    <br/>
                                    -	Effective revision strategies 
                                    <br/>
                                    -	Creative History Teaching 
                                    <br/>
                                    -	Developing disciplinary thinking and extended writing 
                                    <br/>
                                    -	Developing reading in History & the power of stories 
                                    <br/>
                                    -	Curriculum design (at Key Stage 2 or Key Stage 3) 

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