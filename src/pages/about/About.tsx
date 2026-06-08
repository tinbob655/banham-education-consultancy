import React from 'react';
import PageHeader from "../../components/PageHeader.tsx";
import staffData from './staffData.json' with {type: 'json'}
import type {staffMember} from "./staffMember";
import GenericMarkupSection from "../../components/GenericMarkupSection.tsx";

export default function About():React.ReactElement {

    return (
        <React.Fragment>
            <PageHeader title={"About"} subtitle={"Experts in education"} />

            {/*transform staff data into markup*/}
            {staffData.map((staffMember: staffMember):React.ReactElement => {
                return (
                    <GenericMarkupSection heading={`${staffMember.name} ${staffMember.qualifications ?? ''}`}>
                        <span className={"tag"}>{staffMember.subject}</span>
                        <p style={{whiteSpace: 'pre-wrap'}}>
                            {staffMember.description}
                        </p>
                    </GenericMarkupSection>

                )
            })}
        </React.Fragment>
    )
}