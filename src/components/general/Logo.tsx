import React from 'react';

interface params {
    icon?:boolean;
    noBG?:boolean;
}

export default function Logo({icon, noBG}:params):React.ReactElement {

    //work our which image to use
    let imageSrc:string;
    if (icon) {
        imageSrc = 'logoIcon.png';  //just the icon part of the logo
    }
    else {
        if (noBG) {
            imageSrc = 'logoFullNoBG.png';  //the entire logo but with no background
        }
        else {
            imageSrc = 'logoFull.png';  //the normal logo
        }
    }

    return (
        <img src={imageSrc} alt={"Banham Education Consultancy logo"}/>
    )
}