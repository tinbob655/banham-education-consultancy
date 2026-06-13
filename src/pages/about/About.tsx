import React from 'react';
import PageHeader from "../../components/pageHeader/PageHeader.tsx";
import staffData from './staffData.json' with {type: 'json'}
import type {staffMember} from "./staffMember";
import GenericMarkupSection from "../../components/GenericMarkupSection.tsx";
import InterestedButton from "../../components/InterestedButton.tsx";
import './aboutStyles.scss';
import TextWrappedImage from "../../components/textWrappedImage/TextWrappedImage.tsx";

export default function About():React.ReactElement {

    return (
        <React.Fragment>
            <PageHeader title={"About"} subtitle={"Experts in education"} />

            {/*transform staff data into markup*/}
            {staffData.map((staffMember: staffMember, index:number):React.ReactElement => {

                const last:boolean = index === staffData.length - 1;
                return (
                    <GenericMarkupSection heading={`${staffMember.name}: ${staffMember.qualifications ?? ''}`}>

                        {/*description & profile picture*/}
                        <TextWrappedImage
                            imageClassName={"profilePicture"}
                            imageSrc={staffMember.profileImagePath}
                            alt={`Image of ${staffMember.name}.`}
                            imageRight
                            caption={staffMember.name}
                        >
                            <p style={{whiteSpace: 'pre-wrap'}}>
                                {staffMember.description}
                            </p>
                        </TextWrappedImage>

                        {/*interested button on last staff member*/}
                        {last && <InterestedButton/>}
                    </GenericMarkupSection>

                )
            })}
        </React.Fragment>
    )
}