import React from 'react';

interface params {
    icon?:boolean
}

export default function Logo({icon}:params):React.ReactElement {

    return (
        <img src={icon ? 'logoIcon.png' : 'logoFull.png'} alt={"Banham Education Consultancy logo"}/>
    )
}