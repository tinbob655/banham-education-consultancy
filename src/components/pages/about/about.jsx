import React from 'react';
import SmartImage from '../../multiPage/smartImage.jsx';
import staffData from './staffData.json';
import './aboutStyles.scss';

export default function About() {

    function getStaffSections() {

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
                                        {staffMember + (singleStaffData.qualifications ? ` (${singleStaffData.qualifications})` : '')}
                                    </h2>

                                    {/*years of experience*/}
                                    <p className="noVerticalSpacing alignRight">
                                        {singleStaffData.yearsOfExperience ? `${singleStaffData.yearsOfExperience} years experience` : ''}
                                    </p>

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
                                        {staffMember + (singleStaffData.qualifications ? ` (${singleStaffData.qualifications})` : '')}
                                    </h2>

                                    {/*years of experience*/}
                                    <p className="noVerticalSpacing alignLeft">
                                        {singleStaffData.yearsOfExperience ? `${singleStaffData.yearsOfExperience} years experience` : ''}
                                    </p>

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
    
            return staffSectionsHTML;
        }
        else return <></>;
    };

    return(
        <React.Fragment>
            <h1 style={{marginBottom: 0}}>
                About us
            </h1>
            <p className="noVerticalSpacing">
                Experts in excellence
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
                        {getStaffSections()}
                    </thead>
                </table>
            </div>

            <div className="dividerLine"></div>

            {/*what we offer section*/}
            <div>
                <table>
                    <thead>
                        <tr>
                            {Object.keys(staffData).length % 2 === 0 ? (
                                <React.Fragment>

                                    {/*image on left, text on right*/}
                                    <td>
                                        <SmartImage imageURL="WHAT_WE_OFFER" imageClasses="mainImage" />
                                    </td>
                                    <td style={{width: '60%'}}>
                                        <h2>
                                            What we offer
                                        </h2>
                                        <p>
                                            We offer a selection of different programmes which are tailored to suit specific needs. These include our headstarter programme: designed to give students in years 10 and 12 a boost starting their new courses, our elite 1-to-1 programme: designed to teach students how to learn effectively rather than the content itself (a new, revolutionary idea in the education sector) and our support for schools programme: designed to upskill a large group of students at the same time.
                                        </p>
                                    </td>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>

                                    {/*image on right, text on left*/}
                                </React.Fragment>
                            )}
                        </tr>
                    </thead>
                </table>
            </div>
        </React.Fragment>
    );
};