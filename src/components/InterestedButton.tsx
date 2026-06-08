import React from 'react';
import FancyButton from "./fancyButton/FancyButton.tsx";

export default function InterestedButton():React.ReactElement {

    return (
        <FancyButton text={"Interested? Get in touch at dalebanham@gmail.com"}
                     action={() => {window.location.href = "mailto:dalebanham@gmail.com"}} />
    )
}