import React from 'react';

export default function Loading():React.ReactElement {

    const styles:React.CSSProperties = {
        marginTop: '25px'
    }

    return (
        <div style={styles}>
            <h2>
                Loading page...
            </h2>
        </div>
    )
}