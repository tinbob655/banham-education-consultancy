import React from 'react';
import SmartImage from '../../multiPage/smartImage.jsx';
import InterestedGetInTouchHere from '../../multiPage/interestedGetInTouchHereButton.jsx';

export default function Elite1To1() {
    return(
        <React.Fragment>
            <h1 style={{marginBottom: 0, paddingBottom: 0}}>
                1-To-1 Tutoring
            </h1>
            <p className="noVerticalSpacing">
                A new take on tutoring
            </p>

            <div className="dividerLine"></div>

            {/*one session, instant results section*/}
            <table>
                <thead>
                    <tr>
                        <td>
                            <SmartImage imagePath="logo/logoFull.png" imageClasses="mainImage" />
                        </td>
                        <td style={{width: '60%'}}>
                            <h2>
                                Improve results in all your exam subjects
                            </h2>
                            <p className="alignLeft">
                                    Our elite level one-to-one tutoring aims to improve a student’s test or exam performances in all their subjects, not just one! Research shows that many of the revision and memory techniques we teach students are transferable to a range of subjects. This reduces the need for lots of different subject tutors and saves money in the long run. These unique tutoring sessions help students become better motivated, better at remembering important facts and concepts, and better independent learners. Students who work with us develop life long effective study habits that make learning easier and revision a lot less hard work. 
                                    <br/><br/>
                                    We have found that the elite level tutoring sessions we offer improve results at GCSE and A Level. Students learn how to learn and employ the strategies we teach in the tutoring sessions in a range of subjects. Most parents and students buy into the full programme. This consists of 4 one-hour tutoring sessions that cover the important areas that hold the key to exam success: 
                            </p>
                            <p className="alignLeft">
                            •	Motivation and goal-setting 
                            <br/><br/>
                            •	Boosting your memory and effective revision strategies  
                            <br/><br/>
                            •	Developing effective study routines
                            <br/><br/>
                            •	Taking responsibility for your learning 
                            </p>
                            <InterestedGetInTouchHere/>
                        </td>
                    </tr>
                </thead>
            </table>

            <div className="dividerLine"></div>

            {/*upskilling section*/}
            <table>
                <thead>
                    <tr>
                        <td style={{width: '60%'}}>
                            <h2>
                                Expert subject specific tutoring
                            </h2>
                            <p className="alignLeft">
                                We are confident that our elite level tutoring sessions will significantly improve results for most students.  However, sometimes students and their parents may be looking to improve their exam performance in one particular subject. We offer a team of subject experts to help improve results in a range of GCSE and A level subjects. We specialise in English, Maths, History, French, Spanish, Psychology and Law. 
                            </p>
                            <p className="alignLeft">
                            • All of our tutors use the key memory and study techniques that are delivered in our elite level tutoring programme so that the subject specific tutoring can build on tried and tested methods for learning effectively. 
                            <br/><br/>
                            •	All of our tutors are experienced teachers who have either been Heads of Department or Examiners. 
                            <br/><br/>
                            •	All of our tutors can offer tutoring online if parents/students prefer this approach. 
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
    );
};