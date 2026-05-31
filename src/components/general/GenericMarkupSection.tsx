import React from 'react';

interface params {
    heading: string;
    left?:boolean;
    children: React.ReactNode;
}

export default function GenericMarkupSection({heading, left, children}:params):React.ReactElement {

    const alignment:string = left ? "alignLeft" : "alignRight";

    return (
        <section className={alignment}>
            <h2 className={"sectionTitle"}>
                {heading}
            </h2>

            {children}

            <div className={"sectionDivider"} />
        </section>
    )
}