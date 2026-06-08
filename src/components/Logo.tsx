import React from 'react';

interface params {
    icon?:boolean;
    noBG?:boolean;
}

export default function Logo({icon, noBG}:params):React.ReactElement {

    //work our which image to use
    let imageSrc:string;
    if (icon) {
        imageSrc = 'logo/logoIcon.png';  //just the icon part of the logo
    }
    else {
        if (noBG) {
            imageSrc = 'logo/logoFullNoBG.png';  //the entire logo but with no background
        }
        else {
            imageSrc = 'logo/logoFull.png';  //the normal logo
        }
    }

    return (
        <img src={imageSrc} alt={"Banham Education Consultancy logo"}/>
    )
}