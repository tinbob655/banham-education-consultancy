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
                Raising achievement for all
            </p>

            <div className="dividerLine"></div>

            {/*welcome section*/}
            <div>
                <table style={{width: '90%', margin: 'unset'}}>
                    <thead>
                        <tr>
                            <td>
                                <SmartImage imagePath="logo/logoFull.png" imageClasses="mainImage" />
                            </td>
                            <td>
                                <h2>
                                    Turning potential into reality
                                </h2>
                                <p className="alignLeft">
                                We offer a range of support packages for schools and students, specialising in providing practical ways to help all students fully engage with their learning, remember more and perform better in tests and exams. <br/>These services are:

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
                                <FancyButton onClick={() => {navigate('/generalCPD')}}>
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
                                <FancyButton onClick={() => {navigate('/students')}}>
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
                                    •	Bespoke support for trusts and schools in developing a rigorous History curriculum that delivers excellent outcomes for all students. 
                                </p>

                                <div className="dividerLine weakDivider"></div>

                                <p className="alignRight">
                                    •	CPD sessions for teachers that provide research informed ways to improve teaching and learning, provide effective feedback and improve recall. 
                                </p>

                                <div className="dividerLine weakDivider"></div>

                                <p className="alignLeft">
                                    •	Expert one to one tutoring for students – proven ways to develop effective study habits, boost memory and improve performance in tests and exams.  
                                </p>

                                <div className="dividerLine weakDivider"></div>

                                <p className="alignRight">
                                    •	School holiday courses that help students ‘get back on track’ and boost their results at GCSE and A Level. This includes ‘results booster’ courses for Maths, English, French, Spanish, Psychology, History and Law.
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
                                <p className="alignLeft">
                                    Banham Educational Consultancy was established by Dale Banham. Dale is an experienced senior leader, the author of several leading GCSE History textbooks and an honourary member of the Historical Association and the Schools History Project. As well as teaching, he provides support for a wide range of local authorities, trusts and schools. Dale also works in partnership with other subject experts to provide support for students that has been shown to significantly boost their grades. 
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
                                    Each month our blog provides teachers and school leaders with practical tips and interesting links to educational research that we are using to develop teaching and learning. 
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
                                    Banham Educational Consultancy prides itself in providing bespoke support for schools, teachers and students that really works. We have helped thousands of students achieve better results and run over 100 successful training courses for teachers. 
                                </p>

                                <div className="dividerLine weakDivider"></div>
                                
                                {/*actual quotes*/}
                                <p className="alignLeft" style={{marginBottom: '7.5vh'}}>
                                    Thank you everyone for your help. I’d have never made it through GCSEs, let alone A levels without it. The revision tips really worked and saved me so much time.<br/> -(Year 13 student, August 2024) 
                                </p>

                                <p className="alignRight" style={{marginBottom: '7.5vh'}}>
                                    We ordered the textbooks for school, and I use them every lesson, never looking back! 100% 9-4 grades for my class last summer! Waking up ‘fresh’ from Year 11 Parents Evening last night. Lots of parents ordering copies of your books for revision, I also found the new revision guides which look exciting, I’ve just ordered a copy of each. <br/>-(Head of History, February 2024) 
                                </p>

                                <p className="alignLeft" style={{marginBottom: '7.5vh'}}>
                                    I’ve only just finished shaking after opening my results. I can’t believe it. I went up from a Grade 3 to a Grade 7 using the methods and resources you went through. They also helped with English Lit and all the Sciences. Thank you so much, you helped me develop the confidence to believe in myself. <br/>-(Year 11 student, August 2023) 
                                </p>

                                <p className="alignRight" style={{marginBottom: '7.5vh'}}>
                                    Can I say what a pleasure it was to be in your session at the HA conference over the weekend.  A great session.  Your work on lower attaining students is of particular interest. Thanks again for the talk, it was really helpful. <br/>-(Attendee at the Historical Association Conference in Birmingham, May 2024) 
                                </p>

                                <p className="alignLeft" style={{marginBottom: 0}}>
                                    I wanted to say how much I enjoyed your session at the Practical Histories Conference, I found it really useful and inspiring for activities to implement in the classroom. I am re-writing our Scheme of Work for teaching the Holocaust with a focus on survivor stories and I think that Frank's story would be excellent for this. I really liked your approach and will now implement something similar in our school. <br/>-(Attendee Schools History Project Online Conference, February 2024)
                                </p>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        </React.Fragment>
    );
};