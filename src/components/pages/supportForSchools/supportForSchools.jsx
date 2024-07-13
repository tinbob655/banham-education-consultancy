import React from 'react';
import SmartImage from '../../multiPage/smartImage.jsx';

export default function SupportForSchools() {
    return (
        <React.Fragment>
            <h1 style={{marginBottom: 0}}>
                Support for schools
            </h1>
            <p className="noVerticalSpacing">
                Boost your pupils' learning
            </p>

            <div className="dividerLine"></div>

            {/*description section*/}
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <SmartImage imageURL="SUPPORT_FOR_SCHOOLS_IMAGE" imageClasses="mainImage" />
                            </td>
                            <td style={{width: '60%'}}>
                                <h2>
                                    What we do
                                </h2>
                                <p>
                                    SUPPORT_FOR_SCHOOLS_DESCRIPTION <br/>
                                    Cillum non commodo proident esse proident commodo ut ipsum aliqua esse minim nulla eu.Aliquip nulla ea amet adipisicing.Magna nostrud sit velit ullamco sit do labore duis amet aliqua voluptate.
                                </p>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className="dividerLine"></div>

            {/*our experience*/}
            <div>
                <table>
                    <thead>
                        <tr>
                            <td style={{width: '60%'}}>
                                <h2>
                                    Our experience
                                </h2>
                                <p>
                                    Our elite level tutors have been working in the education sector for years, and they know exactly how to deliver our content effectively. We are already working with a rugby school and a trust in Colchester (Essex). The students and teachers here have reviewed our programme positively and would recommend it to other schools.
                                </p>
                            </td>
                            <td>
                                <SmartImage imageURL="EXPERIENCE_URL" imageClasses="mainImage" />
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        </React.Fragment>
    );
};