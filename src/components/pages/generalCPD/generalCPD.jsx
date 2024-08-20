import React from 'react';
import SmartImage from '../../multiPage/smartImage.jsx';
import InterestedGetInTouchHere from '../../multiPage/interestedGetInTouchHereButton.jsx';

export default function GeneralCPD() {
    return (
        <React.Fragment>
            <h1 style={{marginBottom: 0}}>
                General CPD
            </h1>
            <p className="noVerticalSpacing">
                Developing Teaching & Learning
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
                                    Bespoke training opportunities for schools and trusts
                                </h2>
                                <p>
                                    Please get in touch to discuss what training or support you need. The menu below provides an overview of support that has been offered to schools and trusts in the past however we are always keen to adapt the training to suit the context of the school/trust that we are working with. We also offer a similar range of training opportunities for Early Careers Teachers. 
                                </p>
                                <p className="alignLeft">
                                    -	The science of learning – using educational research to developing effective revision strategies 
                                    <br/>
                                    -	Formative assessment strategies – effective questioning, utilising the power of feedback and encouraging students to take responsibility for their learning 
                                    <br/>
                                    -	Developing Literacy across the curriculum (this includes strategies for developing whole school approaches to reading and writing) 
                                    <br/>
                                    -	Developing a whole school CPD programme that incorporates action research and fosters professional curiosity 

                                </p>
                                <InterestedGetInTouchHere />
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>

        </React.Fragment>
    );
};