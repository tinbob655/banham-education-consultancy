import React from 'react';

interface params {
    title: string;
    subtitle: string;
}

export default function PageHeader({title, subtitle}:params):React.ReactElement {

    return (
        <div className={"pageHeader"}>
            <h1 style={{marginLeft: '7.5%'}}>
                {title}
            </h1>
            <p style={{marginLeft: '10%'}}>
                {subtitle}
            </p>

            <div className={"sectionDivider"} />
        </div>
    )
}