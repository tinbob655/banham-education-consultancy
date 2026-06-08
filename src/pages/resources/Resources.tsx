import React from 'react';
import PageHeader from "../../components/PageHeader.tsx";
import GenericMarkupSection from "../../components/GenericMarkupSection.tsx";
import Blog from "./Blog.tsx";
import RecommendedItems from "./RecommendedItems.tsx";

export default function Resources():React.ReactElement {

    return (
        <React.Fragment>
            <PageHeader title={"Our resources"} subtitle={"Take a look at our blog and our recommended resources"}/>

            {/*blog section*/}
            <GenericMarkupSection heading={"Our blog"}>
                <p>
                    We try to keep an up-to-date blog with frequent posts to keep you informed on what's happening here
                    at Banham Education Consultancy. Take a look:
                </p>
                <Blog/>
            </GenericMarkupSection>

            {/*recommended resources section*/}
            <GenericMarkupSection heading={"Recommended resources"}>
                <p>
                    There are many resources which we at Banham Education Consultancy would recommend to all students
                    in order to enrich their studies. These are:
                </p>
                <RecommendedItems/>
            </GenericMarkupSection>
        </React.Fragment>
    )
}