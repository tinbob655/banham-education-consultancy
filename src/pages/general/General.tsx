import React from 'react';
import PageHeader from "../../components/pageHeader/PageHeader.tsx";
import GenericMarkupSection from "../../components/GenericMarkupSection.tsx";
import List from "../../components/list/List.tsx";
import InterestedButton from "../../components/InterestedButton.tsx";

export default function General():React.ReactElement {

    return (
        <React.Fragment>
            <PageHeader title={"General CPD"} subtitle={"Developing Teaching & Learning"}/>

            <GenericMarkupSection heading={"Bespoke training opportunities for schools and trusts"}>
                <p>
                    Please get in touch to discuss what training or support you need. The menu below provides an
                    overview of support that has been offered to schools and trusts in the past however we are always
                    keen to adapt the training to suit the context of the school/trust that we are working with.
                    We also offer a similar range of training opportunities for Early Careers Teachers:
                </p>
                <List items={[
                    `The science of learning – using educational research to developing effective revision strategies.`,

                    `Formative assessment strategies – effective questioning, utilising the power of feedback and
                     encouraging students to take responsibility for their learning.`,

                    `Developing Literacy across the curriculum (this includes strategies for developing whole school
                     approaches to reading and writing.)`,

                    `Developing a whole school CPD programme that incorporates action research and fosters
                     professional curiosity.`,
                ]}/>
                <InterestedButton/>
            </GenericMarkupSection>
        </React.Fragment>
    )
}