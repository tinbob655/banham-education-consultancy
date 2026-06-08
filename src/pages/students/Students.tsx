import React from 'react';
import PageHeader from "../../components/pageHeader/PageHeader.tsx";
import GenericMarkupSection from "../../components/GenericMarkupSection.tsx";
import List from "../../components/list/List.tsx";
import InterestedButton from "../../components/InterestedButton.tsx";

export default function Students():React.ReactElement {

    return (
        <React.Fragment>
            <PageHeader title={"Learning how to revise"} subtitle={"Transform your performance"}/>

            <GenericMarkupSection heading={"How can our student revision conferences improve your exam results?"}>
                <p>
                    Our student revision conferences take place during the school holidays and are aimed at students
                    who want to improve their exam performance. Students who attend are taught tried and tested
                    techniques for boosting memory and a set of revision strategies that they can apply to a range
                    of subjects. In addition, they will be provided with model revision timetables and links to
                    additional free online resources that can help them prepare effectively for their upcoming exams.
                    We offer the following support:
                </p>
                <List items={[
                    <p>
                        <span className={"tag"}>Year 10</span>
                        <br/>
                        A one day, <b>summer holiday conference for Year 10 students</b> who are disappointed with their
                        performance in Y10 end of year exams and want to develop successful revision techniques before
                        they start Year 11. This conference includes booster sessions for English and Maths.
                    </p>,

                    <p>
                        <span className={"tag"}>Year 11</span>
                        <br/>
                        A one day, <b>February half-term holiday conference for Year 11 students</b> who want to improve on
                        their Year 11 mock exam results. This conference includes booster sessions for English and
                        Maths. If there is the demand, we can also offer booster sessions for Psychology, History,
                        French, Spanish and Law.
                    </p>,

                    <p>
                        <span className={"tag"}>Year 12</span>
                        <br/>
                        A one day, <b>summer holiday conference for Year 12 students</b> who are disappointed with their
                        performance in Y12 end of year exams and want to develop successful revision techniques before
                        they start Year 13. We can also offer additional booster sessions for English, Maths, Psychology,
                        History, French, Spanish and Law.
                    </p>,
                ]}/>
                <InterestedButton/>
            </GenericMarkupSection>
        </React.Fragment>
    )
}