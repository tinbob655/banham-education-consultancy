import React from 'react';
import PageHeader from "../../general/PageHeader.tsx";
import GenericMarkupSection from "../../general/GenericMarkupSection.tsx";

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
            </GenericMarkupSection>
        </React.Fragment>
    )
}