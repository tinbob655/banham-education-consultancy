import React from 'react';
import PageHeader from "../../general/PageHeader.tsx";
import GenericMarkupSection from "../../general/GenericMarkupSection.tsx";
import List from "../../general/list/List.tsx";
import InterestedButton from "../../general/InterestedButton.tsx";

export default function History():React.ReactElement {

    return (
        <React.Fragment>
            <PageHeader title={"History CPD"} subtitle={"Bespoke support for Primary Schools, Secondary Schools and Trusts"} />

            <GenericMarkupSection heading={"Dale Banham (BA (Hons) MA (Education)"}>
                <p>
                    Dale Banham is an Honorary Fellow of the Historical Association and the Schools History Project.
                    He currently delivers training on curriculum development and raising attainment in history for many
                    schools and Trusts. He also works for ITT providers, delivering history specific training for
                    Secondary and Primary trainee teachers and ECTs. Dale has written many articles for educational
                    journals such as ‘Teaching History’. He has published several KS3 and GCSE History textbooks for
                    Hodder Education and worked as a consultant for archive collections and the Imperial War Museum.
                    Dale has been a Head of History and a County Adviser for Humanities (covering all Key Stages).
                    <br/><br/>
                    Dale was a Senior Leader at a large comprehensive school for 14 years, where he was responsible for
                    curriculum development, teaching and learning and CPD. He has always been involved in educational
                    research, in particular: effective revision methods, utilising the power of feedback, literacy,
                    diversity and inclusion. In 2024, his school was recognised as a national ‘Centre of Excellence’
                    for inclusion, as part of the IQM Inclusive School Award.
                </p>
            </GenericMarkupSection>

            <GenericMarkupSection heading={"Bespoke support for History Departments and Trusts"} left>
                <p>
                    Please get in touch to discuss what training or support you need. The menu below provides an
                    overview of support that has been offered to schools and trusts in the past however we are
                    always keen to adapt the training to suit the context of the school/trust that we are working
                    with. The support we offer includes:
                </p>
                <List items={[
                    "Raising attainment at GCSE and/or A-level (including supporting lower attainers).",
                    "Effective revision strategies.",
                    "Creative History Teaching.",
                    "Developing disciplinary thinking and extended writing.",
                    "Developing reading in History & the power of stories.",
                    "Curriculum design (at Key Stage 2 or Key Stage 3)",
                ]}/>
                <InterestedButton/>
            </GenericMarkupSection>
        </React.Fragment>
    )
}