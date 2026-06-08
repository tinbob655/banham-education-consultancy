import React from 'react';
import PageHeader from "../../components/pageHeader/PageHeader.tsx";
import GenericMarkupSection from "../../components/GenericMarkupSection.tsx";
import List from "../../components/list/List.tsx";
import InterestedButton from "../../components/InterestedButton.tsx";

export default function Tutoring():React.ReactElement {

    return (
        <React.Fragment>
            <PageHeader title={"1-To-1 Tutoring"} subtitle={"A new take on tutoring"}/>

            <GenericMarkupSection heading={"Improve results in all your exam subjects"}>
                <p>
                    Our elite level one-to-one tutoring aims to improve a student’s test or exam performances in all
                    their subjects, not just one! Research shows that many of the revision and memory techniques we
                    teach students are transferable to a range of subjects. This reduces the need for lots of different
                    subject tutors and saves money in the long run. These unique tutoring sessions help students become
                    better motivated, better at remembering important facts and concepts, and better independent
                    learners. Students who work with us develop life long effective study habits that make learning
                    easier and revision a lot less hard work.
                    <br/><br/>
                    We have found that the elite level tutoring sessions we offer improve results at GCSE and A Level.
                    Students learn how to learn and employ the strategies we teach in the tutoring sessions in a range
                    of subjects. Most parents and students buy into the full programme. This consists of 4 one-hour
                    tutoring sessions that cover the important areas that hold the key to exam success:
                </p>
                <List items={[
                    'Motivation and goal setting',
                    'Booting your memory and effective revision strategies',
                    'Developing effective study routines',
                    'Taking responsibility for your learning',
                ]}/>
                <InterestedButton/>
            </GenericMarkupSection>

            <GenericMarkupSection heading={"Expert subject specific tutoring"}>
                <p>
                    We are confident that our elite level tutoring sessions will significantly improve results for most
                    students. However, sometimes students and their parents may be looking to improve their exam
                    performance in one particular subject. We offer a team of subject experts to help improve results
                    in a range of GCSE and A level subjects. We specialise in English, Maths, History, French, Spanish,
                    Psychology and Law.
                </p>
                <List items={[
                    `All of our tutors use the key memory and study techniques that are delivered in our elite level 
                    tutoring programme so that the subject specific tutoring can build on tried and tested methods 
                    for learning effectively.`,

                    ` All of our tutors are experienced teachers who have either been Heads of Department or Examiners.`,

                    `All of our tutors can offer tutoring online if parents/students prefer this approach.`
                ]}/>
                <InterestedButton/>
            </GenericMarkupSection>
        </React.Fragment>
    )
}