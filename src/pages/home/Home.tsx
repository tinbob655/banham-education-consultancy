import React from 'react';
import PageHeader from "../../components/pageHeader/PageHeader.tsx";
import GenericMarkupSection from "../../components/GenericMarkupSection.tsx";
import FancyButton from "../../components/fancyButton/FancyButton.tsx";
import List from "../../components/list/List.tsx";

export default function Home():React.ReactElement {

    return (
        <React.Fragment>

            <PageHeader
                title={"Banham Education Consultancy"}
                subtitle={"Raising achievement for all"}
                image={"/general/banhamAndMayor.jpg"}
                imageAlt={"Image of Mr Banham receiving an award from the Mayor of Ipswich"}
                imageCaption={"Ipswich consultant recognised for promotion of maritime town"}
                />

            <GenericMarkupSection heading={"Turning potential into reality"}>
                <p>
                    We offer a range of support packages for schools and students, specialising in providing practical
                    ways to help all students fully engage with their learning, remember more and perform better in tests
                    and exams. These services are:
                </p>
                <div className={"caravan"}>
                    <FancyButton text={"Bespoke History CPD"} path={"/history"} />
                    <FancyButton text={"Teaching & learning CPD"} path={"/general"} />
                    <FancyButton text={"Elite one-to-one tutoring"} path={"/tutoring"} />
                    <FancyButton text={"Results boosters"} path={"/students"} />
                </div>
            </GenericMarkupSection>

            <GenericMarkupSection heading={"What's on offer?"}>
                <List items={[
                    `Bespoke support for trusts and schools in developing a rigorous History curriculum that delivers
                     excellent outcomes for all students.`,

                    `CPD sessions for teachers that provide research informed ways to improve teaching and learning,
                     provide effective feedback and improve recall.`,

                    `Expert one to one tutoring for students – proven ways to develop effective study habits, boost
                     memory and improve performance in tests and exams.`,

                    ` School holiday courses that help students ‘get back on track’ and boost their results at GCSE and
                     A Level. This includes ‘results booster’ courses for Maths, English, French, Spanish, Psychology, 
                     History and Law.`,
                ]}/>
            </GenericMarkupSection>

            <GenericMarkupSection heading={"About us"}>
                <p>
                    Banham Educational Consultancy was established by Dale Banham. Dale is an experienced senior leader,
                    the author of several leading GCSE History textbooks and an honorary member of the Historical
                    Association and the Schools History Project. As well as teaching, he provides support for a wide
                    range of local authorities, trusts and schools. Dale also works in partnership with other subject
                    experts to provide support for students that has been shown to significantly boost their grades.
                </p>
                <FancyButton text={"Find out more"} path={"/about"} />
            </GenericMarkupSection>

            <GenericMarkupSection heading={"Our blog"}>
                <p>
                    <b>
                        Keep caught up with us
                    </b>
                    Each month our blog provides teachers and school leaders with practical tips and interesting links
                    to educational research that we are using to develop teaching and learning.
                </p>
                <FancyButton text={"View our blog"} path={"/resources"} />
            </GenericMarkupSection>

            <GenericMarkupSection heading={"Our reviews"}>
                <p>
                    Banham Educational Consultancy prides itself in providing bespoke support for schools, teachers and
                    students that really works. We have helped thousands of students achieve better results and run over
                    100 successful training courses for teachers. Here is some feedback we have received:
                </p>
                <div className={"sectionDivider"}/>
                <List items={[
                    <p>
                        "Thank you everyone for your help. I’d have never made it through GCSEs, let alone A levels without
                     it. The revision tips really worked and saved me so much time."
                        <br/>
                        <span className={"tag"}>Year 13 student, August 2024</span>
                    </p>,

                    <p>
                        "We ordered the textbooks for school, and I use them every lesson, never looking back! 100% 9-4
                        grades for my class last summer! Waking up ‘fresh’ from Year 11 Parents Evening last night. Lots
                        of parents ordering copies of your books for revision, I also found the new revision guides which
                        look exciting, I’ve just ordered a copy of each."
                        <br/>
                        <span className={"tag"}>Head of History, February 2024</span>
                    </p>,

                    <p>
                        "I’ve only just finished shaking after opening my results. I can’t believe it. I went up from a
                        Grade 3 to a Grade 7 using the methods and resources you went through. They also helped with English
                        Lit and all the Sciences. Thank you so much, you helped me develop the confidence to believe in myself."
                        <br/>
                        <span className={"tag"}>Year 11 student, August 2023</span>
                    </p>,

                    <p>
                        "Can I say what a pleasure it was to be in your session at the HA conference over the weekend. A
                        great session. Your work on lower attaining students is of particular interest. Thanks again for
                        the talk, it was really helpful."
                        <br/>
                        <span className={"tag"}>Attendee at the Historical Association Conference in Birmingham, May 2024</span>
                    </p>,

                    <p>
                        "I wanted to say how much I enjoyed your session at the Practical Histories Conference, I found it
                        really useful and inspiring for activities to implement in the classroom. I am re-writing our
                        Scheme of Work for teaching the Holocaust with a focus on survivor stories and I think that
                        Frank's story would be excellent for this. I really liked your approach and will now implement
                        something similar in our school."
                        <br/>
                        <span className={"tag"}>Attendee Schools History Project Online Conference, February 2024</span>
                    </p>,
                ]} />
            </GenericMarkupSection>
        </React.Fragment>
    )
}