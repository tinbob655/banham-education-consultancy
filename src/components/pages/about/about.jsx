import React, {useEffect, useState} from 'react';
import SmartImage from '../../multiPage/smartImage.jsx';
import staffData from './staffData.json';
import InterestedGetInTouchHere from '../../multiPage/interestedGetInTouchHereButton.jsx';
import './aboutStyles.scss';
import {useIsMobile} from '../../../context/mobileContext.jsx';

export default function About() {

    const [staffSections, setStaffSections] = useState(null);
    const isMobile = useIsMobile();

    useEffect(() => {
         //only run if staff data exists
        if (staffData) {
            let staffSectionsHTML = [];

            //desktop staff sections
            if (!isMobile) {
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
                                            {staffMember} is our {singleStaffData.subject || '{NO_SUBJECT_PROVIDED}'} tutor. {singleStaffData.description || '{NO_DESCRIPTION_PROVIDED}'}
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
                                            {staffMember + (singleStaffData.qualifications ? ` ${singleStaffData.qualifications}` : ' {NO_QUALIFICATIONS_PROVIDED}')}
                                        </h2>
    
                                        <div className="dividerLine weakDivider"></div>
    
                                        {/*description of staff member*/}
                                        <p className="alignRight" style={{marginRight: '5%', whiteSpace: 'pre-wrap'}}>
                                            {staffMember} is our {singleStaffData.subject || '{NO_SUBJECT_PROVIDED}'} tutor. {singleStaffData.description || '{NO_DESCRIPTION_PROVIDED}'}
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
            }

            //mobile staff sections
            else {
                Object.keys(staffData).forEach((staffMember) => {

                    //get the data of the current staff member
                    const singleStaffData = staffData[staffMember];

                    const indexMod2 = Object.keys(staffData).indexOf(staffMember) % 2;

                    staffSectionsHTML.push(
                        <React.Fragment>

                            {/*staff member image*/}
                            <SmartImage imagePath={singleStaffData.profileImagePath || 'logo/logoFull.png'} imageStyles={indexMod2 === 0 ? {float: 'left', marginLeft: '10px'} : {float: 'right', marginRight: '10px'}} imageClasses={singleStaffData.profileImagePath ? 'profilePictureImage' : 'mainImage'} />

                            {/*staff member name + qualifications*/}
                            <h2>
                                {staffMember + ' ' + (singleStaffData.qualifications || '{NO QUALIFICATIONS PROVIDED}')}
                            </h2>

                            {/*description of staff member*/}
                            <p style={{whiteSpace: 'pre-wrap'}} className={indexMod2 === 0 ? 'alignRight' : 'alignLeft'}>
                                {staffMember} is our {singleStaffData.subject || '{NO_SUBJECT_PROVIDED}'} tutor. {singleStaffData.description || '{NO_DESCRIPTION_PROVIDED}'}
                            </p>
                        </React.Fragment>
                    );

                    //if this is not the last staff member, then add a soft divider below
                    if (Object.keys(staffData).indexOf(staffMember) != Object.keys(staffData).length -1) {
                        staffSectionsHTML.push(
                            <div className="dividerLine weakDivider"></div>
                        );
                    }
                });
            };
            setStaffSections(staffSectionsHTML);
        };

    }, []);

    //desktop about page
    if (!isMobile) {
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
                                            <SmartImage imagePath="logo/logoFull.png" imageClasses="mainImage" />
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
    }

    //mobile about page
    else {
        return (
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
                    <h2>
                        Meet the team:
                    </h2>
                    {staffSections}
                </div>

                <div className="dividerLine"></div>

                {/*contact us section*/}
                <div>
                    {staffSections && staffSections.length % 2 === 1 ? (
                        <React.Fragment>

                            {/*image on left, text on right*/}
                            <table>
                                <thead>
                                    <tr>
                                        <td style={{width: '60%'}}>
                                            <SmartImage imagePath="logo/logoFull.png" imageClasses="mainImage" />
                                        </td>
                                        <td>
                                            <h2>
                                                Contact us:
                                            </h2>
                                        </td>
                                    </tr>
                                </thead>
                            </table>
                            <p style={{marginTop: '10px'}} className="alignLeft">
                                If you want to book a session with us for schools, trusts or students, or you have an enquiry, then please do not hesitate to click the below button
                            </p>
                            <InterestedGetInTouchHere/>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>

                            {/*image on right, text on left*/}
                            <table>
                                <thead>
                                    <tr>
                                        <td>
                                            <h2>
                                                Contact us:
                                            </h2>
                                        </td>
                                        <td style={{width: '60%'}}>
                                            <SmartImage imagePath="logo/logoFull.png" imageClasses="mainImage" />
                                        </td>
                                    </tr>
                                </thead>
                            </table>
                            <p style={{marginTop: '10px'}}>
                                If you want to book a session with us for schools, trusts or students, or you have an enquiry, then please do not hesitate to click the below button
                            </p>
                            <InterestedGetInTouchHere/>
                        </React.Fragment>
                    )}
                </div>
            </React.Fragment>
        );
    };
};