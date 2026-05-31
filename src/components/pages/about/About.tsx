import React from 'react';
import PageHeader from "../../general/PageHeader.tsx";
import staffData from './staffData.json' with {type: 'json'}
import type {staffMember} from "./staffMember";
import GenericMarkupSection from "../../general/GenericMarkupSection.tsx";

export default function About():React.ReactElement {

    return (
        <React.Fragment>
            <PageHeader title={"About"} subtitle={"Experts in education"} />

            {/*transform staff data into markup*/}
            {staffData.map((staffMember: staffMember, index: number):React.ReactElement => {
                const left:boolean = index % 2 === 1;
                return (
                    <GenericMarkupSection heading={`${staffMember.name} ${staffMember.qualifications ?? ''}`} left={left}>
                        <p style={{whiteSpace: 'pre-wrap'}}>
                            {staffMember.description}
                        </p>
                    </GenericMarkupSection>

                )
            })}
        </React.Fragment>
    )
}