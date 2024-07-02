import React from 'react';

export default function FancyButton({children, onClick}) {
    return(
        <React.Fragment>
            <button type="button" onClick={() => {onClick()}}>
                {children}
            </button>
        </React.Fragment>
    );
};