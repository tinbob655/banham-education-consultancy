import React, {useEffect, useState} from 'react';
import SmartImage from '../../multiPage/smartImage.jsx';
import staffData from './staffData.json';
import InterestedGetInTouchHere from '../../multiPage/interestedGetInTouchHereButton.jsx';
import './aboutStyles.scss';

export default function About() {

    const [staffSections, setStaffSections] = useState(null);

    useEffect(() => {
         //only run if staff data exists
        if (staffData) {
            let staffSectionsHTML = [];

            Object.keys(staffData).forEach((staffMember) => {
                
                //get the data of the current staff member
                const singleStaffData = staffData[staffMember];

                //alternate image being on the left and right of the text
                if (Object.keys(staffData).indexOf(staffMember) % 2 === 0) {

                    //image on left, text on right
                    staffSectionsHTML.push(
                        <React.Fragment>
                            <tr>
                                <td>
                                    
                                    {/*profile picture*/}
                                    <SmartImage imagePath={singleStaffData.profileImagePath || 'logo/logoFull.png'} imageClasses={singleStaffData.profileImagePath ? 'profilePictureImage' : 'mainImage'} />
                                    {singleStaffData.profileImagePath ? '' : <p style={{fontFamily: 'monospace', fontSize: '13px'}}>The above image will change when a profile picture is supplied</p>}
                                </td>
                                <td colSpan={2}>

                                    {/*staff member name + qualifications*/}
                                    <h2 className="alignRight" style={{marginBottom: 0}}>
                                        {staffMember + (singleStaffData.qualifications ? ` ${singleStaffData.qualifications}` : '')}
                                    </h2>

                                    <div className="dividerLine weakDivider"></div>

                                    {/*description of staff member*/}
                                    <p className="alignLeft" style={{marginLeft: '5%', whiteSpace: 'pre-wrap'}}>
                                        {staffMember} is our {singleStaffData.subject || '{NO_SUBJECT_PROVIDED}'} tutor, specialising in {singleStaffData.specialisation || '{NO_SPECIALISATION_PROVIDED}'}. {singleStaffData.description.replaceAll('%LINE%', '\n\n') || '{NO_DESCRIPTION_PROVIDED}'}
                                    </p>
                                </td>
                            </tr>
                        </React.Fragment>
                    );
                }
                else {

                    //image on right, text on left
                    staffSectionsHTML.push(
                        <React.Fragment>
                            <tr>
                                <td colSpan={2}>

                                    {/*staff member name + qualifications*/}
                                    <h2 className="alignLeft" style={{marginBottom: 0}}>
                                        {staffMember + (singleStaffData.qualifications ? ` ${singleStaffData.qualifications}` : '')}
                                    </h2>

                                    <div className="dividerLine weakDivider"></div>

                                    {/*description of staff member*/}
                                    <p className="alignRight" style={{marginRight: '5%'}}>
                                        {staffMember} is our {singleStaffData.subject || '{NO_SUBJECT_PROVIDED}'} tutor, specialising in {singleStaffData.specialisation || '{NO_SPECIALISATION_PROVIDED}'}. {singleStaffData.description || '{NO_DESCRIPTION_PROVIDED}'}
                                    </p>
                                </td>

                                <td>
                                    
                                    {/*profile picture*/}
                                    <SmartImage imagePath={singleStaffData.profileImagePath || 'logo/logoFull.png'} imageClasses={singleStaffData.profileImagePath ? 'profilePictureImage' : 'mainImage'} />
                                    {singleStaffData.profileImagePath ? '' : <p style={{fontFamily: 'monospace', fontSize: '13px'}}>The above image will change when a profile picture is supplied</p>}
                                </td>
                            </tr>
                        </React.Fragment>
                    );
                };

                //if this is not the last member of staff, add a divider line
                if (Object.keys(staffData).indexOf(staffMember) != Object.keys(staffData).length -1) {
                    staffSectionsHTML.push(
                        <React.Fragment>
                            <tr>
                                <td colSpan={3}>
                                    <div className="dividerLine"></div>
                                </td>
                            </tr>
                        </React.Fragment>
                    );
                };
            });
            setStaffSections(staffSectionsHTML);
        };

    }, []);

    return(
        <React.Fragment>
            <h1 style={{marginBottom: 0}}>
                About us
            </h1>
            <p className="noVerticalSpacing">
                Experts in education
            </p>

            <div className="dividerLine"></div>

            {/*meet the team section*/}
            <div>
                <h2 className="alignLeft" style={{marginLeft: '15%'}}>
                    Meet the team:
                </h2>
                <table>
                    <thead>
                        <tr>
                            <td style={{width: '40%'}}></td>
                            <td style={{width: '20%'}}></td>
                            <td style={{width: '40%'}}></td>
                        </tr>
                        {staffSections}
                    </thead>
                </table>
            </div>

            <div className="dividerLine"></div>

            {/*contact us section*/}
            <div>
                {staffSections && staffSections.length % 2 === 0 ? (
                    <React.Fragment>
                        {/*image on left, text on right*/}
                        <table>
                            <thead>
                                <tr>
                                    <td>
                                        <SmartImage imageURL='CONTACT_US_IMAGE_URL' imageClasses="mainImage" />
                                    </td>
                                    <td style={{width: '60%'}}>
                                        <h2>
                                            Contact us:
                                        </h2>
                                        <p>
                                            If you want to book a session with us for schools, trusts or students, or you have an enquiry, then please do not hesitate to click the below button
                                        </p>
                                        <InterestedGetInTouchHere/>
                                    </td>
                                </tr>
                            </thead>
                        </table>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {/*text on left, image on right*/}
                        <table>
                            <thead>
                                <tr>
                                    <td style={{width: '60%'}}>
                                        <h2>
                                            Contact us:
                                        </h2>
                                        <p>
                                            If you want to book a session with us for schools, trusts or students, or you have an enquiry, then please do not hesitate to click the below button
                                        </p>
                                        <InterestedGetInTouchHere/>
                                    </td>
                                    <td>
                                        <SmartImage imagePath="logo/logoFull.png" imageClasses="mainImage" />
                                    </td>
                                </tr>
                            </thead>
                        </table>
                    </React.Fragment>
                )}
            </div>
        </React.Fragment>
    );
};